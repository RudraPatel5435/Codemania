import { PrismaClient } from "@prisma/client";
import cron from "node-cron";
import fetch from "node-fetch"; // or your HTTP client
import { GoogleGenAI } from "@google/genai";

const prisma = new PrismaClient();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const generate3Problems = async () => {
    const prompt = `
Generate 3 coding problems in JSON format. Each problem must include:
- title (string)
- difficulty: "EASY", "MEDIUM", or "HARD"
- description (string)
- examples: array of { input: string, output: string }
- testCases: array of { input: string, output: string }

Output ONLY valid JSON, no explanations.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });


    const text = response.text.replace(/```(?:json)?\s*/, '').replace(/```$/, '').replace(/^json\s*/, '').trim();

    try {
        const problems = JSON.parse(text);
        if (!Array.isArray(problems)) throw new Error("Expected an array of problems");
        return problems;
    } catch (e) {
        console.error("Failed to parse Gemini response as JSON:", e, "\nResponse text:", text);
        throw e;
    }
}

// Step 2: Insert new week with problems into DB
async function addWeeklyProblems() {
    try {
        const problems = await generate3Problems();

        await prisma.week.create({
            data: {
                createdAt: new Date(),
                problems: {
                    create: problems,
                },
            },
        });

        console.log("✅ Weekly problems added successfully!");
    } catch (error) {
        console.error("❌ Error adding weekly problems:", error);
    }
}


// Step 3: Schedule weekly job - runs every Monday at 00:00 (midnight)

cron.schedule("0 0 * * 1", () => {
    console.log("Starting weekly problem generation job...");
    addWeeklyProblems();
});


// Optional: Run immediately once on start for testing
addWeeklyProblems()