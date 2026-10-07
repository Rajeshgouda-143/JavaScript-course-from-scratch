/*

1. What is a Promise?
----------------------
A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation and provides a way to handle the result when it becomes available.

For example, imagine ordering food:

Order placed
     ↓
   Pending
     ↓
 ┌───────────────┐
 ↓               ↓
Delivered       Failed
Fulfilled       Rejected

A Promise similarly has three states:
--------------------------------------
State	                    Meaning

pending	              Operation is still in progress
fulfilled	          Operation completed successfully
rejected	                Operation failed

A Promise starts as pending and eventually becomes either fulfilled or rejected.

2. Why do we need Promises?
---------------------------
Before Promises, asynchronous operations were commonly handled with callbacks:

getUser(function(user) {
    getOrders(user, function(orders) {
        getPayment(orders, function(payment) {
            console.log(payment);
        });
    });
});

When many operations depend on each other, callbacks can become deeply nested.

Promises make this easier:

getUser()
    .then(user => getOrders(user))
    .then(orders => getPayment(orders))
    .then(payment => console.log(payment))
    .catch(error => console.log(error));

And async/await makes it even cleaner.

3. Creating a Promise
---------------------
The basic syntax is:

const promise = new Promise((resolve, reject) => {

    // asynchronous operation

});

Example:

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

means: The operation was successful.

And:

reject()

means: The operation failed.

4. Understanding resolve() and reject()
----------------------------------------
const promise = new Promise((resolve, reject) => {

    resolve("Success");

});

The Promise becomes:

pending
   ↓
fulfilled

The value is:

"Success"

If:

const promise = new Promise((resolve, reject) => {

    reject("Something went wrong");

});

then:

pending
   ↓
rejected

5. How do we get the result?
-----------------------------
We use .then().

const promise = new Promise((resolve, reject) => {
    resolve("Hello Rajesh");
});

promise.then((result) => {
    console.log(result);
});

Output: Hello Rajesh

then() is used to handle a fulfilled Promise.


6. catch()
-----------
catch() handles a rejected Promise.

const promise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise.catch((error) => {
    console.log(error);
});

Output: Something went wrong

Easy memory:

resolve() → then()
reject()  → catch()


7. finally()
------------
finally() runs after the Promise finishes, whether it succeeds or fails.

const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });

Output:

Success
Finished

If it fails:

Something went wrong
Finished

A common use is hiding a loading indicator:

showLoading();

fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        hideLoading();
    });



8. Real asynchronous Promise example
--------------------------------------
Let's actually create a delay.

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received");
    }, 2000);

});

promise.then((data) => {
    console.log(data);
});

What happens?

Promise created
     ↓
Pending
     ↓
wait 2 seconds
     ↓
resolve("Data received")
     ↓
Fulfilled
     ↓
then()
     ↓
Data received



9. Promise chaining ⭐
-----------------------
One of the most important Promise concepts.

Promise.resolve(10)
    .then((value) => {
        return value * 2;
    })
    .then((value) => {
        return value + 5;
    })
    .then((value) => {
        console.log(value);
    });

Output: 25

Why?

10
 ↓
10 × 2
 ↓
20
 ↓
20 + 5
 ↓
25

The value returned from one .then() becomes the input to the next .then().


10. Returning a Promise inside .then()
--------------------------------------
This is important.

getUser()
    .then(user => {
        return getOrders(user.id);
    })
    .then(orders => {
        console.log(orders);
    });

The second .then() waits for the Promise returned by:

getOrders(user.id)

That's why Promise chaining is useful for dependent asynchronous operations.


11. Error handling in Promise chains
-------------------------------------
getUser()
    .then(user => {
        return getOrders(user.id);
    })
    .then(orders => {
        console.log(orders);
    })
    .catch(error => {
        console.log("Error:", error);
    });

If a Promise in the chain rejects, the error can be handled by the catch().


12. Promise with fetch()
--------------------------
This is where you'll use Promises in real JavaScript projects.

fetch("https://api.github.com/users/Rajeshgouda-143")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.followers);
    })
    .catch(error => {
        console.log(error);
    });

Notice:

fetch(...)

returns a Promise.

Then:

.then(...)

handles the response.

Then:

response.json()

also returns a Promise.

So we chain another:

.then(data => ...)


13. async/await is based on Promises
------------------------------------
This:

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

can be written using async/await:

async function getData() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

So remember:

Promise
   ↓
.then() / .catch()
   ↓
async / await

async/await doesn't replace Promises internally; it provides a cleaner syntax for working with them.


14. Important: async function always returns a Promise
------------------------------------------------------
Example:

async function greet() {
    return "Hello";
}

You might think:

greet()

returns:

Hello

But actually it returns a Promise that fulfills with "Hello".

Therefore:

greet().then(result => {
    console.log(result);
});

prints:

Hello

Or:

async function test() {

    const result = await greet();

    console.log(result);
}

test();



15. Promise methods we should know
-------------------------------------
There are four important static Promise methods.

Promise.all()

Waits for all Promises to fulfill.

const result = await Promise.all([
    getUsers(),
    getProducts(),
    getOrders()
]);

If one rejects, Promise.all() rejects.

Promise.allSettled()

Waits for all Promises to finish, whether they succeed or fail.

const result = await Promise.allSettled([
    getUsers(),
    getProducts(),
    getOrders()
]);

You get the status of each operation.

Promise.race()

The first Promise to settle wins.

const result = await Promise.race([
    promise1,
    promise2
]);

"Settle" means either fulfilled or rejected.

Promise.any()

The first Promise to fulfill wins.

const result = await Promise.any([
    promise1,
    promise2,
    promise3
]);

A rejection doesn't win the race. It waits for a successful Promise.

16. Easy comparison
Method	Meaning
Promise.all()	         All must fulfill
Promise.allSettled()	 Wait for all regardless of result
Promise.race()	         First settled Promise
Promise.any()	         First fulfilled Promise

Memory trick:

all         → all
allSettled  → everyone finishes
race        → first finish
any         → first success


17. Promise vs Callback
-------------------------
Callback
----------
getData(function(data) {
    console.log(data);
});
Promise
getData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

Promises provide a more structured way to handle asynchronous results and errors, especially when multiple operations need to be chained.


18. Important interview question: Is Promise synchronous or asynchronous?
------------------------------------------------------------
A Promise represents an asynchronous result, but creating a Promise itself happens synchronously.

For example:

console.log("A");

const promise = new Promise((resolve) => {
    console.log("B");
    resolve();
});

promise.then(() => {
    console.log("C");
});

console.log("D");

Output:

A
B
D
C

Why?

The Promise executor runs immediately:

A
B
D

But .then() callback runs as a microtask, after the current synchronous code finishes:

C

This is an important interview concept.


19. Promise states cannot go backward
-------------------------------------
A Promise starts:

Pending

Then becomes:

Fulfilled

or:

Rejected

Once settled, it cannot change again.

For example:

const promise = new Promise((resolve, reject) => {

    resolve("Success");

    reject("Failed");

});

The Promise remains fulfilled.

resolve() → wins
reject()  → ignored

The first settlement determines the Promise's final state.


20. What you should focus on

For your JavaScript + React interviews, learn these very well:

⭐⭐⭐⭐⭐ Promise definition
⭐⭐⭐⭐⭐ pending / fulfilled / rejected
⭐⭐⭐⭐⭐ resolve / reject
⭐⭐⭐⭐⭐ then / catch / finally
⭐⭐⭐⭐⭐ Promise chaining
⭐⭐⭐⭐⭐ fetch returns Promise
⭐⭐⭐⭐⭐ async / await
⭐⭐⭐⭐⭐ try / catch
⭐⭐⭐⭐   Promise.all()
⭐⭐⭐⭐   Event loop + microtask basics

You don't need to memorize complicated Promise internals right now.

The main flow to remember
          Asynchronous operation
                    ↓
                 Promise
                    ↓
             ┌──────┴──────┐
             ↓             ↓
         resolve()      reject()
             ↓             ↓
           then()        catch()
             └──────┬──────┘
                    ↓
                 finally()

And for modern development:

Promise
   ↓
async / await
   ↓
try / catch
   ↓
fetch API
   ↓
React/API projects

*/


