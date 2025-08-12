"use client";

import React from "react";
import { Protect } from "@clerk/nextjs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

type Props = {
    hints: string[];
};

export default function HintsSection({ hints }: Props) {
    if (!hints || hints.length === 0) return null;

    const UpgradeMessage = () => (
        <div className="text-sm text-gray-300">
            Upgrade to{" "}
            <span className="font-semibold text-yellow-400">Premium</span> to view this hint.
            <div className="mt-2 flex items-center gap-3">
                <Link href="/pricing" className="text-xs font-medium text-purple-300 underline">
                    View pricing
                </Link>
            </div>
        </div>
    );

    return (
        <section className="space-y-3 pb-10">
            <h2 className="text-lg font-bold text-purple-300">Hints</h2>

            <Accordion type="single" collapsible className="w-full">
                {hints.map((hint, index) => (
                    <AccordionItem key={index} value={`hint-${index}`}>
                        <AccordionTrigger>Hint {index + 1}</AccordionTrigger>

                        <AccordionContent>
                            <Protect
                                plan={"premium"}
                                fallback={<UpgradeMessage />}
                            >
                                <div className="text-sm text-gray-200 leading-relaxed">
                                    {hint}
                                </div>
                            </Protect>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}