/*JavaScript Control Flow
Valid Definition

Control flow is the order in which statements, expressions, and blocks of code are executed in a JavaScript program.

By default, JavaScript executes code sequentially from top to bottom. Control-flow statements allow us to change this normal execution order based on conditions, repetition, jumps, or errors.

*/

// Simple example:-
// console.log("A");

// if (true) {
//     // console.log("B");
// }

// console.log("C");

// Output:
// A
// B
// C

// The if statement controls whether "B" is executed.

// Types of Control Flow:-

// JavaScript control flow can mainly be understood as:

// Control Flow:-

// ├── 1. Sequential execution
// ├── 2. Conditional / selection
// ├── 3. Iteration / looping
// ├── 4. Jump statements
// └── 5. Exception handling


/* 1. Sequential Execution
---------------------------
Definition:-
Sequential execution means statements are executed one after another in the order they appear in the program. */

// Example:

// let a = 10;
// let b = 20;

// let result = a + b;
// console.log(result);

// Execution:

/*
let a = 10
    ↓
let b = 20
    ↓
result = a + b
    ↓
console.log(result)

Output: 30

*/


// This is the normal/default control flow.


// 2. Conditional Control Flow
/* Definition:-

Conditional control flow allows a program to choose which block of code to execute based on whether a condition is true or false.

*/

/* JavaScript provides:
if
if...else
else if
switch
ternary operator

*/

/* 1.if
----------------------
Definition:-
The if statement executes a block of code only when its condition evaluates to true.
*/

// let age = 23;

// if (age >= 18) {
//     // console.log("Adult");
// }

// Output: Adult

// If the condition is false, the block is skipped.

/* 2.if...else
 ------------------------
Definition:-
The if...else statement provides two execution paths: one when the condition is true and another when it is false.

*/

// let age = 15;

// if (age >= 18) {
//     // console.log("Adult");
// } else {
//     // console.log("Minor");
// }

// Output: Minor

// Only one of the two blocks executes.

/* 3.else if
--------------------
Definition:-
else if allows a program to test multiple conditions in sequence.

*/

// let marks = 75;

// if (marks >= 90) {
//     // console.log("A+");
// } else if (marks >= 75) {
//     // console.log("A");
// } else if (marks >= 60) {
//     // console.log("B");
// } else {
//     // console.log("C");
// }

// Output: A

/* JavaScript checks from top to bottom and stops checking once a matching condition is found.  */

/* 4. switch
-----------------
Definition:-
The switch statement selects one block of code to execute by comparing an expression's value against multiple case values.

*/

// Example:-

// let day = 2;

// switch (day) {
//     case 1:
//         // console.log("Monday");
//         break;

//     case 2:
//         // console.log("Tuesday");
//         break;

//     case 3:
//         // console.log("Wednesday");
//         break;

//     default:
//         // console.log("Invalid day");
// }

// Output: Tuesday

/* Important parts:-

switch → expression being checked
case   → possible value
break  → exits switch
default → runs if no case matches

*/

/* 4. Ternary Operator
-------------------------
Definition:-
The ternary operator is a conditional operator that evaluates a condition and returns one of two expressions depending on whether the condition is true or false.

*/

// Syntax:-

// condition ? valueIfTrue : valueIfFalse

// Example:

// let age = 23;

// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

// Output: Adult

// It is basically a short form for simple if...else logic.

/* 5. Iteration / Looping
-------------------------
Definition:-
Iteration is the repeated execution of a block of code while a specified condition or iteration rule is satisfied.

*/

/* JavaScript provides:-

for
while
do...while
for...of
for...in

*/

/* 6. for Loop
-----------------------
Definition

The for loop repeatedly executes a block of code while its condition remains true, with initialization, condition checking, and updating handled in its loop structure.

*/

// for (let i = 1; i <= 5; i++) {
//     // console.log(i);
// }

// Output:

// 1
// 2
// 3
// 4
// 5

/* Structure:

for (initialization; condition; update) {
    // code
}

*/

// Execution:-

