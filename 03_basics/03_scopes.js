// Scopes 

/*
Scope in JavaScript defines where a variable can be accessed. The main scopes are global, function, block, and module scope. var is function-scoped, while let and const are block-scoped. JavaScript uses lexical scoping, so when looking for a variable, it searches the current scope and then moves through the scope chain toward the outer scopes.

*/

// Basically scope is depends on these three keyword (let, const, var)


/*

What is Scope in JavaScript:-
Scope defines where a variable can be accessed or used in a JavaScript program.

Simple example:
let name = "Rajesh";

function greet() {
    console.log(name);
}
greet();

name is accessible inside greet() because name is in an outer scope.

Think of scope as a boundary that controls variable visibility.

The important scopes are:

Global Scope
Function Scope
Block Scope
Module Scope
Lexical Scope — this is more of a scoping rule/concept than a separate scope created by a keyword.

Let's understand each.

1. Global Scope:-
A variable declared outside functions and blocks can have global scope.

let name = "Rajesh";

function greet() {
    console.log(name);
}
greet();
console.log(name);

Output:

Rajesh
Rajesh
name can be accessed from both places.

Visual
Global Scope
│
├── name
│
└── function greet()
       │
       └── can access name

Important:-
Avoid creating unnecessary global variables because they can be modified from many places and make large programs harder to manage.

2. Function Scope:-
A variable declared inside a function is normally accessible only inside that function.

function test() {
    let age = 23;

    console.log(age);
}

test();
console.log(age); // ❌ ReferenceError

age belongs to the function's scope.

Visual
Outside
   │
   └── function test()
           │
           └── age

Outside the function:
console.log(age);

JavaScript can't find it.


3. Block Scope:-
A block is code surrounded by { }.
let and const are block-scoped.

For example:

if (true) {
    let age = 23;
}

The { } creates a block.

if (true) {
    let name = "Rajesh";
    const age = 23;

    console.log(name);
    console.log(age);
}

console.log(name); // ❌ Error
console.log(age);  // ❌ Error

The variables exist only inside the if block.

Other examples of blocks
if (condition) {
}
for (...) {
}
while (...) {
}
{
    let x = 10;
}


4. var vs let vs const
This is very important in interviews.

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10
console.log(b); // ❌ Error
console.log(c); // ❌ Error

Why?

var   → Function Scope
let   → Block Scope
const → Block Scope

For example:

function test() {

    if (true) {
        var a = 10;
        let b = 20;
    }

    console.log(a); // 10
    console.log(b); // ❌ Error
}

var doesn't respect the if block boundary.

But let does.
5. Lexical Scope:-
Lexical scope means JavaScript determines variable accessibility based on where the code is written.

Example:

let name = "Rajesh";

function outer() {

    let age = 23;

    function inner() {
        console.log(name);
        console.log(age);
    }

    inner();
}

outer();

inner() can access:

name → global scope
age  → outer function scope

because inner() was defined inside outer().

Think:
Global Scope
│
│ name
│
└── outer()
      │
      │ age
      │
      └── inner()
            │
            └── can access age and name

This is lexical scoping.


6. Scope Chain:-
The scope chain is how JavaScript searches for a variable.

Example:

let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(c);
        console.log(b);
        console.log(a);
    }

    inner();
}

outer();

When JavaScript sees:

console.log(a);

it searches:

inner scope
     ↓
outer scope
     ↓
global scope
     ↓
find a

So the rule is:
JavaScript searches from the current scope outward through its parent scopes.


7. Inner Scope Can Access Outer Scope
Example:

let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

inner() can access:

c → own scope
b → outer scope
a → global scope

But the opposite isn't true.

function outer() {

    function inner() {
        let city = "Chennai";
    }

    console.log(city); // ❌ Error
}

outer() cannot access city.

Remember:

Inner → can access outer
Outer → cannot access inner


8. Nested Scope:-
Scopes can exist inside other scopes.

let a = 1;

function outer() {
    let b = 2;

    if (true) {
        let c = 3;

        console.log(a);
        console.log(b);
        console.log(c);
    }
}

There are three levels:

Global
  ↓
Function
  ↓
Block

The inner block can access variables from the outer scopes.


10. Scope vs this:-
Don't confuse scope with this.

Scope:-
Answers:
Where can I access this variable?

let name = "Rajesh";

function test() {
    console.log(name);
}


this:-
Answers:
What does this refer to in this particular function call?

let user = {
    name: "Rajesh",

    greet() {
        console.log(this.name);
    }
};

Here:
Scope → determines variable accessibility
this  → determined by function invocation/context


11. Scope vs Closure:-
These are related but not the same.

A closure happens when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.

Example:

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

let counter = outer();

counter();
counter();
counter();

Output:

1
2
3

inner() remembers count.

This is a closure.

You should learn closures after understanding scope and scope chain.


12. Scope and Hoisting:-
Scope is also related to hoisting, but they are different concepts.

Hoisting is JavaScript's behavior where declarations are processed before the code is executed. Function declarations can generally be called before they are declared. var is hoisted and initialized with undefined, while let and const are hoisted but remain in the Temporal Dead Zone until their declaration is initialized.

Example:

console.log(a);

var a = 10;

Output:

undefined

But:

console.log(b);

let b = 20;

This gives a ReferenceError because b is in the Temporal Dead Zone (TDZ) until its declaration is initialized.

So:

Scope     → where variable is accessible
Hoisting  → how declarations are handled during execution setup
Complete Picture
                    JavaScript Scope
                          │
        ┌─────────────────┼─────────────────┐
        ↓                 ↓                 ↓
     Global            Function           Block
        │                 │                 │
        │                var            let / const
        │
        └────────────── Scope Chain ──────────────┐
                                                   ↓
                                            Outer → Inner
                                                   ↓
                                            Lexical Scope
                                                   ↓
                                              Closures

And modules add another important boundary:

Module Scope
     ↓
Variables belong to that module
     ↓
export / import when sharing is needed
Interview Cheat Sheet
Concept	Meaning
Global Scope	  Accessible from the relevant global environment
Function Scope	  Variable accessible within the function
Block Scope	      Variable accessible within { } block
Module Scope	  Variable belongs to a module
Lexical Scope	  Accessibility is determined by where code is written
Scope Chain	JavaScript searches current → outer → global scope
Closure	Function retains access to its outer lexical variables
var	Function-scoped
let	Block-scoped
const	Block-scoped

*/


