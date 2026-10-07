/*

JavaScript Asynchronous Code
-----------------------------
1. What is asynchronous code:-
------------------------------

Asynchronous code is code that allows JavaScript to start a time-consuming task without blocking the execution of other code. JavaScript can continue executing the next statements while the asynchronous task is being completed, and once the task finishes, its result is handled later.

For example, when JavaScript requests data from an API, it would be inefficient to stop the entire webpage and wait for the server response. Instead, JavaScript can continue doing other work and process the API response when it arrives.

2. Synchronous vs Asynchronous
------------------------------

Synchronous code:-
-----------------
Synchronous code executes one statement at a time, and each statement waits for the previous statement to finish.

console.log("A");
console.log("B");
console.log("C");

Output:

A
B
C

Execution:

A → B → C

If B takes a long time:

A → wait for B → B finishes → C

JavaScript cannot move to C until B finishes.


3. Asynchronous code:-
---------------------
Example:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");

Output:

A
C
B

Why?

A
↓
start timer
↓
don't wait
↓
C
↓
after 2 seconds
↓
B

The timer is handled asynchronously, so JavaScript can continue executing the next code.


4. Why do we need asynchronous programming?
------------------------------------------
Imagine your website calls an API:

Browser → Server
          ↓
       Processing
          ↓
       Response

The server might take:

100 ms
500 ms
2 seconds
5 seconds

If JavaScript waited synchronously for every server response, the webpage could become unresponsive.

Instead:

console.log("Request started");

fetch("https://example.com/users");

console.log("Continue doing other work");

JavaScript can continue while the request is being processed.

This is especially important for:

API calls
Network requests
Timers
File operations
Database operations
User interactions
Loading external resources


5. Is JavaScript asynchronous?
------------------------------

JavaScript itself is fundamentally single-threaded, meaning it has one main call stack for executing JavaScript code.

However, JavaScript can perform asynchronous operations through the runtime environment, such as the browser or Node.js.

For example, the browser provides features such as:

setTimeout()
fetch()
DOM events
Web APIs

These work together with the event loop to allow asynchronous behavior.

So don't say:

"JavaScript has multiple threads for normal code."

A better answer is:

JavaScript executes normal code on a single main thread, but its runtime environment provides mechanisms such as Web APIs and the event loop that allow asynchronous operations to be handled without blocking the main JavaScript execution.


6. The important components

To understand asynchronous JavaScript properly, you should know these concepts:

Call Stack
   ↓
Web APIs
   ↓
Task/Callback Queue
   ↓
Microtask Queue
   ↓
Event Loop

Let's understand each one.



7. Call Stack:-
--------------
The call stack keeps track of the JavaScript functions that are currently executing.

Example:

function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();

Execution:

first()
  ↓
second()
  ↓
console.log()

The stack works approximately like:

| console.log() |
| second()      |
| first()       |
----------------

After console.log() finishes:

| second() |
| first()  |
----------

Then:

| first() |
----------

Finally: empty


8. What happens with setTimeout()?
---------------------------------
Consider:

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");

Many beginners think:

Start
wait 2 seconds
Timer
End

That's incorrect.

The actual process is approximately:

console.log("Start")
        ↓
Call Stack
        ↓
Start printed

setTimeout()
        ↓
Browser Web API
        ↓
Timer starts

console.log("End")
        ↓
Call Stack
        ↓
End printed


2 seconds complete
        ↓
Callback becomes eligible
        ↓
Task Queue
        ↓
Event Loop
        ↓
Call Stack
        ↓
Timer printed

Output:

Start
End
Timer


9. Web APIs:-
------------
The browser provides features outside the JavaScript engine.

Examples:

setTimeout()
fetch()
DOM events
setInterval()

These are commonly handled by browser APIs.

For example:

setTimeout(() => {
    console.log("Hello");
}, 2000);

The timer doesn't sit on the JavaScript call stack for two seconds.

The browser handles the timer.


10. Callback:-
-------------
A callback is a function passed to another function so that it can be executed later or when a particular operation is completed.

Example:

function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Rajesh");
}

processUser(greet);

Here:

greet

is passed as a callback.

Asynchronous example:
------------------------
setTimeout(function() {
    console.log("Hello");
}, 2000);

The function:

function() {
    console.log("Hello");
}

is a callback.


11. Callback Queue / Task Queue:-
--------------------------------
When an asynchronous task is completed, its callback may be placed into a task queue (also called the callback queue or macrotask queue).

Example:

setTimeout(() => {
    console.log("Hello");
}, 0);

Even though the delay is 0, it doesn't mean the callback executes immediately.

It has to wait until:

the timer is eligible
the current JavaScript execution finishes
the event loop allows the callback onto the call stack


12. Event Loop:-
----------------
The event loop coordinates asynchronous JavaScript execution by checking whether the call stack is empty and then moving eligible queued callbacks into the call stack according to the event-loop rules.

Simple idea:

Call Stack
    ↓
Is it empty?
    ↓
Yes
    ↓
Check queues
    ↓
Move eligible work
    ↓
Call Stack

The event loop is one of the most important concepts in asynchronous JavaScript.


13. Important: Microtask Queue:-
-------------------------------
JavaScript has more than one kind of queue.

The two important categories are:

Task queue

Common examples:

setTimeout
setInterval
some DOM events
Microtask queue

Common examples:

Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()

Microtasks have higher priority than normal tasks once the current JavaScript execution completes.


14. Example: Promise vs setTimeout:-
-----------------------------------
Look at this:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

Output:

A
D
C
B

Why?

First:

A

Then:

setTimeout(...)

Timer callback becomes a task.

Then:

Promise.resolve().then(...)

The .then() callback becomes a microtask.

Then:

D

After synchronous code finishes:

Microtask Queue
      ↓
C

Then:

Task Queue
      ↓
B

Therefore:

A
D
C
B
Easy rule

After the current synchronous code finishes:

Microtasks are processed before the next task is taken from the task queue.


15. What is a Promise?
------------------------
A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

A Promise has three states:

Pending
   ↓
Fulfilled

or:

Pending
   ↓
Rejected
Three states
State	Meaning
Pending	Operation is still in progress
Fulfilled	Operation completed successfully
Rejected	Operation failed
16. Creating a Promise
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }

});

Here:

resolve()

means:

Operation succeeded.

And:

reject()

means:

Operation failed.


17. Consuming a Promise:-
------------------------
We can use:

then()
catch()
finally()

Example:

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });


18. then():-
------------
then() handles a successfully fulfilled Promise.

Promise.resolve("Success")
    .then((result) => {
        console.log(result);
    });

Output:  Success


19. catch():-
------------
catch() handles rejection/errors.

Promise.reject("Something went wrong")
    .catch((error) => {
        console.log(error);
    });

Output: Something went wrong


20. finally():-
--------------
finally() runs regardless of whether the Promise succeeds or fails.

Promise.resolve("Success")
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => {
        console.log("Operation finished");
    });

finally() is useful for cleanup operations such as hiding a loading indicator.


21. Promise chaining:-
----------------------
One of the biggest advantages of Promises is chaining.

getUser()
    .then(user => {
        return getOrders(user.id);
    })
    .then(orders => {
        return getPayment(orders[0].id);
    })
    .then(payment => {
        console.log(payment);
    })
    .catch(error => {
        console.log(error);
    });

The result of one .then() can be passed to the next .then().


22. What is async?:-
--------------------
async is a keyword used to declare an asynchronous function.

async function greet() {
    return "Hello";
}

Important:

An async function always returns a Promise.

So:

const result = greet();

console.log(result);

will give a Promise, not directly "Hello".

Conceptually:

async function greet() {
    return "Hello";
}

behaves like a function that returns a fulfilled Promise containing "Hello".


23. What is await?:-
--------------------
await is used inside an async function to wait for a Promise to settle and obtain its fulfillment value.

Example:

function getData() {
    return Promise.resolve("Data received");
}

async function showData() {
    const result = await getData();

    console.log(result);
}

showData();

Output: Data received


24. Does await block JavaScript?:-
----------------------------------
This is a very important interview question.

Beginners often say:

"await blocks JavaScript."

That's not accurate.

await pauses the execution of the current async function until the Promise settles, but it does not block the entire JavaScript thread from doing other work.

Example:

async function test() {

    console.log("A");

    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });

    console.log("B");
}

test();

console.log("C");

Output:

A
C
B

When await is reached, the test() function pauses.

But JavaScript can continue executing:

console.log("C");

After two seconds: B


25. async/await with try/catch:-
--------------------------------
This is commonly used in real applications.

async function getData() {

    try {

        const response = await fetch("https://example.com/data");

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error);

    }

}

Here:

try

contains the asynchronous operation.

If something goes wrong:

catch

handles the error.



26. fetch():-
------------
fetch() is commonly used to make HTTP requests.

Example:

fetch("https://example.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

With async/await:

async function getUsers() {

    try {

        const response = await fetch("https://example.com/users");

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

The second style is often easier to read.


27. Important: fetch() errors:-
------------------------------
A common interview trap:

fetch() does not automatically reject just because the server returns an HTTP error such as:

404
500

You should check:

if (!response.ok) {
    throw new Error("HTTP error: " + response.status);
}

Example:

async function getUsers() {

    try {

        const response = await fetch("https://example.com/users");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}



28. Callback vs Promise vs async/await:-
---------------------------------------
These are different ways of handling asynchronous operations.

Callback:-
----------
getData(function(data) {
    console.log(data);
});


Promise:-
--------
getData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


Async/await:-
-------------
async function showData() {

    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}


Easy memory
Callback
   ↓
Function passed for later execution

Promise
   ↓
Object representing future result

async/await
   ↓
Cleaner syntax for working with Promises


29. Callback Hell:-
------------------
Suppose you have several dependent asynchronous operations:

getUser(function(user) {

    getOrders(user.id, function(orders) {

        getPayment(orders[0].id, function(payment) {

            getProduct(payment.id, function(product) {

                console.log(product);

            });

        });

    });

});

This becomes deeply nested.

It is commonly called callback hell or the pyramid of doom.

Promises improve the structure:

getUser()
    .then(user => getOrders(user.id))
    .then(orders => getPayment(orders[0].id))
    .then(payment => getProduct(payment.id))
    .then(product => console.log(product))
    .catch(error => console.log(error));

And async/await can make it even easier to read:

async function getProductData() {

    try {

        const user = await getUser();

        const orders = await getOrders(user.id);

        const payment = await getPayment(orders[0].id);

        const product = await getProduct(payment.id);

        console.log(product);

    } catch (error) {
        console.log(error);
    }
}


30. Sequential vs Parallel asynchronous operations:-
---------------------------------------------------
This is very important in practical coding.

Suppose you need two independent API requests.

Sequential
const users = await getUsers();
const products = await getProducts();

The second starts after the first finishes.

If:

getUsers = 2 seconds
getProducts = 3 seconds

Total can be approximately: 5 seconds


31. Parallel execution with Promise.all():-
------------------------------------------
If the operations don't depend on each other:

const [users, products] = await Promise.all([
    getUsers(),
    getProducts()
]);

Now both can run concurrently.

If:

getUsers = 2 seconds
getProducts = 3 seconds

Total can be approximately: 3 seconds

because you wait for the slower one.


32. Promise.all():-
------------------
Promise.all() waits for multiple Promises.

const results = await Promise.all([
    promise1,
    promise2,
    promise3
]);

If all succeed:

console.log(results);

returns an array of results in the same order as the input Promises.

If one rejects, Promise.all() rejects.


33. Promise.allSettled():-
-------------------------
If you want the result of every Promise regardless of success or failure:

const results = await Promise.allSettled([
    promise1,
    promise2,
    promise3
]);

Example result conceptually:

[
    { status: "fulfilled", value: "A" },
    { status: "rejected", reason: "Error" },
    { status: "fulfilled", value: "C" }
]

Useful when you don't want one failure to prevent you from seeing the results of the others.


34. Promise.race():-
--------------------
Promise.race() settles when the first Promise settles, whether fulfilled or rejected.

const result = await Promise.race([
    promise1,
    promise2
]);

Think:

Promise 1 → 5 sec
Promise 2 → 2 sec

Winner → Promise 2


35. Promise.any():-
------------------
Promise.any() waits for the first fulfilled Promise.

const result = await Promise.any([
    promise1,
    promise2,
    promise3
]);

If one succeeds quickly, its result is returned.

Unlike Promise.race(), a quick rejection does not make Promise.any() reject if another Promise eventually fulfills.

If all Promises reject, Promise.any() rejects with an AggregateError.


36. Promise methods comparison
--------------------------------
Method	What it waits for
Promise.all()	All must fulfill; rejects on first rejection
Promise.allSettled()	All settle, regardless of success/failure
Promise.race()	First Promise to settle
Promise.any()	First Promise to fulfill

Easy memory:

all         → everyone must succeed
allSettled  → everyone must finish
race        → first to finish
any         → first successful one


37. setTimeout() vs setInterval()
----------------------------------
setTimeout():-
-------------
Runs a function once after at least the specified delay.

setTimeout(() => {
    console.log("Hello");
}, 2000);

setInterval():-
--------------
Runs repeatedly with the specified interval.

setInterval(() => {
    console.log("Hello");
}, 2000);

Output approximately every 2 seconds:

Hello
Hello
Hello
...

Stop it with:

const id = setInterval(() => {
    console.log("Hello");
}, 2000);

clearInterval(id);

For timeout:

const id = setTimeout(() => {
    console.log("Hello");
}, 2000);

clearTimeout(id);


38. Important: setTimeout(0):-
-----------------------------
Consider:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

Output:

A
C
B

Why?

0 does not mean:

execute immediately.

It means approximately:

the callback becomes eligible after the minimum delay, and it must wait until the current execution completes and the event loop can process it.


39. setTimeout() is not an exact timer
----------------------------------------
This:

setTimeout(() => {
    console.log("Hello");
}, 1000);

doesn't guarantee that "Hello" executes exactly at 1000 ms.

It means the callback won't be scheduled before the required delay has elapsed, and it may run later depending on what else the runtime is doing.


40. async + await example
--------------------------
A very common interview example:

console.log("Start");

async function test() {

    console.log("Inside function");

    await Promise.resolve();

    console.log("After await");
}

test();

console.log("End");

Output:

Start
Inside function
End
After await

Why?

Execution:

Start
↓
test()
↓
Inside function
↓
await Promise.resolve()
↓
pause async function
↓
End
↓
microtask executes
↓
After await


41. Very important event-loop example
----------------------------------
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

Output:

1
4
3
2

Remember:

Synchronous code
       ↓
Microtasks
       ↓
Tasks

So:

1 → 4 → 3 → 2


42. async/await error handling
------------------------------
You can use:

try {
    const data = await getData();
} catch (error) {
    console.log(error);
}

Or:

async function test() {
    try {
        const result = await Promise.reject("Failed");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

Output: Failed


43. What happens if an async function throws an error?
----------------------------------------------------------
async function test() {
    throw new Error("Something went wrong");
}

The async function returns a rejected Promise.

So:

test().catch(error => {
    console.log(error.message);
});

Output: Something went wrong


44. Async function returning a value
-------------------------------------
async function add() {
    return 10 + 20;
}

It doesn't directly return: 30

It returns:

Promise → 30

Therefore:

add().then(result => {
    console.log(result);
});

Or:

async function test() {
    const result = await add();
    console.log(result);
}

test();


45. Async function returning Promise
--------------------------------------
async function getData() {
    return Promise.resolve("Hello");
}

You can simply:

const data = await getData();

The async function automatically adopts the Promise's eventual state.

46. Common mistakes
-------------------
Mistake 1
const data = fetch(url);

console.log(data.name);

fetch() returns a Promise, not the final data.

Use:

const response = await fetch(url);
Mistake 2

Using await outside an appropriate context:

const data = await fetch(url);

Depending on the environment, await generally needs to be inside an async function, or supported as top-level await in appropriate JavaScript modules.

Common beginner pattern:

async function getData() {
    const response = await fetch(url);
}
Mistake 3

Sequentially waiting for independent operations:

const a = await getA();
const b = await getB();
const c = await getC();

If they're independent, consider:

const [a, b, c] = await Promise.all([
    getA(),
    getB(),
    getC()
]);


47. Real-world example
-------------------------
Imagine your React application needs:

User information
Products
Orders

You might do:

async function loadData() {

    try {

        const [users, products, orders] = await Promise.all([
            fetchUsers(),
            fetchProducts(),
            fetchOrders()
        ]);

        console.log(users);
        console.log(products);
        console.log(orders);

    } catch (error) {

        console.log("Something went wrong:", error);

    }
}

This is a practical use of asynchronous JavaScript.


48. Complete asynchronous flow
--------------------------------
You can visualize it like this:

             JavaScript Code
                   |
                   ↓
              Call Stack
                   |
          -------------------
          |                 |
       Synchronous      Async operation
                            |
                            ↓
                    Browser / Runtime
                            |
                            ↓
                     Operation finishes
                            |
                    ----------------
                    |              |
               Microtask         Task
                 Queue           Queue
                    |              |
                    ------↓--------
                         Event
                          Loop
                           |
                           ↓
                      Call Stack
                           |
                           ↓
                     Callback runs


49. Most important concepts to remember
--------------------------------------
Synchronous:-
-------------
Executes code sequentially and waits for each operation to finish.

Asynchronous

Allows a time-consuming operation to be handled without blocking the rest of the JavaScript execution.

Callback

A function passed to another function to be executed later or when an operation is completed.

Promise

An object representing the eventual success or failure of an asynchronous operation.

async

Declares an asynchronous function, which always returns a Promise.

await

Pauses the current async function until a Promise settles, without blocking the entire JavaScript thread.

Event loop

Coordinates when queued asynchronous callbacks can be executed by checking the call stack and processing queued work according to the event-loop rules.

Microtask

A higher-priority type of queued asynchronous work, commonly created by Promise handlers.

50. Interview questions you should know

For JavaScript interviews, make sure you can answer these:

What is synchronous code?
What is asynchronous code?
Why is asynchronous programming needed?
Is JavaScript synchronous or asynchronous?
What is the call stack?
What is the event loop?
What are Web APIs?
What is the callback queue?
What is the microtask queue?
What is a callback?
What is callback hell?
What is a Promise?
What are the three states of a Promise?
What is resolve()?
What is reject()?
What is .then()?
What is .catch()?
What is .finally()?
What is async?
What is await?
Does await block JavaScript?
What does an async function return?
What is Promise chaining?
What is Promise.all()?
Difference between Promise.all() and Promise.allSettled()?
Difference between Promise.race() and Promise.any()?
What happens when setTimeout(..., 0) is used?
Why does Promise .then() usually execute before setTimeout(..., 0)?
How do you handle errors with async/await?
How can multiple API requests be executed concurrently?


*/