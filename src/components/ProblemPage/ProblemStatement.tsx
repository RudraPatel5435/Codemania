import { Badge } from "@/components/ui/badge";
import prisma from "../../../lib/prisma";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import HintsSection from "./HintsSection";

const difficultyColors = {
    EASY: "bg-green-500/15 text-green-400 border border-green-500/30",
    MEDIUM: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    HARD: "bg-red-500/15 text-red-400 border border-red-500/30",
};

const ProblemStatement = async ({ problemIdNumber }: { problemIdNumber: number }) => {
    const problem = await prisma.problem.findUnique({
        where: { id: problemIdNumber },
    });

    if (!problem) return null;

    const examples = Array.isArray(problem.examples)
        ? (problem.examples as { input: string; output: string }[])
        : [];

    const constraints = Array.isArray(problem.constraints)
        ? (problem.constraints as string[])
        : [];

    const hints = Array.isArray(problem.hints)
        ? (problem.hints as string[])
        : [];

    const tags = Array.isArray(problem.tags)
        ? (problem.tags as string[])
        : [];

    return (
        <div className="flex flex-col h-screen overflow-auto scrollbar-hide">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-neutral-900 border-b border-neutral-800 px-8 py-5 flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-extrabold text-purple-400 tracking-tight">
                    {problemIdNumber}. {problem.title}
                </h1>
                <Badge
                    className={`${difficultyColors[problem.difficulty as "EASY" | "MEDIUM" | "HARD"]} px-4 py-1 rounded-lg text-sm font-semibold`}
                >
                    {problem.difficulty}
                </Badge>
            </div>

            {/* Scrollable Content */}
            <div className="px-8 py-6 space-y-8 min-h-screen">

                {/* Tags */}
                {tags.length > 0 && (
                    <section className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Problem Description */}
                <section className="bg-neutral-800/80 border border-neutral-700 rounded-xl p-6 text-base leading-relaxed whitespace-pre-line shadow-lg">
                    {problem.description}
                </section>



                {/* Examples */}
                {examples.length > 0 && (
                    <section className="space-y-4">
                        <h2 className="text-lg font-bold text-purple-300">Examples</h2>
                        {examples.map((example, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800/80 border border-neutral-700 rounded-lg p-5 space-y-3 shadow-inner"
                            >
                                <p className="font-medium text-gray-400">Example {index + 1}</p>
                                <div className="pl-4 space-y-1">
                                    <p>
                                        <span className="font-semibold text-purple-300">Input:</span>{" "}
                                        {example.input}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-purple-300">Output:</span>{" "}
                                        {example.output}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {/* Constraints */}
                {constraints.length > 0 && (
                    <section className="space-y-3">
                        <h2 className="text-lg font-bold text-purple-300">Constraints</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            {constraints.map((constraint, index) => (
                                <li key={index}>{constraint}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Hints */}
               <HintsSection hints={hints} /> 

            </div>
        </div>
    );
};

export default ProblemStatement;