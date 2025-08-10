import Link from "next/link"
import prisma from "../../../lib/prisma"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import CodeEditor from "@/components/CodeEditor"

export default async function ProblemPage({ params }: { params: Promise<{ problemId: string }> }) {
  const { problemId } = await params
  const problem = await prisma.problem.findUnique({
    where: { id: Number(problemId) }
  })
  console.log(problem)
  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="">
          <div>
            <h1 className={`p-1 font-semibold text-3xl ${problem?.difficulty == 'EASY' ? 'text-green-500' : problem?.difficulty === "MEDIUM" ? 'text-yellow-500' : 'text-red-500'}`}>{problemId}. {problem?.title}</h1>
            <p>
              <strong>Description:</strong> {problem?.description}
            </p>
              {Array.isArray(problem?.examples) && problem.examples.map((example, index) => {
                if (
                  example &&
                  typeof example === "object" &&
                  "input" in example &&
                  "output" in example
                ) {
                  return (
                    <div key={index}>
                      <p>Example {index + 1}:</p>
                        <strong className="ml-3">Input:</strong> {(example as { input: string; output: string }).input} <br />
                        <strong className="ml-3">Output:</strong> {(example as { input: string; output: string }).output}
                    </div>
                  );
                }
                return null;
              })}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel>
              <CodeEditor />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              Three
            </ResizablePanel>
          </ResizablePanelGroup>

        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}