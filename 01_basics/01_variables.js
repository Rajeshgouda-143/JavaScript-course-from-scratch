

/*
"var, let, and const are used to declare variables in JavaScript. var is function-scoped and can be redeclared and reassigned. let is block-scoped and can be reassigned but not redeclared. const is block-scoped and cannot be redeclared or reassigned." 

For modern JavaScript, generally use const by default, and use let when the value needs to change.
*/



const accoutId = 144553
let accountEmail = "rajesh@google.com"
var accountPassword = "12345"
accountCity = "Odisha"
let accountState; // undefined

// const:-

// accoutId = 2
// console.log(accoutId);  //TypeError: Assignment to constant variable.

// because we can't reassigned and redeclared the const variable that's why it is raised error.

// console.log();-
//whenever we use this it will display one output at a time .

// console.table([]);:-
//whenever we want to dispaly all the value at a time we use this table console , it will take all the variable at a time in an array and display the value in a table format

// ex:-
// console.table([accoutId,accountEmail,accountPassword,accountCity])

// op:
// ┌─────────┬─────────────────────┐
// │ (index) │ Values              │
// ├─────────┼─────────────────────┤
// │ 0       │ 144553              │
// │ 1       │ 'rajesh@google.com' │
// │ 2       │ '12345'             │
// │ 3       │ 'Odisha'            │
// └─────────┴─────────────────────┘


/*
 let is a Block-scoped { } varible which is used to decleared the varibale , let can be reassigned but not redelared. ex below

 ex:-
let age = 23;
age = 24;        // ✅ reassigned
let age = 25;   // ❌ Error  not redeclared

*/

/*
var is Function-scoped varible it can be reassigned and redeclared.  so that's why we prefer not to use var because of issue in block scope and functional scope.

ex:-

var name = "Rajesh";
name = "Rahul";       // ✅ reassigned
var name = "Amit";    // ✅ redeclared
console.log(name);

*/

/*
 if we write like this (let accountState;) it will return the output is undefined because we not declred the value it is empty.
*/

// there all example you can see below

/*

accountCity = "chennai":- we avoid this way to declare the varible because you haven't told JavaScript to create declare that variable. by using (let, const, var)

In modern JavaScript, especially with strict mode, this can cause an error:

*/


accountEmail = "raj@email.com";
accountPassword = "738356234"
accountCity = "Bangalur";

console.table([accountEmail,accountPassword,accoutId,accountCity,accountState])

/*
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 'raj@email.com' │
│ 1       │ '738356234'     │
│ 2       │ 144553          │
│ 3       │ 'Bangalur'      │
│ 4       │ undefined       │
└─────────┴─────────────────┘
*/







