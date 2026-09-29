// Function

/*

1. What is a Function?
A function is a reusable block of code or set of instruction used to performs a specific task.

Instead of writing the same code again and again, we write it once inside a function and call it whenever we need it. that is the main purpose of function.

eample:- 

function greet() {
    console.log("Hello Rajesh");
}

greet();
greet();
greet();

Output:

Hello Rajesh
Hello Rajesh
Hello Rajesh

Why do we use functions?
Main reasons:

1. Code reusability
2. Avoid repeating code
3. Make code easier to understand
4. Break a large program into smaller parts
5. Make debugging easier
6. Accept different values using parameters
7. Return results using return


2. Basic Function Syntax
function functionName() {
    // code
}

Example:

function addition() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}

But simply creating the function does not execute it. We need to call it like this ...

addition();


3. Function Declaration(Named function)
A function which is having a name is known as Named function or we can also called function declaration or function definition.

example:- 

function greet() {
    console.log("Hello");
}
greet();

Here:

function     → keyword
greet        → function name
()           → parameters area
{}           → function body
greet()      → function call


4. Parameters:-
A parameter is a variable defined in a function declaration that receives a value when the function is called. Common parameter types in JavaScript are normal parameters, default parameters, rest parameters, and destructuring parameters.

1.Normal parameter:-
function greet(name) {
    console.log("Hello " + name);
}
greet("Rajesh");

Output: Hello Rajesh

Here: name is a parameter.
And: "Rajesh" is an argument.

Important difference:-
function greet(name) {
                 ↑
              parameter
}
greet("Rajesh");
      ↑
    argument

Parameter = variable defined in function
Argument = actual value passed to function


5. Multiple Parameters
We can have multiple parameters.

function add(a, b) {
    console.log(a + b);
}

add(10, 20);

Output: 30

Here:
a → 10
b → 20

Another example:

function introduce(name, age, city) {
    console.log("My name is " + name);
    console.log("My age is " + age);
    console.log("I live in " + city);
}

introduce("Rajesh", 23, "Chennai");


6. What happens if we don't pass an argument?
it will return undefined.

function greet(name) {
    console.log(name);
}

greet();

Output: undefined
Because no value was provided for name.


7. Default Parameters:-
We can give a parameter a default value. it will work when the user doesn't passed any value.

example:-
function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet();

Output: Hello Guest

But: greet("Rajesh");

Output: Hello Rajesh

So: function greet(name = "Guest")
means: If the caller doesn't provide a value, use "Guest".


3.Rest Parameter:-
Rest parameters are used when you don't know how many arguments will be passed.

They use ....

function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40);

Output: [10, 20, 30, 40]

The ...numbers collects all arguments into an array.

Example:

function add(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(add(10, 20, 30));

Output: 60

Important rule:-
The rest parameter must be the last parameter.

Correct:  function test(a, b, ...numbers) {}
Incorrect: function test(...numbers, a) {} // ❌


4. Destructuring Parameter:-
You can directly extract values from an object or array in the function parameter.

Object destructuring:-

function showUser({ name, age }) {
    console.log(name);
    console.log(age);
}

showUser({
    name: "Rajesh",
    age: 23
});

Here: {name, age} is a destructuring parameter.

Instead of:
function showUser(user) {
    console.log(user.name);
    console.log(user.age);
}

you directly extract the properties.



4.Array destructuring:-

function showNumbers([a, b, c]) {
    console.log(a);
    console.log(b);
    console.log(c);
}

showNumbers([10, 20, 30]);

Output:
10
20
30

Quick Comparison:-

Parameter type	       Example	             Purpose
Normal	     function add(a, b)	            Receive normal values
Default	    function greet(name = "Guest")	Provide fallback value
Rest	        function add(...numbers)	Receive many arguments
Destructuring	function user({name, age})	Extract values directly



8. Return Statement:-
return is used to stop the execution of a function and sends a value back from the function calling. and after return keyword if we try to print anything it won't print.

function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);

Output: 30

Think of it like:

10 + 20
   ↓
function
   ↓
30
   ↓
result


9. console.log() vs return
This is very important for interviews.

console.log():- Displays the value.

function add(a, b) {
    console.log(a + b);
}
let result = add(10, 20);
console.log(result);

Output: 30
undefined

Why?

here also undefined come Because the function printed 30, but it didn't return anything.

return:- Sends the value back.

function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);

Output: 30

Easy memory:
console.log() → show the value
return → send the value back


10. Function Stops After return
function test() {
    return 10;
    console.log("Hello");
}
console.log(test());

Output: 10

The "Hello" will never execute because return ends the function immediately.


11. Function Without Parameters
function sayHello() {
    console.log("Hello");
}
sayHello();

No input.


12. Function With Parameters
function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Rajesh");



13. Function With Return
function square(num) {
    return num * num;
}
let result = square(5);
console.log(result);

Output: 25

This is very useful because the returned value can be used somewhere else.

let a = square(5);
let b = square(10);
console.log(a + b);

Output: 125


14. Function Can Accept Any Data Type
String:-
function greet(name) {
    console.log(name);
}

greet("Rajesh");

Number:-
function square(num) {
    return num * num;
}
console.log(square(5));

Array:-
function showNumbers(numbers) {
    console.log(numbers);
}
showNumbers([10, 20, 30]);

Object:-
function showUser(user) {
    console.log(user.name);
}
showUser({
    name: "Rajesh",
    age: 23
});


15. Functions Can Return Anything
Return number:-
function add() {
    return 10 + 20;
}

Return string:-
function greet() {
    return "Hello";
}

Return array:-
function getNumbers() {
    return [10, 20, 30];
}


Return object:-
function getUser() {
    return {
        name: "Rajesh",
        age: 23
    };
}


16. Function Expression
A function which is stored inside a varibale is known as function expression , and this function only can be called through this variable name.

const greet = function() {
    console.log("Hello");
};
greet();

Here:
greet
  ↓
function


17. Function Expression With Parameters
const add = function(a, b) {
    return a + b;
};
console.log(add(10, 20));

Output: 30


18. Arrow Function
Arrow function is a function which can be declared without any function keyword.

Normal function:
function add(a, b) {
    return a + b;
}

Arrow function:
const add = (a, b) => {
    return a + b;
};

Even shorter: This is called implicit return.
const add = (a, b) => a + b;



19. One Parameter in Arrow Function
const square = (num) => {
    return num * num;
};

Can also be:
const square = num => num * num;

When there is only one parameter, parentheses can be omitted.


20. No Parameters:-
const greet = () => {
    console.log("Hello");
};

greet();


21. Rest Parameters ...

Suppose we don't know how many arguments will be passed.

function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40);

Output:

[10, 20, 30, 40]

...numbers collects all remaining arguments into an array.

Example:

function add(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(add(10, 20, 30));

Output: 60


22. Difference Between Parameter and Argument

function add(a, b) {
    return a + b;
}
add(10, 20);

Here:
a, b       → parameters
10, 20     → arguments

Remember:
Parameter = placeholder
Argument = actual value


23. Scope of a Function:-
Variables created inside a function are normally available only inside that function.

function test() {
    let name = "Rajesh";
    console.log(name);
}
test();

console.log(name); // Error
name is a local variable.


24. Global Variable:-
let name = "Rajesh";
function greet() {
    console.log(name);
}
greet();
console.log(name);

The function can access the outer/global variable.


25. Function Calling Another Function
Functions can call other functions.

function add(a, b) {
    return a + b;
}

function square(num) {
    return num * num;
}

let result = square(add(2, 3));
console.log(result);

Output: 25

Flow:
add(2,3)
   ↓
5
   ↓
square(5)
   ↓
25



26. Callback Function
A function can be passed as an argument to another function is known as callback function.

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    let name = "Rajesh";
    callback(name);
}

processUser(greet);

Output: Hello Rajesh

Here greet is passed to execute.

This is called a callback function.

You'll see this a lot with:

forEach()
map()
filter()
setTimeout()
event handlers
Promises

Example:

let numbers = [1, 2, 3];
numbers.forEach(function(num) {
    console.log(num);
});

The function passed to forEach() is a callback.


27. Higher-Order Function
A function that accepts another function as an argument, or
returns another function is called a higher-order function.

Example:

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, multiply));


28. Anonymous Function
A function declared without having a name is called anonymous function.

function() {
    console.log("Hello");
}

Usually used as a callback:

setTimeout(function() {
    console.log("Hello");
}, 2000);


29. IIFE:(Immediately Invoked Function Expression)
IIFE function execute immediately as soon as the function declared and while using this function we should must have to terminate the before line. . 

(function() {
    console.log("Hello");
})();

The function is created and immediately executed.


30. Important Function Concepts
For your JavaScript interview preparation, remember these:

Concept	                                 Meaning
Function	                        Reusable block of code
Parameter	                        Placeholder variable
Argument	                        Actual value passed
Return	                            Sends value back
Function declaration	            function add() {}
Function expression	                const add = function(){}
Arrow function	                    const add = () => {}
Default parameter	                Default value for parameter
Rest parameter	                    Collects multiple arguments
Callback Function                   passed to another function
Higher-order function	            Takes/returns a function
Anonymous function	                Function without a name
IIFE	                            Immediately executed function
Scope	                            Where variables can be accessed


One interview answer to remember:

A function is a reusable block of code designed to perform a specific task. We use functions to avoid code repetition, organize our code, accept inputs through parameters, and return results using the return statement.

*/
