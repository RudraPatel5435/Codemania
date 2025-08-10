import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
import OutputWindow from "@/components/OutputWindow";
import { useCodeStore } from "@/store/codeStore";
import prisma from "../../../lib/prisma";

// ✅ This stays as a Server Component
export default async function ProblemPage({
  params,
}: {
  params: { problemId: string };
}) {
  const problemId = Number(params.problemId);

  // Fetch the problem from Prisma (server-side)
  const problem = await prisma.problem.findUnique({
    where: { id: problemId },
  });

  if (!problem) {
    return <div className="p-4">Problem not found</div>;
  }

  // ✅ Safely pass only required props to client components
  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div className="p-4">
            <h1
              className={`p-1 font-semibold text-3xl ${problem?.difficulty === "EASY"
                  ? "text-green-500"
                  : problem?.difficulty === "MEDIUM"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
            >
              {problemId}. {problem?.title}
            </h1>
            <p>
              <strong>Description:</strong> {problem?.description}
            </p>

            {Array.isArray(problem?.examples) &&
              problem.examples.map((example, index) => {
                if (
                  example &&
                  typeof example === "object" &&
                  "input" in example &&
                  "output" in example
                ) {
                  return (
                    <div key={index} className="mt-2">
                      <p>Example {index + 1}:</p>
                      <strong className="ml-3">Input:</strong>{" "}
                      {(example as { input: string; output: string }).input}
                      <br />
                      <strong className="ml-3">Output:</strong>{" "}
                      {(example as { input: string; output: string }).output}
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
              {/* Pass problemId to the editor via Zustand initialization */}
              <CodeEditor problemId={problemId} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              {/* Pass test cases as props to OutputWindow */}
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
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