/* initialization
      ↓
condition
      ↓
execute body
      ↓
update
      ↓
condition again

*/

/* 7. while Loop
-------------------------
Definition:-
The while loop repeatedly executes a block of code as long as its condition evaluates to true.

*/

// let i = 1;

// while (i <= 5) {
//     // console.log(i);
//     i++;
// }

// Output:

// 1
// 2
// 3
// 4
// 5

// The condition is checked before each iteration.

// Therefore, it can execute zero times if the initial condition is false.

/* 8. do...while
--------------------------
Definition:-
The do...while loop executes its block once before checking the condition and then continues repeating while the condition is true.
*/

// let i = 10;

// do {
//     // console.log(i);
//     i++;
// } while (i <= 5);

// Output: 10

// Even though:

// 10 <= 5 is false.

/* Why?

execute first
    ↓
check condition
    ↓
repeat if true
Important difference
while
→ check condition
→ execute

do...while
→ execute
→ check condition

*/


/* 9. for...of
------------------------
Definition:-
The for...of loop iterates over the values produced by an iterable object, such as an array or string.

*/

// Example:-

// let numbers = [10, 20, 30];

// for (let num of numbers) {
//     // console.log(num);
// }

// Output:

// 10
// 20
// 30

// Memory: for...of → values


/* 10. for...in
---------------------------
Definition
The for...in loop iterates over the enumerable property keys of an object.

*/

// let user = {
//     name: "Rajesh",
//     age: 23
// };

// for (let key in user) {
//     // console.log(key);
// }

// Output:

// name
// age

// To access the values:-

// for (let key in user) {
//     // console.log(user[key]);
// }

// Output:

// Rajesh
// 23

// Memory:
// for...in → keys
// for...of → values


/* 11. Jump Statements
--------------------------
Definition:-

Jump statements change the normal execution flow by terminating, skipping, or returning from a part of the program.

*/

/* Important jump statements:

break
continue
return

*/


/* 12. break
-----------------
Definition:-
The break statement immediately terminates the nearest enclosing loop or switch statement.

*/

// for (let i = 1; i <= 5; i++) {

//     if (i === 3) {
//         break;
//     }
//     // console.log(i);
// }

// Output:

// 1
// 2

// At i === 3:
// break
//  ↓
// loop completely stops


/* 13. continue
--------------------
Definition:-

The continue statement skips the remaining code of the current loop iteration and proceeds to the next iteration.

*/

// for (let i = 1; i <= 5; i++) {

//     if (i === 3) {
//         continue;
//     }

//     // console.log(i);
// }

// Output:

// 1
// 2
// 4
// 5

// 3 is skipped, but the loop continues.

/* Remember
break
→ stop the entire loop

continue
→ skip only the current iteration and start from the next 

*/

/* 14. return
----------------
Definition:-

The return statement terminates execution of the current function and optionally sends a value back to the function caller.

*/

// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);

// console.log(result);

/* Output: 30

Once JavaScript executes: return a + b;

the function ends.

Code after return in that function won't execute.

*/


/* 15. Exception Control Flow
-------------------------------
JavaScript also has control flow for handling errors.

Main statements:

try
catch
finally
throw
*/


/* 16. try...catch
---------------------
Definition:-
try...catch allows a program to execute potentially error-producing code and handle an exception if one occurs.
*/

// try {
//     let result = unknownVariable;
// } catch (error) {
//     // console.log("Something went wrong");
// }

// Instead of leaving the error unhandled, control moves to catch.

Flow:

/* try
 ↓
error?
 ├── No → continue normally
 │
 └── Yes
      ↓
    catch

*/


/* 17. finally
---------------
Definition:-
The finally block contains code that executes after the try and catch processing, whether an exception occurred or not.
it doesn't care the code has an error or not it has alwsays been get executed.

*/

// try {
//     // console.log("Try");
// } catch (error) {
//     // console.log("Catch");
// } finally {
//     // console.log("Finally");
// }

/* Output:

Try
Finally

If an error occurs:

Try
Catch
Finally

*/

