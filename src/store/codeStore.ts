import { create } from 'zustand';

interface CodeStore {
    localProblemId: number;
    code: string;
    language: string;
    output: string;

    setCode: (code: string) => void;
    setLanguage: (language: string) => void;
    setOutput: (output: string) => void;
    setLocalProblemId: (localProblemId: number) => void;
}

export const useCodeStore = create<CodeStore>((set) => ({
    localProblemId: 0,
    code: "// start coding here...",
    language: "python",
    output: "",

    setLocalProblemId: (localProblemId: number) => set({ localProblemId }),
    setCode: (code) => set({ code }),
    setLanguage: (language) => set({ language }),
    setOutput: (output) => set({ output }),
}))