/*

What is TDZ in JavaScript?
TDZ = Temporal Dead Zone.

It is the period between entering a scope and the point where a let or const variable is initialized.

During this period, you cannot access the variable.

Simple example
console.log(name); // ❌ ReferenceError

let name = "Rajesh";

Why?

Scope starts
     ↓
name exists but is not initialized
     ↓
   TDZ
     ↓
let name = "Rajesh"
     ↓
name is initialized
     ↓
TDZ ends

So when JavaScript reaches:

console.log(name);

name is in the TDZ, so you get:

ReferenceError
let Example
{
    // TDZ starts

    console.log(age); // ❌ ReferenceError
    let age = 23;

    // TDZ ends
}

The important point is that the TDZ starts when the scope is entered, not simply at the let line.

const Also Has TDZ
console.log(city); // ❌ ReferenceError

const city = "Chennai";

Same behavior:

let   → TDZ
const → TDZ
What about var?
var does not have a TDZ.

console.log(age);

var age = 23;

Output:  undefined

Conceptually:

var age;

console.log(age); // undefined

age = 23;

Why does TDZ exist?

It helps prevent accidentally using a variable before it has been properly initialized.

For example:

let price = 100;

{
    console.log(price); // ❌ ReferenceError

    let price = 200;
}

You might expect the 100 from the outer scope, but the inner price declaration creates a new binding for that block. Before the inner declaration is initialized, that inner price is in the TDZ.

After:

let price = 200;

the TDZ ends, and the inner variable can be used.

Interview answer

TDZ, or Temporal Dead Zone, is the period from when a let or const variable's scope begins until the variable is initialized. During this period, accessing the variable causes a ReferenceError.

*/

var c = 300

if(true){
    let a = 10;
    const b = 20;
    c = 30;
}

// console.log(a); // ReferenceError: a is not defined

// console.log(b); // ReferenceError: a is not defined

// console.log(c);  // 30

// see here we declared the "c" varible two times and it will print the same value , if we not declared the var keyword also it will return the same value 30 here. look at the top.


let a = 300;

if (true){
    let a = 10;
    const b = 30;
    // console.log("inner:",a)
}

// console.log(a)



function one(){
    const username = "rajesh"

    function two(){
        const website = "GitHub"
        // console.log(username)
    }

    // console.log(website) // Error

    two()
}

one()  // op:- rajesh


// function outer(){
//     let count = 0;

//     return function inner(){
//         count++;
//         console.log(count)
//     }

// }

// let counter = outer()

// counter()


console.log(addOne(5));  // op:- 6

function addOne(num){
    return num + 1
}

// but:- look at here

console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}

/*

Here addOne is a function declaration.

Function declarations are fully hoisted, meaning JavaScript makes the entire function available before executing the code.

and second one is a function expression stored inside a const variable.

JavaScript knows that addTwo exists because const is hoisted, but it is not initialized yet.

*/


