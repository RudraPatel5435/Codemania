import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import prisma from "../../../lib/prisma";
import CodeEditor from "@/components/CodeEditor";
import OutputWindow from "@/components/OutputWindow";

export default async function ProblemPage({
  params,
}: {
  params: { problemId: string };
}) {
  const problemId = Number(params.problemId);

  const problem = await prisma.problem.findUnique({
    where: { id: problemId },
  });

  if (!problem) {
    return (
      <div className="p-6 text-center text-lg text-red-400">
        Problem not found
      </div>
    );
  }

  const difficultyColors: Record<string, string> = {
    EASY: "bg-green-500/20 text-green-400 border border-green-500/30",
    MEDIUM: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    HARD: "bg-red-500/20 text-red-400 border border-red-500/30",
  };

  return (
    <div className="h-screen bg-neutral-950 text-white">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          className="border-r border-neutral-800 bg-neutral-900"
        >
          <div className="p-6 overflow-y-auto h-full space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-purple-400">
                {problemId}. {problem.title}
              </h1>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[problem.difficulty]}`}
              >
                {problem.difficulty}
              </span>
            </div>

            {/* Description */}
            <div className="bg-neutral-800 rounded-lg p-4 text-sm leading-relaxed whitespace-pre-line border border-neutral-700">
              {problem.description}
            </div>

            {/* Examples */}
            {Array.isArray(problem.examples) &&
              problem.examples.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-purple-300">
                    Examples
                  </h2>
                  {problem.examples.map((example, index) => (
                    example &&
                    typeof example === "object" &&
                    "input" in example &&
                    "output" in example && (
                      <div
                        key={index}
                        className="bg-neutral-800 p-3 rounded-lg space-y-1 border border-neutral-700"
                      >
                        <p className="text-sm font-medium text-gray-400">
                          Example {index + 1}
                        </p>
                        <div className="pl-3">
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
                  ))}
                </div>
              )}
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* ==== Right: Code + Output ==== */}
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            {/* Code Editor */}
            <ResizablePanel>
              <div className="flex flex-col h-full bg-neutral-900 border-b border-neutral-800">
                <div className="px-4 py-2 bg-neutral-800 border-b border-neutral-700 text-sm font-medium text-purple-300">
                  💻 Code Editor
                </div>
                <div className="flex-1">
                  <CodeEditor problemId={problemId} />
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Output */}
            <ResizablePanel>
              <div className="flex flex-col h-full bg-neutral-900">
                <div className="px-4 py-2 bg-neutral-800 border-b border-neutral-700 text-sm font-medium text-purple-300">
                  📜 Output
                </div>
                <div className="flex-1 overflow-auto">
                  <OutputWindow
                    testCases={
                      Array.isArray(problem.examples)
                        ? problem.examples
                            .filter(
                              (ex) =>
                                ex &&
                                typeof ex === "object" &&
                                "input" in ex &&
                                "output" in ex
                            )
                            .map((ex) => ({
                              input: (ex as { input: string; output: string }).input,
                              output: (ex as { input: string; output: string }).output,
                            }))
                        : []
                    }
                  />
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
