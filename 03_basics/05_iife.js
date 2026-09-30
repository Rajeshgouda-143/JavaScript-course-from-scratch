(function demo(){
    console.log("Hey IIFE function")
})();

// op:- Hey IIFE function

/* sometime problems are come because of global scope, to overcome this variable or declarations polutions we use IIFE function. */

/* while using this function we should terminate the before line otherwise it will raised error. */

//  by using arrow function

( () => {
    console.log("DB connected")
     //op:-  DB connected
})();


// how can we pass the parameters 
( (name) => {
    console.log(`Hey ${name}`)
     //op:-  Hey rajesh
})("rajesh");


// IIFE can return a value
// Yes, an IIFE can return something.

const result = (function() {
    return 10 + 20;
})();

console.log(result);

Output: 30


/*

IIFE = Immediately Invoked Function Expression

It means:

A function that is created and executed immediately, without separately calling it later.

Normal function:-

function greet() {
    console.log("Hello Rajesh");
}

greet();

Here there are two steps:

1. Create function
2. Call function

IIFE:-

(function greet() {
    console.log("Hello Rajesh");
})();

Output: Hello Rajesh

Here the function is created and immediately executed.

1. Understanding the syntax

Look at this:

(function() {
    console.log("Hello");
})();

Break it into parts:

(function() {
    console.log("Hello");
})

This turns the function into a function expression.

Then:

()

calls the function.

So:

(function() {
    console.log("Hello");
})();

means:

Create function
     ↓
Treat it as an expression
     ↓
Immediately call it


2. Why can't we simply do this?

You might think:

function() {
    console.log("Hello");
}()

But this gives a syntax error.

Why?

Because:

function() {}

by itself looks like a function declaration, and a function declaration requires a name.

function greet() {} // valid

So we need to tell JavaScript:

"Treat this function as an expression."

We can do that with parentheses:

(function() {
    console.log("Hello");
})();

The outer () forces the function to be treated as an expression.


3. Another way to write IIFE

You may see:

(function() {
    console.log("Hello");
}());

This also works.

Compare:

(function() {
    console.log("Hello");
})();

and:

(function() {
    console.log("Hello");
}());

Both are IIFEs.

The first style is probably easier for you to understand:

(function() {
    // code
})();


4. IIFE with parameters

An IIFE can accept arguments.

(function(name) {
    console.log("Hello " + name);
})("Rajesh");

Output: Hello Rajesh

Here:- name is the parameter.

And:- "Rajesh" is the argument.

It's exactly like a normal function:

function greet(name) {
    console.log("Hello " + name);
}

greet("Rajesh");

The difference is that the IIFE executes immediately.


5. IIFE can return a value, Yes, an IIFE can return something.

const result = (function() {
    return 10 + 20;
})();

console.log(result);

Output: 30

What happens?

IIFE executes
     ↓
10 + 20
     ↓
return 30
     ↓
result = 30



6. IIFE and local variables

This is one of the most important reasons IIFE was used.

(function() {
    let name = "Rajesh";

    console.log(name);
})();

This works.

But: console.log(name);

outside the IIFE gives: ReferenceError

because name is local to the function.

Example
(function() {
    let secret = "12345";

    console.log(secret);
})();

console.log(secret); // ReferenceError

The variable is protected inside the function.


7. IIFE creates a private scope

This is the major concept.

Consider:

let name = "Rajesh";

(function() {
    let age = 23;
    console.log(name);
    console.log(age);
})();

The IIFE can access:

outer variables
     ↓
name

and its own:

local variables
     ↓
age

But the outside cannot access:

age

So:

Outside
   │
   │ can access name
   ↓
IIFE
   │
   ├── name → accessible
   └── age  → private

This is related to lexical scope and closures.


8. IIFE with var

IIFE was particularly useful when JavaScript mainly used var.

For example:

var name = "Rajesh";

(function() {
    var name = "John";

    console.log(name);
})();

console.log(name);

Output:

John
Rajesh

Why?

The name inside the IIFE is a different variable.

Global scope
name = Rajesh

IIFE/function scope
name = John

The inner variable doesn't overwrite the outer one.


9. Why was IIFE important before let and const?

This is an important interview point.

Before ES6, JavaScript didn't have let and const.

Developers mainly used:

var

And var does not have block scope.

For example:

if (true) {
    var name = "Rajesh";
}

console.log(name);

Output:

Rajesh

The if block doesn't create a separate var scope.

But a function does:

function demo() {
    var name = "Rajesh";
}

console.log(name); // ReferenceError

Therefore developers used IIFEs to create private/function scope:

(function() {
    var name = "Rajesh";

    // private code
})();

This helped prevent variables from leaking into the global scope.

10. IIFE and global namespace pollution

Suppose a large JavaScript application has:

var name = "Rajesh";
var age = 23;
var city = "Chennai";
var salary = 30000;
var password = "123";

All these variables can become global depending on where they're declared.

Large applications could end up with many global variables.

IIFE helped:

(function() {
    var name = "Rajesh";
    var age = 23;
    var city = "Chennai";

    // application code
})();

Now these variables are inside the function's scope.

This reduces global namespace pollution.

11. IIFE with multiple parameters
(function(name, age, city) {
    console.log(name);
    console.log(age);
    console.log(city);
})("Rajesh", 23, "Chennai");

Output:

Rajesh
23
Chennai

The same parameter/argument concept applies.

12. Named IIFE

An IIFE doesn't have to be anonymous.

(function greet() {
    console.log("Hello");
})();

This is called a named IIFE.

You can also have:

(function calculate() {
    console.log(10 + 20);
})();

The function name is mainly useful for debugging and recursion.

13. Anonymous IIFE

Most commonly you'll see:

(function() {
    console.log("Hello");
})();

There is no function name.

This is an anonymous IIFE.

14. IIFE with arrow function

Modern JavaScript also allows an arrow-function IIFE:

(() => {
    console.log("Hello Rajesh");
})();

Output:

Hello Rajesh

With parameters:

((name) => {
    console.log("Hello " + name);
})("Rajesh");

Output:

Hello Rajesh

So IIFE is not a separate type of function.

It's a way of immediately executing a function expression.

You can use:

(function() {})();

or:

(() => {})();
15. IIFE with this

This connects to what we discussed earlier.

Consider:

(function() {
    console.log(this);
})();

The value of this depends on the environment and strict mode.

If you use strict mode:

(function() {
    "use strict";

    console.log(this);
})();

this is:

undefined

An arrow IIFE is different:

(() => {
    console.log(this);
})();

Arrow functions don't create their own this, so they inherit it from the surrounding scope.

16. IIFE and closure

This is where IIFE becomes more interesting.

const counter = (function() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
})();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

Let's understand what happened.

Step 1

IIFE executes:

(function() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
})();

It creates:

count = 0
Step 2

The IIFE returns another function:

function() {
    count++;
    return count;
}

That function is stored in:

counter
Step 3

Even though the IIFE has finished executing, the returned function still remembers:

count

This is a closure.

That's why:

counter(); // 1
counter(); // 2
counter(); // 3

works.

17. IIFE for private data

This is a classic example:

const bankAccount = (function() {
    let balance = 1000;

    return {
        getBalance: function() {
            return balance;
        },

        deposit: function(amount) {
            balance += amount;
        }
    };
})();

Now:

console.log(bankAccount.getBalance());

Output:

1000

Then:

bankAccount.deposit(500);

console.log(bankAccount.getBalance());

Output:

1500

But you cannot directly do:

console.log(bankAccount.balance);

because balance is private.

This is an example of data encapsulation using closure + IIFE.

18. Why don't we use IIFE as much today?

Modern JavaScript has:

let
const

and especially:

modules

So we have better ways to control scope.

For example:

{
    const name = "Rajesh";
}

console.log(name); // ReferenceError

And ES modules provide their own scope:

// app.js

const name = "Rajesh";

export { name };

So IIFEs are less necessary for basic scope isolation.

However, you should still understand them because you'll encounter them in:

older JavaScript projects
libraries
legacy code
interview questions
closure examples
JavaScript design patterns
19. IIFE vs normal function
Normal Function	IIFE
Defined for later use	Executes immediately
Usually called separately	Called during creation
Can be reused multiple times	Usually used once
function greet(){}	(function(){})()
Can remain available	Usually not needed afterward

Example:

function greet() {
    console.log("Hello");
}

greet();
greet();

Reusable.

IIFE:

(function() {
    console.log("Hello");
})();

Usually executes once.

20. IIFE vs function expression

This distinction is important.

Function expression
const greet = function() {
    console.log("Hello");
};

The function is created but not executed.

You need:

greet();
IIFE
(function() {
    console.log("Hello");
})();

It is created and immediately executed.

So:

Function expression
       ↓
create
       ↓
wait
       ↓
call later

Whereas:

IIFE
 ↓
create
 ↓
immediately call
 ↓
execute
21. One important interview trap

Don't say:

"IIFE is a type of function."

Better answer:

"IIFE stands for Immediately Invoked Function Expression. It is a function expression that is executed immediately after it is created. It was commonly used to create private scope and avoid global namespace pollution, especially before let, const, and ES modules."

That's a strong interview answer.

Final memory trick
(function() {
    // code
})();

Remember:

First () → make it an expression

Second () → execute it

So:

(function(){})()
       ↑       ↑
   expression  call

And the three concepts to connect are:

IIFE
 ↓
immediate execution
 ↓
private function scope
 ↓
can create closures/private data

*/

