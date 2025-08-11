import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
import OutputWindow from "@/components/OutputWindow";
import prisma from "../../../../lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

export default async function ProblemPage({ params }: { params: Promise<{ problemId: string }>}) {
  const { problemId } = await params;
  const problemIdNumber = Number(problemId);

  const problem = await prisma.problem.findUnique({
    where: { id: problemIdNumber },
  });

  if (!problem) {
    return <div className="p-20 flex items-center justify-center gap-5 text-center text-2xl text-white"><Info />Problem not found</div>;
  }

  const difficultyColors = {
    EASY: "bg-green-500/20 text-green-400 border border-green-500/30",
    MEDIUM: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    HARD: "bg-red-500/20 text-red-400 border border-red-500/30",
  };

  return (
    <div className="h-screen bg-neutral-950 text-white overflow-y-clip">
      <ResizablePanelGroup direction="horizontal">
        {/* Left Panel: Problem Statement */}
        <ResizablePanel className="border-r border-neutral-800 bg-neutral-900">
          <div className="p-8 flex flex-col space-y-8">
            {/* Header: Title + Badge */}
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl md:text-3xl font-extrabold text-purple-400">
                {problemIdNumber}. {problem.title}
              </h1>
              <Badge className={`${difficultyColors[problem.difficulty as keyof typeof difficultyColors]} px-4 py-1 rounded-lg text-sm font-semibold`}>
                {problem.difficulty}
              </Badge>
            </div>

            {/* Problem Description */}
            <section className="bg-neutral-800 border border-neutral-700 rounded-xl p-5 text-base leading-relaxed whitespace-pre-line shadow-lg">
              {problem.description}
            </section>

            {/* Examples */}
            {Array.isArray(problem.examples) && problem.examples.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-lg font-bold text-purple-300">Examples</h2>
                {problem.examples.map(
                  (example, index) =>
                    example &&
                    typeof example === "object" &&
                    "input" in example &&
                    "output" in example && (
                      <div
                        key={index}
                        className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 space-y-2"
                      >
                        <p className="font-medium text-gray-400">
                          Example {index + 1}
                        </p>
                        <div className="pl-4">
                          <p>
                            <span className="font-semibold text-purple-300">Input:</span>{" "}
                            {(example as { input: string; output: string }).input}
                          </p>
                          <p>
                            <span className="font-semibold text-purple-300">Output:</span>{" "}
                            {(example as { input: string; output: string }).output}
                          </p>
                        </div>
                      </div>
                    )
                )}
              </section>
            )}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />

        {/* Right Panel: Editor + Output */}
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            {/* Editor */}
            <ResizablePanel>
              <div className="flex flex-col h-full bg-neutral-900 border-b border-neutral-800 rounded-none">
                <div className="px-4 py-2 bg-neutral-800 border-b border-neutral-700 text-sm font-bold text-purple-300 tracking-wide">
                  💻 Code Editor
                </div>
                <div className="flex-1">
                  <CodeEditor problemId={problemIdNumber} />
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            {/* Output */}
            <ResizablePanel>
              <div className="h-full bg-neutral-900">
                <OutputWindow
                  testCases={
                    Array.isArray(problem.testCases)
                      ? problem.testCases
                        .filter(
                          (ex) =>
                            ex &&
                            typeof ex === "object" &&
                            "input" in ex &&
                            "output" in ex
                        )
                        .map(
                          (ex) =>
                          ({
                            input: (ex as { input: string; output: string }).input,
                            output: (ex as { input: string; output: string }).output,
                          } as { input: string; output: string })
                        )
                      : []
                  }
                />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
