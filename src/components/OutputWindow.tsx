import React, { useState } from "react";
import axios from "axios";
import { useCodeStore } from "@/store/codeStore";
import prisma from "../../lib/prisma";

export default function OutputWindow() {
  const { code, language, output, setOutput, localProblemId } = useCodeStore();
  const [isRunning, setIsRunning] = useState(false);
  const problem = prisma.problem.findUnique({
    where: { id: localProblemId }
  })
  console.log(problem)


  const runWithTestCases = async () => {
    if (!code.trim()) {
      setOutput("⚠️ Please enter valid code before running.");
      return;
    }

    setIsRunning(true);
    let results: string[] = [];

    // for (let i = 0; i < testCases.length; i++) {
    //   const { input, expected } = testCases[i];
    //   try {
    //     const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
    //       language,
    //       version: "*",
    //       files: [{ name: "main", content: code }],
    //       stdin: input,
    //     });

    //     const actual = (res.data.run.stdout || "").trim();
    //     const pass = actual === expected;

    //     results.push(
    //       `Test ${i + 1}: Input: ${input.trim()} | Expected: ${expected} | Got: ${actual} | ${pass ? "✅ Pass" : "❌ Fail"}`
    //     );
    //   } catch (err) {
    //     results.push(`Test ${i + 1}: Error running code.`);
    //   }
    // }

    setOutput(results.join("\n"));
    setIsRunning(false);
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <button onClick={runWithTestCases} disabled={isRunning} style={{ marginBottom: "10px" }}>
        {isRunning ? "Running..." : "Run Test Cases"}
      </button>

      <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: "10px",
          flex: 1,
          overflow: "auto",
        }}
      >
        {output || "Output will appear here after running the code."}
      </pre>
    </div>
  );
}
