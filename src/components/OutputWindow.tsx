'use client';

import React, { useState } from "react";
import axios from "axios";
import { useCodeStore } from "@/store/codeStore";
import { Button } from "@/components/ui/button";
import { Play, Loader2 } from "lucide-react";

interface TestCase {
  input: string;
  output: string;
}

export default function OutputWindow({ testCases }: { testCases: TestCase[] }) {
  const { code, language, output, setOutput } = useCodeStore();
  const [isRunning, setIsRunning] = useState(false);

  const runWithTestCases = async () => {
    if (!code.trim()) {
      setOutput("⚠️ Please enter valid code before running.");
      return;
    }

    setIsRunning(true);
    let results: string[] = [];

    for (let i = 0; i < testCases.length; i++) {
      const { input, output: expected } = testCases[i];
      try {
        const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
          language: language,
          version: "*",
          files: [{ name: "main", content: code }],
          stdin: input,
        });

        const actual = (res.data.run.stdout || "").trim();
        const pass = actual === expected.trim();

        results.push(
          `Test ${i + 1}: Input: ${input.trim()} | Expected: ${expected.trim()} | Got: ${actual} | ${
            pass ? "✅ Pass" : "❌ Fail"
          }`
        );
      } catch (err) {
        results.push(`Test ${i + 1}: ❌ Error running code.`);
      }
    }

    setOutput(results.join("\n"));
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden h-full">
      {/* ==== Toolbar ==== */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-800">
        <span className="text-sm font-bold tracking-wide text-purple-400">
          📜 Output
        </span>
        <Button
          onClick={runWithTestCases}
          disabled={isRunning}
          className="bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-2 cursor-pointer"
        >
          {isRunning ? <Loader2 className="animate-spin" size={16} /> : <Play size={16} />}
          {isRunning ? "Running..." : "Run Test Cases"}
        </Button>
      </div>

      {/* ==== Output Terminal ==== */}
      <pre
        className="flex-1 p-4 overflow-auto text-sm font-mono leading-6 bg-neutral-950 text-green-400 rounded-b-lg"
      >
        {output
          ? output.split("\n").map((line, idx) => (
              <div
                key={idx}
                className={
                  line.includes("✅")
                    ? "text-green-400"
                    : line.includes("❌")
                    ? "text-red-400"
                    : "text-gray-300"
                }
              >
                {line}
              </div>
            ))
          : "Output will appear here after running the code."}
      </pre>
    </div>
  );
}
