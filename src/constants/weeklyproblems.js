import { PrismaClient } from "@prisma/client";
import cron from "node-cron";
import { GoogleGenAI } from "@google/genai";

const prisma = new PrismaClient();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const generate5Problems = async () => {
    const prompt = `
Generate 5 coding problems in JSON format. Each problem must include:
- title (string)
 - difficulty: "HARD", "EASY", or "MEDIUM"
 - description (string) - a clear, fully detailed and easy-to-understand problem statement. Make it understandable for beginners and cover all necessary details, even if it becomes long. Include necessary context, definitions, and explanations so the reader can fully understand the problem without prior knowledge.
 - constraints (array of strings) - numerical or logical limits for inputs
 - tags (array of strings) - topic/category such as "Array", "Graph", "Dynamic Programming"
 - hints (array of strings) -  small hints
 - examples: array of { "input": string, "output": string, "explanation": string } - at least 2 examples per problem - input must be exactly what a user would type as program input, with no variable names, no equals sign, no extra quotes.
 - testCases: array of { "input": string, "output": string } - at least 5 test cases - include some edge cases - same input rule as above

Input ONLY valid JSON, Output ONLY valid JSON, no markdown, no explanations.
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
        const problems = await generate5Problems();
        const date = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Kolkata'
        }).format(new Date());

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