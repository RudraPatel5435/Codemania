'use client';

import React, { useState } from "react";
import axios from "axios";
import { useCodeStore } from "@/store/codeStore";
import { Button } from "@/components/ui/button";
import { Play, Loader2 } from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"; // <-- shadcn/ui Tabs

interface TestCase {
  input: string;
  output: string;
}

export default function OutputWindow({ testCases }: { testCases: TestCase[] }) {
  const { code, language, output, setOutput } = useCodeStore();
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<
    { input: string; expected: string; actual: string; pass: boolean }[]
  >([]);

  const runWithTestCases = async () => {
    if (!code.trim()) {
      setOutput("⚠️ Please enter valid code before running.");
      return;
    }

    setIsRunning(true);
    let newResults: { input: string; expected: string; actual: string; pass: boolean }[] = [];

    for (let i = 0; i < testCases.length; i++) {
      const { input, output: expected } = testCases[i];
      try {
        const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
          language,
          version: "*",
          files: [{ name: "main", content: code }],
          stdin: input,
        });

        const actual = (res.data.run.stdout || "").trim();
        const pass = actual === expected.trim();

        newResults.push({ input, expected, actual, pass });
      } catch (err) {
        newResults.push({
          input,
          expected,
          actual: "❌ Error running code.",
          pass: false,
        });
      }
    }

    setResults(newResults);
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-lg h-full">
      {/* ==== Toolbar ==== */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-800">
        <span className="text-sm font-bold tracking-wide text-purple-400">
          📜 Output
        </span>
        <Button
          onClick={runWithTestCases}
          disabled={isRunning}
          className="bg-[#C27BFF]/70 hover:bg-[#C27BFF] text-white flex items-center gap-2 cursor-pointer"
        >
          {isRunning ? <Loader2 className="animate-spin" size={16} /> : <Play size={16} />}
          {isRunning ? "Running..." : "Run Test Cases"}
        </Button>
      </div>

      {/* ==== Tabs Output ==== */}
      {results.length > 0 ? (
        <Tabs defaultValue="0" className="flex-1 flex flex-col p-3">
          <TabsList className="bg-neutral-800 border-neutral-700 p-1">
            {results.map((_, idx) => (
              <TabsTrigger
                key={idx}
                value={String(idx)}
                className={`px-4 py-2 text-sm font-medium ${
                  results[idx].pass ? "text-green-400" : "text-red-400"
                }`}
              >
                Test {idx + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          {results.map((result, idx) => (
            <TabsContent key={idx} value={String(idx)} className="p-4 flex flex-col gap-3 bg-neutral-950 flex-1 rounded-xl">
              <div className="text-gray-300">
                <span className="font-bold">Input:</span>
                <pre className="bg-neutral-800 p-2 rounded text-sm overflow-auto">{result.input}</pre>
              </div>
              <div className="text-gray-300">
                <span className="font-bold">Expected Output:</span>
                <pre className="bg-neutral-800 p-2 rounded text-sm overflow-auto text-green-400">{result.expected}</pre>
              </div>
              <div className="text-gray-300">
                <span className="font-bold">Your Output:</span>
                <pre
                  className={`bg-neutral-800 p-2 rounded text-sm overflow-auto ${
                    result.pass ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {result.actual}
                </pre>
              </div>
              <div
                className={`mt-2 font-bold ${
                  result.pass ? "text-green-400" : "text-red-400"
                }`}
              >
                {result.pass ? "✅ Test Passed" : "❌ Test Failed"}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="flex-1 p-4 text-gray-400 text-sm">
          Output will appear here after running the code.
        </div>
      )}
    </div>
  );
}
