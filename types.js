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
// Functions:
// =========
// Functions are the primary means of passing data around in JavaScript.
// TypeScript allows you to specify the types of both the input and output values of functions.
function add(x, y) {
    // Errors: 
    // without the return statment  you'll => A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
    // if the returned value is not the exact return type of the function
    // return x + y + '' // Type 'string' is not assignable to type 'number'.
    // Correct
    return x + y;
}
// Errors: at Compilation phase.
// add() // Expected 2 arguments, but got 0.
// add(1, "2") // Argument of type 'string' is not assignable to parameter of type 'number'.
// ========================================
// Declared or return Types ones could be buit in or customized (Type Aliases).
async function getFavoriteNumber() {
    return 26;
}
async function HttpCustomResponse(c, m) {
    return { code: c, message: m };
}
// Object Types
// ============
// The parameter's type annotation is an object type
function printCoordinations(point) {
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
let point = { x: 5, y: 65 };
printCoordinations(point);
// Optional Properties
function greting(name) {
    // if (!name) {
    //     console.log("Hello guest!")
    // } else {
    //     console.log(`Hello ${name}!`)
    // }
    !name ? console.log("Hello guest!") : console.log(`Hello ${name}!`);
}
greting(); // <== "Hello guest!"
greting("Yassine"); // "Hello Yassine!"
// Union Types
function returnCode(code) {
    return code;
}
// Bothe provided code Type Correct
returnCode("78249827");
returnCode(78249827);
function returnstatus(code) {
    if (code === "200" || code === 200) {
        return 1;
    }
    if (code === 201 || code === "201") {
        return "created";
    }
    if (code === "404" || code === 404) {
        return "Not Found";
    }
    return false;
}
console.log(returnstatus(404)); // Not Found
console.log(returnstatus("404")); // Not Found
console.log(returnstatus(500)); // false
console.log(returnstatus("201")); // created
console.log(returnstatus(200)); // 1
// Union Problem:
// function printId(id: number | string) {
//     console.log(id.toUpperCase());
//     // Property 'toUpperCase' does not exist on type 'string | number'.
//     //         Property 'toUpperCase' does not exist on type 'number'.
// }
// The solution is to narrow the union with code:
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function getAdminInfo(user) {
    return user;
}
const u1 = getAdminInfo({ name: "Yassine", email: "Y@g.c", role: "admin" });
console.log(u1.name);
function getAdminTypeInfo(admin) {
    console.log(admin.role);
}
getAdminTypeInfo({ name: "Yassine", email: "Y@g.c", role: "admin" });
export {};
