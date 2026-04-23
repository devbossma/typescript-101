// Inference(automatic) and Explicit(manual).
// The primitives: [string, number, and boolean]
let name = "string"; // <==== Explicit Type Defenition
let num = 1; // <= Infered type => let num: number
let bool = true;
// Errors: at Compilation phase.
// name = 1 // Type 'number' is not assignable to type 'string'.
// num = true // Type 'boolean' is not assignable to type 'number'.
// Arrays: string[] 0r Array<string>
let steps = [1, 2, 3];
// Or:
let Steps = ["one", "two", "three"];
export {};