/* 18. throw
-----------------
Definition:-
throw is used to manually generate an error when we want to stop normal execution because something is wrong.
*/

// function checkAge(age) {

//     if (age < 18) {
//         throw new Error("Age must be 18 or above");
//     }

//     return "Allowed";
// }

// Then:

try {
    // console.log(checkAge(15));
} catch (error) {
    // console.log(error.message);
}

/* Output:

Age must be 18 or above
Final Control Flow Map

*/

/*
                    CONTROL FLOW
                         │
        ┌────────────────┼─────────────────┐
        │                │                 │
        ↓                ↓                 ↓
   Sequential       Conditional        Iteration
        │                │                 │
   normal order      if                  for
                     else                while
                     else if             do...while
                     switch              for...of
                     ternary             for...in
        │
        └──────────────┬──────────────────┘
                       ↓
                  Jump / Error
                       │
                ┌──────┴──────┐
                ↓             ↓
             Jump          Exception
                │             │
             break          try
             continue       catch
             return         finally
                            throw

Interview-ready definition

If an interviewer asks "What is control flow in JavaScript?", you can answer:

"Control flow is the order in which statements and blocks of code are executed in a JavaScript program. By default, JavaScript executes statements sequentially, but control-flow constructs such as conditional statements, loops, jump statements, and exception handling allow us to change that execution based on conditions, repetition, or errors."

Control flow is the process of controlling the order in which statements and blocks of code are executed in a program. It helps the program decide which code should run, when it should run, and how many times it should run based on conditions, loops, and other situations.
*/

/*
Most important distinctions to remember
Concept	Purpose:-
------------------------------------------

if :- Execute code when a condition is true
if...else :- 	Choose between two paths
else if	 :- Check multiple conditions
switch	:- Select based on matching values
for	:- Repeat code using initialization/condition/update

while :- 	Repeat while condition is true
do...while :- 	Execute at least once, then check
for...of :-	Iterate values
for...in :-	Iterate object keys
break :-	Exit loop/switch
continue :-	Skip current iteration
return :-	Exit function and optionally return value
try...catch :-	Handle exceptions
finally	 :-    Run cleanup/final code
throw :-	Explicitly create an exception

*/

// try {
//     let res = unknownVariable;
// }catch(error){
//     console.log(error);

// }

// OP:- unknownVariable is not defined

let score = 200

if(score > 100){
    const power = "you can fly"
    // console.log(`Hey guys ${power}`)  //op:-Hey guys you can fly
}

// console.log(`Hey guys ${power}`) 
//op:- ReferenceError: power is not defined

// because power is a block scope, we can't access outside.


// one line code 

// const balance = 1000

// if (balance > 500) console.log("you have balance"), console.log("do you want with receipt")


// const balance = 1000

// if (balance < 500){
//     console.log("less than 500");
// }else if (balance < 750 ){
//     console.log("less than 750");
// }else{
//     console.log("less than 1100");
// }

const userLoggedIn = true
const debitCard = true
const loggedInEmail = false

if (userLoggedIn && debitCard){
    // console.log("Allow to buy course");
}
if ( userLoggedIn || loggedInEmail){
    // console.log("user logged in");
}

//&&(and) it means if the all the statement is true then oonly it will go to inside and print the result.

// ||(or) if the anyone of the condition is true it will print the result.


// switch 

// const month = 3

// switch(month){
//     case 1:
//         console.log("january")
//         break
//     case 2:
//         console.log("february")
//         break
//     case 3:
//         console.log("march")
//         // break
//     case 4:
//         console.log("april")
//         break
//     default:
//         console.log("don't match")
//         break
// }


/* important:-

suppose one case is matched and we didn't use the break keyword after that case , in that case switch executes all the code after the matched case excepts default.  */

// see here i comment the break the output is something like this 
// op:-
// march
// april


// for string

const month = "march"

switch(month){
    case "jan":
        console.log("January");
        break
    case "feb":
        console.log("February");
        break
    case "march":
        console.log("March");
        break
    case "april":
        console.log("April");
        break
    default:
        console.log("the month is not here");
        break
}







