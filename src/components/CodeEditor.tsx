'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import dynamic from "next/dynamic";
import { useState } from "react";
import axios from "axios";
import { useCodeStore } from "@/store/codeStore";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeEditor() {
  const { code, setCode, language, setLanguage } = useCodeStore();

  return (
    <div className="h-full">

      <div className="flex items-center gap-5 p-2">
        <label className="ml-10">Language:</label>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger>
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">Javascript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="c">C</SelectItem>
            <SelectItem value="cpp">C++</SelectItem>
            <SelectItem value="csharp">C#</SelectItem>
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="go">Go</SelectItem>
            <SelectItem value="rust">Rust</SelectItem>
            <SelectItem value="elixir">Elixir</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-full">
        <MonacoEditor
          height="100%"
          language={language}
          value={code}
          theme='vs-dark'
          onChange={(value) => setCode(value || "")}
        />
      </div>
    </div>
  );
}