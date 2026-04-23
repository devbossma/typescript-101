// Inference(automatic) and Explicit(manual).

// The primitives: [string, number, and boolean]
let name: string = "string" // <==== Explicit Type Defenition
let num = 1 // <= Infered type => let num: number
let bool: boolean = true


// Errors: at Compilation phase.
// name = 1 // Type 'number' is not assignable to type 'string'.
// num = true // Type 'boolean' is not assignable to type 'number'.

// Arrays: string[] 0r Array<string>

let steps: number[] = [1, 2, 3]
// Or:
let Steps: Array<string> = ["one", "two", "three"]

// Functions:
// Functions are the primary means of passing data around in JavaScript.
// TypeScript allows you to specify the types of both the input and output values of functions.

function add(x: number, y: number): number {

    // Errors: 
    // without the return statment  you'll => A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
    // if the returned value is not the exact return type of the function
    // return x + y + '' // Type 'string' is not assignable to type 'number'.

    // Correct
    return x + y
}

// Errors: at Compilation phase.
// add() // Expected 2 arguments, but got 0.
// add(1, "2") // Argument of type 'string' is not assignable to parameter of type 'number'.
let sum = add(1, 3) // Type 'number' is not assignable to type 'string'.






export { }