// lets practice here

const promiseOne = new Promise(function(resolve,  reject){
    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})

// here the 'then' is direct connection with resolve and "catch" is direct connection with reject.

// after the resolve() call then only the "then" will get execute, if we don't call the resolve() then it will print the setTimeout value.

promiseOne.then(function(){
    console.log("promice consumed")
})

/* op:-

Async task is complete
promise consumed

*/

// or we can wriite like this

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

/*
op:-

Async task two
Async 2 resolved

*/

// third promise

//we can pass the data in resolve() for example...

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"Rajesh", email:"rajesh@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
    console.log(user.username)
})


// promise four callback hell or chaining, here we implement this...

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;

        if (!error){
            resolve({username:"Rajesh", password:"Rajesh@123"})
        }else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})

// this is the callback hell or chaining , means we can use multiple "then" .
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((myName) => {
    console.log(myName)  
}).catch((error) => {
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolve or rejected")
})



/*

here if the :

error = true then the outtput is "Something went wrong will come"

error = false then the output is "Rajesh"

*/


// promise five ,by using  Async and await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true

        if (!error){
            resolve({course:"Python FullStack", price:999})
        }else{
            reject("ERROR: Course is out of date")
        }
    },1000)
})

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

// consumePromiseFive()

// the above code run when there is no error else it won't . to overcome this we use try and catch block. here below is the example...

