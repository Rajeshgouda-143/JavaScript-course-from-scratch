/*

JavaScript Functions — Complete Guide
1. Function Declaration

The normal/basic function.

function greet() {
    console.log("Hello");
}

greet();
Why use it?

When you want to create a reusable named block of code.

function add(a, b) {
    return a + b;
}
2. Function Expression

A function stored inside a variable.

const greet = function() {
    console.log("Hello");
};

greet();

Difference:

// Function Declaration
function greet() {}

// Function Expression
const greet = function() {};
Important

Function declarations are hoisted, so they can generally be called before their declaration:

greet();

function greet() {
    console.log("Hello");
}

But function expressions using let/const cannot be called before initialization.

3. Anonymous Function

A function without a name.

function() {
    console.log("Hello");
}

By itself, this isn't normally useful because you don't have a name with which to call it.

It's commonly used as a callback:

setTimeout(function() {
    console.log("Hello");
}, 2000);

Here:

function() {
    console.log("Hello");
}

is an anonymous function.

Simple definition

An anonymous function is a function that doesn't have a name.

4. Named Function

A function that has a name.

function greet() {
    console.log("Hello");
}

Here greet is the function name.

You can also have a named function expression:

const greet = function sayHello() {
    console.log("Hello");
};

The variable is greet, while the function itself is named sayHello.

5. Arrow Function

A shorter way to write functions.

const add = (a, b) => {
    return a + b;
};

Can be shortened further:

const add = (a, b) => a + b;
One parameter
const square = num => num * num;
No parameters
const greet = () => {
    console.log("Hello");
};
Important difference

Arrow functions do not have their own this.

They take this from the surrounding scope.

That's important when working with objects, classes, and callbacks.

6. Callback Function

A function passed as an argument to another function.

function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);

Here:

greet
  ↓
passed into execute()
  ↓
callback

So greet is a callback function.

Very common example
let numbers = [1, 2, 3];

numbers.forEach(function(num) {
    console.log(num);
});

The function passed to forEach() is a callback.

Callbacks are heavily used in:

forEach()
map()
filter()
setTimeout()
event handlers
Promises
API operations
7. Higher-Order Function (HOF)

This is different from a callback.

A higher-order function is a function that either:

accepts another function as an argument, or
returns another function
Example 1 — accepts a function
function execute(callback) {
    callback();
}

execute() is a HOF because it accepts a function.

execute(greet);

Here:

execute → Higher-Order Function
greet   → Callback Function
Example 2 — returns a function
function createGreeting() {
    return function() {
        console.log("Hello");
    };
}

let greet = createGreeting();

greet();

createGreeting() is also a HOF because it returns a function.

Important interview difference

Callback = function passed to another function.

HOF = function that accepts or returns another function.

So:

function execute(callback) {
    callback();
}

execute → HOF
callback → callback function

8. IIFE

IIFE means:

Immediately Invoked Function Expression

It is a function that is created and executed immediately.

(function() {
    console.log("Hello");
})();

Output:

Hello

Normally:

function greet() {
    console.log("Hello");
}

greet();

You create the function first and call it later.

With IIFE:

(function() {
    console.log("Hello");
})();

It executes immediately.

IIFE with parameters
(function(name) {
    console.log("Hello " + name);
})("Rajesh");

Output:

Hello Rajesh
Why use IIFE?

Historically, IIFEs were commonly used to:

execute code immediately
create a private scope
avoid polluting the global scope

You'll still encounter them in older JavaScript code.

9. Constructor Function

A function used with new to create objects.

function User(name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new User("Rajesh", 23);

console.log(user1.name);

Output:

Rajesh

Here:

new User("Rajesh", 23)

creates a new object.

Important

Constructor functions were commonly used before ES6 classes became standard.

Today, you will often see:

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
10. Recursive Function

A function that calls itself.

Example: factorial.

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

Output:

120

Flow:

factorial(5)
    ↓
5 × factorial(4)
    ↓
5 × 4 × factorial(3)
    ↓
5 × 4 × 3 × factorial(2)
    ↓
5 × 4 × 3 × 2 × factorial(1)
    ↓
120
Important

A recursive function needs a base condition, otherwise it can continue indefinitely and eventually cause a stack overflow.

11. Generator Function

A generator function can pause and resume execution.

It uses:

function*

and:

yield

Example:

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

let result = numbers();

console.log(result.next());
console.log(result.next());
console.log(result.next());

Output:

{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }

Then:

console.log(result.next());

gives:

{ value: undefined, done: true }
Simple definition

A generator function can pause its execution using yield and continue later.

You'll encounter generators less often in beginner-level frontend development, but they are an important JavaScript concept.

12. Async Function

An async function is used when working with asynchronous operations.

Syntax:

async function getData() {
    // asynchronous code
}

Example:

async function getData() {
    let response = await fetch("https://example.com/data");

    let data = await response.json();

    console.log(data);
}

async makes the function return a Promise.

async function test() {
    return "Hello";
}

console.log(test());

The result is a Promise.

13. Async Arrow Function

You can also combine async with arrow functions.

const getData = async () => {
    let response = await fetch("https://example.com/data");
    let data = await response.json();

    return data;
};

You'll use this frequently when working with APIs in React.

14. Default Parameter Function

A function can have default values.

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();

Output:

Hello Guest

If a value is supplied:

greet("Rajesh");

Output:

Hello Rajesh
15. Rest Parameter Function

Used when a function can receive an unknown number of arguments.

function add(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(add(10, 20, 30, 40));

Output:

100

...numbers collects the arguments into an array:

[10, 20, 30, 40]
16. Method

When a function is stored as a property of an object, we commonly call it a method.

let user = {
    name: "Rajesh",

    greet: function() {
        console.log("Hello");
    }
};

user.greet();

greet is a method of user.

Modern shorthand:

let user = {
    name: "Rajesh",

    greet() {
        console.log("Hello");
    }
};
17. Function Returning Another Function

This is important for understanding closures and HOFs.

function outer() {

    function inner() {
        console.log("Hello");
    }

    return inner;
}

let result = outer();

result();

Flow:

outer()
   ↓
returns inner function
   ↓
result
   ↓
result()
   ↓
Hello

This concept becomes important when learning closures.

18. Function as a Value

In JavaScript, functions are first-class values.

That means you can:

Store a function
const greet = function() {
    console.log("Hello");
};
Pass a function
execute(greet);
Return a function
function outer() {
    return greet;
}

This is why JavaScript can easily support:

callbacks
HOFs
closures
event handlers
functional programming

*/

