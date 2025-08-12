export const starterCode = {
    python: `def solve(i):
    # i is the input as a string
    # Write your code here
    return i  # replace with actual solution


# Don't change anything below this
if __name__ == '__main__':
    i = input().strip()
    print(solve(i))`,

    javascript: `function solve(input) {
    // input is the provided value
    // Write your code here
    return input;  // replace with actual solution
}

// Don't change anything below this
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputData = '';

rl.on('line', (line) => {
    inputData = line.trim();
    console.log(solve(inputData));
});`,

//     typescript: `function solve(input: string): string {
//     // Write your solution here
//     // Example: return input.toUpperCase();
//     return input;
// }

// // Don't change anything below this
// import * as readline from "readline";

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// });

// let inputData = "";

// rl.on("line", (line: string) => {
//     inputData = line.trim();
//     console.log(solve(inputData));
// });`,

//     c: `#include <stdio.h>
// #include <string.h>

// // Implement your solution here
// // The input can be:
// // - A single integer
// // - A single string
// // - An array of integers
// // - An array of strings
// //
// // You need to handle parsing accordingly based on the problem statement.
// // Write your logic inside the solve function.
// void solve(char *input) {
//     // Write your code here
//     // Example: printf("%s\n", input);
// }

// // Don't change anything below this
// int main() {
//     char input[1000];

//     // Read the full input (including spaces)
//     if (fgets(input, sizeof(input), stdin) != NULL) {
//         // Remove trailing newline if any
//         input[strcspn(input, "\n")] = '\0';
//         solve(input);
//     }

//     return 0;
// }}`

}