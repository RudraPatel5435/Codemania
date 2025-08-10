"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import to avoid SSR errors
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeEditor() {
  const [code, setCode] = useState("// start coding here...");
  const [language, setLanguage] = useState("javascript");

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
      
      {/* Language Selection Dropdown */}
      <div>
        <label style={{ marginRight: "10px" }}>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="c">C</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
          <option value="csharp">C#</option>
          <option value="elixir">Elixir</option>
        </select>
      </div>

      {/* Monaco Editor */}
      <div style={{ height: "500px", border: "1px solid #ccc" }}>
        <MonacoEditor
          height="100%"
          language={language}
          value={code}
          theme="vs-dark"
          onChange={(value) => setCode(value || "")}
        />
      </div>
    </div>
  );
}