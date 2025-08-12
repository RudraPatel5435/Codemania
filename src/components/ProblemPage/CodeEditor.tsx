'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dynamic from "next/dynamic";
import { useCodeStore } from "@/store/codeStore";
import { useEffect } from "react";
import { starterCode } from "@/constants/starteCode";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeEditor({ problemId }: { problemId: number }) {
  const { code, setCode, language, setLanguage, setLocalProblemId } = useCodeStore();

  useEffect(() => {
    setLocalProblemId(problemId);
  }, [problemId, setLocalProblemId]);

  const changeStarterCode = (lang: string) => {
    switch (lang) {
      case "python":
        setCode(starterCode.python);
        break;
      case "javascript":
        setCode(starterCode.javascript);
        break;
    }}

    return (
      <div className="h-full flex flex-col bg-neutral-900 border border-neutral-800">
        {/* ==== Toolbar ==== */}

        <div className="flex items-center gap-3 p-3 bg-neutral-800 border-b border-neutral-700">
          <label className="text-sm font-semibold text-purple-400">
            Language:
          </label>
          <Select value={language} onValueChange={(newLang) => { setLanguage(newLang); changeStarterCode(newLang) }}>
            <SelectTrigger className="w-40 bg-neutral-900 border-neutral-700 text-white">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 text-white border-neutral-700">
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              {/* <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="c">C</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="csharp">C#</SelectItem>
              <SelectItem value="java">Java</SelectItem> */}
            </SelectContent>
          </Select>
        </div>

        {/* ==== Editor ==== */}
        <div className="flex-1">
          <MonacoEditor
            height="100%"
            language={language}
            value={code}
            theme="vs-dark"
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
            onChange={(value) => setCode(value || "")}
          />
        </div>
      </div>
    );
  }