async function consumePromiseFive(){
    try{
        const res = await promiseFive
        console.log(res)
    }catch (err){
        console.log(err)
    }
}

consumePromiseFive()

// this above code for handle the error.


// async with try and catch

async function getAllUsers(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        // the initially the value in sting format so we have to convert    it into json.
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log("ERROR: ", error)
    }  
}

getAllUsers()


// async and await with .then and .catch  Promise.

fetch("https://jsonplaceholder.typicode.com/users")
.then( (res)=>{
    return res.json()
})
.then( (data) => {
    console.log(data)
})
.catch( (error) => {
    console.log(error)
})




/* 

fetch() in JavaScript
----------------------
fetch() is a built-in JavaScript function used to make HTTP requests to a server or API and receive data asynchronously. It is commonly used to get data from an API, send data to a server, or update server-side data.

For your React + API projects, fetch() is very important.

Basic example
fetch("https://api.github.com/users/Rajeshgouda-143")

fetch() sends a request to that URL and returns a Promise.

You can handle that Promise using .then():

fetch("https://api.github.com/users/Rajeshgouda-143")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

What happens here?
fetch(URL)
    ↓
HTTP request
    ↓
Server
    ↓
Response
    ↓
Promise
    ↓
response.json()
    ↓
JavaScript object/data

Why do we use response.json()?

The response from the server isn't automatically a JavaScript object.

const response = await fetch(url);

response is a Response object.

To read JSON data:

const data = await response.json();

response.json() itself returns a Promise, which is why we use await or another .then().

Modern way: async/await

This is the style I recommend you learn well:

async function getUser() {

    try {
        const response = await fetch(
            "https://api.github.com/users/Rajeshgouda-143"
        );

        const data = await response.json();

        console.log(data);
        console.log(data.followers);

    } catch (error) {
        console.log(error);
    }
}

getUser();

GET request

By default, fetch() makes a GET request:

fetch(url);
POST request

To send data:

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Rajesh",
        age: 23
    })
});

Important interview points

Remember these:

fetch() is used for HTTP/network requests.
It is asynchronous.
fetch() returns a Promise.
response.json() also returns a Promise.
fetch() is commonly used instead of older XMLHttpRequest.
fetch() does not automatically reject for HTTP errors such as 404 or 500; check response.ok or response.status.

For example:

const response = await fetch(url);

if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
}
    
Easy way to remember
fetch()
   ↓
Send request
   ↓
Receive Response object
   ↓
response.json()
   ↓
Get actual JSON data

The most important difference from your XHR example is:

XMLHttpRequest → callbacks/events
fetch()        → Promise → then/catch or async/await

*/


