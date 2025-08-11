import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Starting database seed...");

    // Week 1 problems
    // const week1 = await prisma.week.create({
    //     data: {
    //         createdAt: new Date(2025, 7, 9), // 9 Aug 2025
    //         problems: {
    //             create: [
    //                 {
    //                     title: "Sum of Two Numbers",
    //                     difficulty: "EASY",
    //                     description: "Given two integers, return their sum.",
    //                     examples: [
    //                         { input: "a = 2, b = 3", output: "5" },
    //                         { input: "a = -1, b = 1", output: "0" },
    //                         { input: "a = 0, b = 0", output: "0" }
    //                     ],
    //                     testCases: [
    //                         { input: "2 3", output: "5" },
    //                         { input: "-1 1", output: "0" },
    //                         { input: "1000000 999999", output: "1999999" },
    //                         { input: "-1000000 -1000000", output: "-2000000" }
    //                     ]
    //                 },
    //                 {
    //                     title: "Reverse a String",
    //                     difficulty: "EASY",
    //                     description: "Reverse the given string.",
    //                     examples: [
    //                         { input: '"hello"', output: '"olleh"' },
    //                         { input: '"world"', output: '"dlrow"' },
    //                         { input: '"a"', output: '"a"' }
    //                     ],
    //                     testCases: [
    //                         { input: "hello", output: "olleh" },
    //                         { input: "world", output: "dlrow" },
    //                         { input: "racecar", output: "racecar" },
    //                         { input: "", output: "" }
    //                     ]
    //                 },
    //                 {
    //                     title: "Longest Word Length",
    //                     difficulty: "MEDIUM",
    //                     description: "Given a sentence, return the length of the longest word.",
    //                     examples: [
    //                         { input: '"The quick brown fox"', output: "5" },
    //                         { input: '"Hello world"', output: "5" },
    //                         { input: '"OpenAI creates AI"', output: "8" }
    //                     ],
    //                     testCases: [
    //                         { input: "The quick brown fox", output: "5" },
    //                         { input: "Hello world", output: "5" },
    //                         { input: "AI", output: "2" },
    //                         { input: "supercalifragilisticexpialidocious", output: "34" }
    //                     ]
    //                 }
    //             ]
    //         }
    //     }
    // });

    // // Week 2 problems
    // const week2 = await prisma.week.create({
    //     data: {
    //         createdAt: new Date(2025, 7, 10), // 10 Aug 2025
    //         problems: {
    //             create: [
    //                 {
    //                     title: "Count Vowels",
    //                     difficulty: "EASY",
    //                     description: "Count the number of vowels in the given string.",
    //                     examples: [
    //                         { input: '"hello"', output: "2" },
    //                         { input: '"world"', output: "1" },
    //                         { input: '"aeiou"', output: "5" }
    //                     ],
    //                     testCases: [
    //                         { input: "hello", output: "2" },
    //                         { input: "world", output: "1" },
    //                         { input: "bcdfg", output: "0" },
    //                         { input: "", output: "0" }
    //                     ]
    //                 },
    //                 {
    //                     title: "Array Sum",
    //                     difficulty: "EASY",
    //                     description: "Return the sum of all numbers in an array.",
    //                     examples: [
    //                         { input: "[1, 2, 3]", output: "6" },
    //                         { input: "[5, -2, 1]", output: "4" },
    //                         { input: "[]", output: "0" }
    //                     ],
    //                     testCases: [
    //                         { input: "1 2 3", output: "6" },
    //                         { input: "5 -2 1", output: "4" },
    //                         { input: "1000000 1000000", output: "2000000" },
    //                         { input: "", output: "0" }
    //                     ]
    //                 },
    //                 {
    //                     title: "Valid Parentheses",
    //                     difficulty: "MEDIUM",
    //                     description: "Given a string of parentheses, determine if it's valid.",
    //                     examples: [
    //                         { input: '"()"', output: "true" },
    //                         { input: '"()[]{}"', output: "true" },
    //                         { input: '"(]"', output: "false" }
    //                     ],
    //                     testCases: [
    //                         { input: "()", output: "true" },
    //                         { input: "()[]{}", output: "true" },
    //                         { input: "(]", output: "false" },
    //                         { input: "([)]", output: "false" },
    //                         { input: "{[]}", output: "true" }
    //                     ]
    //                 }
    //             ]
    //         }
    //     }
    // });

    // // Week 3 problems
    // const week3 = await prisma.week.create({
    //     data: {
    //         createdAt: new Date(2025, 7, 11), // 11 Aug 2025
    //         problems: {
    //             create: [
    //                 {
    //                     title: "Factorial",
    //                     difficulty: "EASY",
    //                     description: "Return the factorial of a given number n.",
    //                     examples: [
    //                         { input: "3", output: "6" },
    //                         { input: "5", output: "120" },
    //                         { input: "0", output: "1" }
    //                     ],
    //                     testCases: [
    //                         { input: "3", output: "6" },
    //                         { input: "5", output: "120" },
    //                         { input: "10", output: "3628800" },
    //                         { input: "1", output: "1" }
    //                     ]
    //                 },
    //                 {
    //                     title: "Palindrome Check",
    //                     difficulty: "EASY",
    //                     description: "Check if a given string is a palindrome.",
    //                     examples: [
    //                         { input: '"racecar"', output: "true" },
    //                         { input: '"hello"', output: "false" },
    //                         { input: '"madam"', output: "true" }
    //                     ],
    //                     testCases: [
    //                         { input: "racecar", output: "true" },
    //                         { input: "hello", output: "false" },
    //                         { input: "A", output: "true" },
    //                         { input: "", output: "true" }
    //                     ]
    //                 },
    //                 {
    //                     title: "Two Sum",
    //                     difficulty: "MEDIUM",
    //                     description: "Given an array of integers and a target, return the indices of two numbers such that they add up to target.",
    //                     examples: [
    //                         { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
    //                         { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    //                         { input: "nums = [3,3], target = 6", output: "[0,1]" }
    //                     ],
    //                     testCases: [
    //                         { input: "2 7 11 15; target=9", output: "[0,1]" },
    //                         { input: "3 2 4; target=6", output: "[1,2]" },
    //                         { input: "3 3; target=6", output: "[0,1]" },
    //                         { input: "0 4 3 0; target=0", output: "[0,3]" },
    //                         { input: "-1 -2 -3 -4 -5; target=-8", output: "[2,4]" }
    //                     ]
    //                 }
    //             ]
    //         }
    //     }
    // });

    // console.log("✅ Seed data created:", { week1, week2, week3 });
    console.log("✅ Seed data created:");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });