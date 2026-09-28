// Objects

/*

1. What is an Object?
An object stores data in key-value pairs.

let user = {
    name: "Rajesh",
    age: 23,
    city: "Chennai"
};

Here:
name  → key
Rajesh → value

age   → key
23    → value

You can access properties in two ways:

Dot notation:-
console.log(user.name);

Bracket notation
console.log(user["name"]);

Output:
Rajesh


2. Why do we use Objects?

Objects are useful when multiple pieces of information belong to one entity.

For example, instead of:

let name = "Rajesh";
let age = 23;
let city = "Chennai";

we can write:

let user = {
    name: "Rajesh",
    age: 23,
    city: "Chennai"
};

This becomes especially useful when working with API data:

let product = {
    id: 101,
    name: "Laptop",
    price: 50000,
    available: true
};


3. Object.keys():-
Returns an array containing all the keys/property names of an object.

let user = {
    name: "Rajesh",
    age: 23,
    city: "Chennai"
};

console.log(Object.keys(user));

Output:
["name", "age", "city"]


4. Object.values()
Returns an array containing all the values of an object.

console.log(Object.values(user));

Output:
["Rajesh", 23, "Chennai"]


5. Object.entries():-
Returns an array containing key-value pairs of an object.

console.log(Object.entries(user));

Output:
[
    ["name", "Rajesh"],
    ["age", 23],
    ["city", "Chennai"]
]

This is very useful when looping through objects.

for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}

Output:

name Rajesh
age 23
city Chennai


6. Object.assign():-
Copies properties from one or more objects into another object.

let user = {
    name: "Rajesh",
    age: 23
};

let copy = Object.assign({}, user);

console.log(copy);

Output:
{
    name: "Rajesh",
    age: 23
}

It is commonly used for shallow copying.

You can also merge objects:

let a = {
    name: "Rajesh"
};

let b = {
    age: 23
};

let result = Object.assign({}, a, b);

console.log(result);

Output:

{
    name: "Rajesh",
    age: 23
}


7. Spread Operator {...}:-
Another common way to copy/merge objects.

let user = {
    name: "Rajesh",
    age: 23
};

let copy = {...user};

Merge:
let a = {name: "Rajesh"};
let b = {age: 23};

let result = {...a, ...b};
console.log(result);

Output:-
{
    name: "Rajesh",
    age: 23
}

This creates a shallow copy.


8. Object.hasOwn():-
Object.hasOwn() checks whether a property belongs directly to the object..

let user = {
    name: "Rajesh",
    age: 23
};

console.log(Object.hasOwn(user, "name"));

Output: true

console.log(Object.hasOwn(user, "city"));

Output: false


9. hasOwnProperty():-
It checks whether the property belongs directly to the object.
For modern code, Object.hasOwn(user, "name") is generally preferred.

You may also see:

user.hasOwnProperty("name");

Output: true



10. Object.create()
Creates a new object using another object as its prototype.

let person = {
    greet() {
        console.log("Hello");
    }
};

let user = Object.create(person);

user.greet();

Output: Hello

Here, user doesn't directly contain greet().

It can access it through its prototype.

We'll come back to this because this is one of the important "behind the scenes" concepts.


11. Object.freeze():-
Object.freeze() prevents properties from being added, removed, or changed.

let user = {
    name: "Rajesh",
    age: 23
};

Object.freeze(user);

user.age = 30;

console.log(user.age);

Output remains: 23

You also cannot normally add or delete properties.

user.city = "Chennai";
delete user.name;

These changes won't work on a frozen object.



12. Object.seal():-
Prevents adding or deleting properties, but existing properties can still be changed.

let user = {
    name: "Rajesh",
    age: 23
};

Object.seal(user);

user.age = 30;       // allowed
user.city = "Chennai"; // not allowed
delete user.name;    // not allowed

So:

freeze → cannot add, delete, or modify
seal   → cannot add or delete, but can modify


13. Object.isFrozen():
Checks whether an object is frozen.

let user = {
    name: "Rajesh"
};

Object.freeze(user);

console.log(Object.isFrozen(user));

Output: true


14. Object.isSealed():-
Checks whether an object is sealed.

let user = {
    name: "Rajesh"
};

Object.seal(user);

console.log(Object.isSealed(user));

Output: true

15. Object.is()
Compares two values.

Object.is() determines whether two values are the same value according to JavaScript's SameValue comparison.

It is similar to ===, but there are a couple of important differences.

console.log(Object.is(10, 10));
// true

console.log(Object.is("10", 10));
// false

Interesting cases:

console.log(Object.is(NaN, NaN));
// true

console.log(NaN === NaN);
// false

And:

console.log(Object.is(0, -0));
// false


16. Object.fromEntries()
Converts an array of key-value pairs into an object.

let entries = [
    ["name", "Rajesh"],
    ["age", 23]
];

let user = Object.fromEntries(entries);
console.log(user);

Output:
{
    name: "Rajesh",
    age: 23
}

It's basically the opposite direction of: Object.entries()

Remember:
Object.entries()
object → array

Object.fromEntries()
array → object


17. Object.getOwnPropertyNames():-
Returns the object's own property names, including non-enumerable properties.

let user = {
    name: "Rajesh",
    age: 23
};

console.log(Object.getOwnPropertyNames(user));

Output:

["name", "age"]

This is more advanced and less commonly needed for fresher interviews.


18. Object.getOwnPropertyDescriptors():-
Returns detailed information about an object's properties.

let user = {
    name: "Rajesh"
};

console.log(Object.getOwnPropertyDescriptors(user));

It can show information such as:

value
writable
enumerable
configurable

This is more advanced.

19. Object.getPrototypeOf()

Returns the prototype of an object.

let user = {
    name: "Rajesh"
};

console.log(Object.getPrototypeOf(user));

For a normal object, the prototype is generally:

Object.prototype

This is important for understanding JavaScript's prototype system.

20. Object.setPrototypeOf()

Changes the prototype of an object.

let person = {
    greet() {
        console.log("Hello");
    }
};

let user = {};

Object.setPrototypeOf(user, person);

user.greet();

Output:

Hello

⚠️ This is an advanced method and generally shouldn't be used frequently in performance-sensitive code.

21. Object.defineProperty();-
Creates or modifies a property with specific settings.

let user = {};

Object.defineProperty(user, "name", {
    value: "Rajesh",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(user.name);

Output:

Rajesh

This becomes important when learning property descriptors.

22. Object.defineProperties():-
Defines multiple properties at once.

let user = {};

Object.defineProperties(user, {
    name: {
        value: "Rajesh"
    },
    age: {
        value: 23
    }
});

console.log(user);


23. Object.preventExtensions():-
Prevents new properties from being added.

let user = {
    name: "Rajesh"
};

Object.preventExtensions(user);

user.age = 23;

age cannot be added.

But existing properties can generally still be modified or deleted.

Remember
preventExtensions → cannot add
seal              → cannot add/delete
freeze            → cannot add/delete/modify


24. Object.isExtensible():-
Checks whether new properties can be added.

let user = {};

console.log(Object.isExtensible(user));
// true

After:
Object.preventExtensions(user);

console.log(Object.isExtensible(user));
// false
⭐ Now the "behind the scenes" of Objects

This is where JavaScript becomes really interesting.


25. Objects are reference values
Consider:

let user1 = {
    name: "Rajesh"
};

let user2 = user1;

user2.name = "Rahul";

console.log(user1.name);

Output:
Rahul

Why?

Because:
user1 ─────┐
           ↓
        { name: "Rajesh" }
           ↑
user2 ─────┘

Both variables refer to the same object. They don't contain two independent objects.


26. Object comparison

Look at this:

let a = {
    name: "Rajesh"
};

let b = {
    name: "Rajesh"
};

console.log(a === b);

Output: false

Why?

Because these are two different objects. Even though their contents are identical:

a → Object A
b → Object B

Now:

let a = {
    name: "Rajesh"
};

let b = a;

console.log(a === b);

Output: true

Because both refer to the same object.


27. Objects can contain functions

An object can store functions as properties.

let user = {
    name: "Rajesh",

    greet: function() {
        console.log("Hello");
    }
};

user.greet();

Output: Hello

This function is commonly called a method because it belongs to the object.

Modern syntax:

let user = {
    name: "Rajesh",

    greet() {
        console.log("Hello");
    }
};


28. The this keyword
Inside an object method, this commonly refers to the object that called the method.

let user = {
    name: "Rajesh",

    greet() {
        console.log(this.name);
    }
};

user.greet();

Output: Rajesh

Here: this.name

means: user.name

So:

this → user
this.name → "Rajesh"


29. Objects have a prototype
This is one of JavaScript's biggest secrets.

Consider:

let user = {
    name: "Rajesh"
};

Your object doesn't need to directly contain every method you use.

For example:

user.toString();

Where did toString() come from?

It comes through the object's prototype chain.

Conceptually:

user
 ↓
Object.prototype
 ↓
null

Object.prototype contains methods that objects can access.

30. Prototype Chain

Suppose:

let user = {
    name: "Rajesh"
};

When you do:

user.toString();

JavaScript roughly looks like:

1. Does user have toString?
       ↓
   No

2. Check user.__proto__
       ↓
   Object.prototype

3. Does Object.prototype have toString?
       ↓
   Yes

4. Use it

This process is called the prototype chain.

31. __proto__

You may see:

console.log(user.__proto__);

It accesses the object's prototype.

However, for modern code, prefer:

Object.getPrototypeOf(user);

instead of directly using __proto__.

32. Object Property Descriptors

Every property has internal characteristics.

For example:

let user = {
    name: "Rajesh"
};

The name property has characteristics such as:

value
writable
enumerable
configurable

You can inspect them:

console.log(
    Object.getOwnPropertyDescriptor(user, "name")
);

You may see something like:

{
    value: "Rajesh",
    writable: true,
    enumerable: true,
    configurable: true
}
Meaning
value        → actual value
writable     → can value be changed?
enumerable   → appears in normal enumeration?
configurable → can property configuration be changed?


33. Object Destructuring:-

Very important in modern JavaScript and React.

Instead of:

let user = {
    name: "Rajesh",
    age: 23
};

console.log(user.name);
console.log(user.age);

You can write:

let {name, age} = user;

console.log(name);
console.log(age);

Output:

Rajesh
23

This is called object destructuring.

34. Object Shallow Copy
let user = {
    name: "Rajesh",
    age: 23
};

let copy = {...user};

Now:

copy.name = "Rahul";

console.log(user.name);

Output:

Rajesh

Because the outer object was copied.

But nested objects are still shared:

let user = {
    name: "Rajesh",
    address: {
        city: "Chennai"
    }
};

let copy = {...user};

copy.address.city = "Bangalore";

console.log(user.address.city);

Output: Bangalore

That's because spread creates a shallow copy.

35. Deep Copy :-

For a complete independent copy:

let copy = structuredClone(user);

Then:
copy.address.city = "Bangalore";

console.log(user.address.city);

The original remains: Chennai

*/