function addTwoNumbers(num1,num2){
    console.log(num1 + num2)
}

// addTwoNumbers(4,5)
// op:- 9 
//  it has only display the value not return any value. whenever we want to print the function it will return undefined. see the below example

// let result = addTwoNumbers(4,5)
// console.log(result)  // undefined  

// see the output is undefined because we didn't return anything, we only console or print the value. to overcome this we have to return the value , see the below example...

function multiTwoNumbers(num1,num2){
    return num1 * num2
}

// console.log(multiTwoNumbers(4,5))  // 20

let result = multiTwoNumbers(4,5)
// console.log(result)  // 20 

// see both have the same value 20 


// by using string entepulation

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("rajesh"))   

// without the empty return keyword it print both the value but with the empty return keyword it return only those value which has before the return keyword not the after.

// if we don't pass any argument it will print undefined not null or any error.  see the below example

function messageMe(msg){
    return `Hey Rajesh ${msg}`
}
// console.log(messageMe())  // op:- Hey Rajesh undefined

// console.log(messageMe("how are you")) //op:- Hey Rajesh how are you

//to overcome this we can take default value

// like this:-
 
function mesg(msg="what you wanna to say"){
    return `hey rajesh ${msg}`
}
// console.log(mesg()); 

// op:- hey rajesh what you wanna to say

// see the output without pass any argument also we got the answer because we passed there default argument.


// rest operator:
//  it used to add multiple element at the same time, it specially used for ecommerce projects like suppose a user want to multiple item at a time , so we can't take different different variable for that , we just take a rest operator and store all the value into a single variable.

// example:-
// without ...rest operator

function calculation(items){
    return items
}
console.log(calculation(200,300,400));
// see there it will take only 200 not all the argument atthe same time so to overcome this we use ...rest operator.

// with ...rest operator

function calculationTotalitems(...items){
    return items
}
console.log(calculationTotalitems(200,400,500,600))
// op:- [ 200, 400, 500, 600 ]

// look at the output here all the arguments are stored inside a array. it doesn't metter how many argument we want to pass.

// another example what if the parameter is like this...

function products(item1,item2,item3,...items){
    return items
}
console.log(products(200,3000,500,200,600,500))

//op:-  [ 200, 600, 500 ]

// why the output is llike this because we passed more three parameters there so first it has take three arguments for them and then  rest of the arguments are passed inside the ...rest parameter.

// important :- ...rest parameter always should be the last parameter.


// how to use object inside the function

// const user = {
//     username:"rajesh",
//     price:999
// }

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
    
}

// handleObj((user))

// op:-  Username is rajesh and price is 999

// and we can also pass like this

handleObj({
    username:"ritesh",
    price:555
})

// op:- Username is ritesh and price is 555



// hoe too work with array in function

const myNewArray = [200, 400, 600, 800]

function getSecondValue(getValue){
    return getValue[2]
}

// console.log(getSecondValue(myNewArray)); //op:- 400

// and also we can pass like this

function getFirstValue(getVal){
    return getVal[1]
}
console.log(getFirstValue([200,400,500,600]));

// op:-  400














