import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/ProblemPage/CodeEditor";
import OutputWindow from "@/components/ProblemPage/OutputWindow";
import prisma from "../../../../lib/prisma";
import { Info } from "lucide-react";
import ProblemStatement from "@/components/ProblemPage/ProblemStatement";

export default async function ProblemPage({ params }: { params: Promise<{ problemId: string }>; }) {
  const { problemId } = await params;
  const problemIdNumber = Number(problemId);

  const problem = await prisma.problem.findUnique({
    where: { id: problemIdNumber },
  });

  if (!problem) {
    return (
      <div className="p-20 flex items-center justify-center gap-5 text-center text-2xl text-white">
        <Info /> Problem not found
      </div>
    );
  }

  const difficultyColors = {
    EASY: "bg-green-500/15 text-green-400 border border-green-500/30",
    MEDIUM: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    HARD: "bg-red-500/15 text-red-400 border border-red-500/30",
  };

  return (
    // <div className="bg-neutral-950 text-white h-screen">
    <div className="bg-neutral-950 text-white">
      <ResizablePanelGroup direction="horizontal">
        {/* ==== Left Panel: Problem Statement ==== */}
        <ResizablePanel className="border-r border-neutral-800 bg-neutral-900">
          <ProblemStatement problemIdNumber={problemIdNumber}  />
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* ==== Right Panel: Editor + Output ==== */}
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            {/* Editor */}
            <ResizablePanel>
              <div className="flex flex-col h-full bg-neutral-900 border-b border-neutral-800">
                <div className="px-4 py-3 bg-neutral-800 border-b border-neutral-700 text-sm font-bold text-purple-300 tracking-wide shadow-inner">
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
                            input: (ex as { input: string; output: string })
                              .input,
                            output: (
                              ex as { input: string; output: string }
                            ).output,
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