// "use strict";  whenever we use this it will treat the code like new version of javascript.

/* it means treat all js code as newer version, tand there is no option called not use strict mode .
*/

/* alert("hello") :-
it means it will show a popup in our browser.
*/

/*
console.log(3
    + 3
);  
// it will give the output, but this is not the way to wriite the code because, code readability shoould be high.
*/

//DATATYPES

/* datatypes are used to specify what type of data and what kind of data should be stored in a variable.

we have two types of datatypes in javascript,

1.primitive and 2. non-primitive

*/

/* 1.primitive datatype:
A primitive data type stores a single, basic value and is not an object.

we have primitive datatypes like,

String
Number
BigInt
Boolean
Undefined
Null
Symbol

*/

/* 1.string:("",'',``):-

A string is a data type used to store text or a sequence of characters.

let a = "Hello";
let b = 'Hello';
let c = `Hello`;

these all are strings.

ex:- let name = "Rajesh";

let → declares the variable
name → variable name
"Rajesh" → String value

You can check the datatype using typeof:
console.log(typeof name);

*/


/*  2. Number:-
Number is a data type used to store numeric values, including integers and decimal numbers.

ex:-  
let age = 23;
let price = 99.50;

also we can perform some arithmatic operations
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

*/


/*  3. BigInt:-
BigInt is a JavaScript data type used to represent very large integer values beyond the safe range of the Number type.

ex:-
let bigNumber = 123456789012345678901234567890n;

Remember: n → BigInt.

Important ⚠️
You cannot directly mix Number and BigInt:
ex:-
let a = 10;
let b = 20n;
console.log(a + b); // ❌ Error

Both should be BigInt:
ex:-
let a = 10n;
let b = 20n;
console.log(a + b); // ✅ 30n

*/

/* 4. Boolean:-
Boolean is a data type that represents one of two values: true or false.

ex:-
let isLoggedIn = true;
let isAdmin = false;

ex:-
let passwordCorrect = false;

if (passwordCorrect) {
    console.log("Login successful");
}

Since the value is false, the code inside if won't execute.

*/


/* 5. Undefined:-
undefined means a variable has been declared but no value has been assigned yet.

ex:-
let accountState;
console.log(accountState);

op:-  undefined

*/

/* 6. Null:-
Null represents the intentional absence of a value.

Remember:
undefined → value has not been assigned
null → value is intentionally empty

ex:-
let accountCity = null;

Here, you are explicitly saying:
"I don't have a city value right now."
You can later assign a value:

accountCity = "Chennai";

*/

/* 7. Symbol:-
Symbol is a primitive data type used to create unique identifiers.

Remember:
Symbol() → unique value
Symbols are mainly used when you need a unique property/key in an object.

ex:-
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);

op:- false

Even though both have "id", each Symbol is unique.

*/

// 2. NON-PRIMITIVE DATATYPE
/*A non-primitive data type is used to store structured or multiple values and is based on objects.

Examples:
 Object 
 Array
 Function.
*/

/* An object is a non-primitive data type used to store related data in key-value pairs.

ex:-
let user = {
    name: "Rajesh",
    age: 23,
    city: "Chennai"
};

You can access the values:
console.log(user.name);
console.log(user.age);

You can also change a value:
user.city = "Bangalore";

/*
Value	            typeof result
"Rajesh"	  ->      "string"
23	          ->       "number"
123n	      ->       "bigint"
true	      ->       "boolean"
let x;	      ->       "undefined"
null	      ->       "object" ⚠️
Symbol()	  ->       "symbol"
{}	          ->       "object"
[]	          ->       "object"
function(){}  ->       "function"

*/

// ex:-


// console.log(typeof ""); //string
// console.log(typeof String); //function

// console.log(typeof Number);  //function
// console.log(typeof 23);  //number

// console.log(typeof BigInt); //function
// console.log(typeof 20n); //bigint

// console.log(typeof Boolean);  //function
// console.log(typeof true);  //boolean

// console.log(typeof undefined);  //undefined
// console.log(typeof x);  //undefined

// console.log(typeof null);  //object
/*  This is a historical JavaScript behavior/quirk. null itself is a primitive value, even though typeof null returns "object". */

// console.log(typeof 0);  //number

// console.log(typeof Symbol); //function
// console.log(typeof Symbol()); //symbol

// console.log(typeof Object); //function
// console.log(typeof {}); //object

// console.log(typeof Array); //function
// console.log(typeof []); //object

// console.log(typeof NaN);  //number





















