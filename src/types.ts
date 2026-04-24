// Inference(automatic) and Explicit(manual).

import type crypto = require("crypto")

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
// =========

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

// ========================================

// Declared or return Types ones could be buit in or customized (Type Aliases).
async function getFavoriteNumber(): Promise<number> {
    return 26;
}

// Type Aliases
type ResponseMessage = { code: number, message: string }

async function HttpCustomResponse(c: number, m: string): Promise<ResponseMessage> {
    return { code: c, message: m }
}


// Object Types
// ============

// The parameter's type annotation is an object type
function printCoordinations(point: { x: number; y: number }) {
    //                              ^^^^^^^^^^^^^^^^^^^^^^^^
    // (parameter) point: {
    //     x: number;               <== Type Object
    //     y: number;
    // }
    console.log("The coordinate's x value is " + point.x);
    console.log("The coordinate's y value is " + point.y);
}
printCoordinations({ x: 3, y: 7 });
// or 
let point = { x: 5, y: 65 }
printCoordinations(point)

// Optional Properties

function greting(name?: string): void {
    // if (!name) {
    //     console.log("Hello guest!")
    // } else {
    //     console.log(`Hello ${name}!`)
    // }
    !name ? console.log("Hello guest!") : console.log(`Hello ${name}!`)

}
greting() // <== "Hello guest!"
greting("Yassine") // "Hello Yassine!"


// Union Types

function returnCode(
    code:
        string
        | number
        | boolean) {
    return code
}

// Bothe provided code Type Correct
returnCode("78249827")
returnCode(78249827)

// Assigne a union to a Type Aliase

type returned = string | number | boolean

function returnstatus(code: number | string): returned {
    if (code === "200" || code === 200) {
        return 1
    }
    if (code === 201 || code === "201") {
        return "created"
    }
    if (code === "404" || code === 404) {
        return "Not Found"
    }

    return false
}

console.log(returnstatus(404))   // Not Found
console.log(returnstatus("404")) // Not Found
console.log(returnstatus(500))   // false
console.log(returnstatus("201")) // created
console.log(returnstatus(200))   // 1

// Union Problem:
// function printId(id: number | string) {
//     console.log(id.toUpperCase());


//     // Property 'toUpperCase' does not exist on type 'string | number'.
//     //         Property 'toUpperCase' does not exist on type 'number'.
// }

// The solution is to narrow the union with code:

function printId(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}

printId(1)


function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}

welcomePeople("yassine")



// Interfaces
// An interface declaration is another way to name an object type:

interface Point {
    x: number;
    y: number;
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Extending an interface

interface User {
    name: string
    email: string
}

interface Admin extends User {
    role: string
}

function getAdminInfo(user: Admin) {
    return user;
}

const u1 = getAdminInfo({ name: "Yassine", email: "Y@g.c", role: "admin" })
console.log(u1.name)

// Extending a type via intersections

type UserType = {
    name: string
    email: string
}

// Also String Literal Type are allowed as Type Aliase 
type Role = "user" | "admin"
type AdminType = UserType & { role: Role }

function getAdminTypeInfo(admin: AdminType): void {
    console.log(admin.role)
}

getAdminTypeInfo({ name: "Yassine", email: "Y@g.c", role: "admin" })
// getAdminTypeInfo({ name: "Yassine", email: "Y@g.c", role: "guest" }) // Type '"guest"' is not assignable to type 'Role'.



// Type Assertions
// Sometimes you will have information about the type of a value that TypeScript can’t know about.
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;


// Enums:


enum Status {
    ACTIVE,
    PENDING,
    PROCESSING,
    REJECTED,
    FINISHED
}

function checkTaskStatus(tascId: number | string | crypto.UUID): Status {
    if (tascId === 1) {
        return Status.ACTIVE
    }
    return Status.PENDING
}

checkTaskStatus(1)