/*

this keyword in JavaScript

this refers to the object that is currently calling the function. Its value depends on how the function is called.

1. Inside an object method
let user = {
    name: "Rajesh",

    greet() {
        console.log(this.name);
    }
};

user.greet();

Output: Rajesh

Here: this === user

So this.name means user.name.

2. Simple function
function show() {
    console.log(this);
}

The value of this depends on how show() is called and whether strict mode is used.

3. Arrow function ⚠️

Arrow functions do not have their own this. They take this from their surrounding scope.

let user = {
    name: "Rajesh",

    greet: () => {
        console.log(this.name);
    }
};

Don't use an arrow function as an object method when you need this to refer to the object.

*/


//object literals

const mySym = Symbol("key1");

const jsUser = {
    name:"rajesh",
    "full name":"rajesh gouda",
    [mySym]:"mykeys1",
    age:23,
    location:"odisha",
    email:"rajesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]    
}

//there are two ways to access the properties from an object. by using (.) dot notation and braket notation [].

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser['full name']) // here without square notation we can't access the properties because in the full name were an gap between them.

// console.log(jsUser[mySym]);

/* important: whenever we want to declare a Symbol() inside an Object directly it won't possible we have to declare first outside the object, then we give the variable inside a square bracket [] of an object, then only we can access the Symbol . */


jsUser.email = "rajesh@gmail.com"
// Object.freeze(jsUser)  // it won't allow to modify the value of an object
// jsUser.email = "rajesh@gpt.com"
// console.log(jsUser);


// function inside object

jsUser.greetting = function(){
    console.log("hello js user");
}

// console.log(jsUser.greetting); // [Function (anonymous)]

// console.log(jsUser.greetting()) // hello js user
// undefined


jsUser.greettingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greettingTwo());
console.log(jsUser.greetting());




