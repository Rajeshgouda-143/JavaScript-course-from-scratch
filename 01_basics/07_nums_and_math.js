//Number and Math
/* number datatype is used to store the numeric elemenets, including numbers and decimal values */

const score = 700;
// console.log(score);  // 700
// console.log(typeof score);  // number

// we can also declare the number varable by using "new" keyword and Number function.

const balance = new Number(500)
// console.log(balance);            //[Number: 500]
// console.log(typeof balance);     // object

/* whenever we declare a variable by using simple way it will return the output simple number and also the datatype is number  but whenever we trying to declare a number variable by using "new" keyword it will return a number object as an array and also thhe datatype is an object.  */

// ex:-here we are checking the datatype below

const num1 = 700;
const num2 = new Number(700)

// console.log(num1 == num2); // true
// console.log(num1 === num2);// ffalse

/* because they both have same value not the same datatype , that is way the double == return true because it checks only value not the datatype, but === checks both value as well as datatype so it will return false.  */


// console.log(balance.toString()) // "500"
// console.log(balance.toString().length) // 3
// console.log(balance.toFixed(1)) // 500.0 

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2)); // 24
// console.log(otherNumber.toPrecision(3)); // 23.9
// console.log(otherNumber.toPrecision(1)); // 2e+1


// toLocaleString(): Converts a number to a string by using the current or specified locale.

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());

// op:- 1,000,000

// console.log(hundreds.toLocaleString("en-IN"));

//op:- 10,00,000



/*
1. toString()
Converts a number into a string.

let num = 100;
console.log(num.toString()); // "100"
console.log(typeof num.toString()); // string

2. toFixed()
Formats a number to a fixed number of decimal places.

let num = 10.5678;
console.log(num.toFixed(2)); // "10.57"

⚠️ toFixed() returns a String.

3. toPrecision()
Formats a number to a specified number of significant digits.

let num = 123.456;
console.log(num.toPrecision(4)); // "123.5"

It also returns a String.

4. toExponential()

Converts a number to exponential/scientific notation.

let num = 123456;

console.log(num.toExponential(2)); // "1.23e+5"
Important Number static methods

These are called using Number, not directly on the number.

5. Number.isInteger()

Checks whether a value is an integer.

console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false

6. Number.isNaN()
Checks whether the value is actually NaN.

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10));  // false

7. Number.isFinite()
Checks whether a value is a finite number.

console.log(Number.isFinite(100));      // true
console.log(Number.isFinite(Infinity)); // false

8. Number.isSafeInteger()

Checks whether an integer is within JavaScript's safe integer range.

console.log(Number.isSafeInteger(100)); // true
Important conversion methods

9. Number.parseInt()

Converts a value/string to an integer.

console.log(Number.parseInt("100"));    // 100
console.log(Number.parseInt("100.50")); // 100

It can also take a string containing extra characters:

console.log(Number.parseInt("100px")); // 100

10. Number.parseFloat()
Converts a string to a decimal number.

console.log(Number.parseFloat("10.50")); // 10.5

*/

/*
Important Number properties

These aren't methods, but you should know them.

Number.MAX_VALUE
Largest representable number.

console.log(Number.MAX_VALUE);

Number.MIN_VALUE
Smallest positive number close to zero.

console.log(Number.MIN_VALUE);

Number.MAX_SAFE_INTEGER
Largest integer that can be safely represented.

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

Number.MIN_SAFE_INTEGER
Smallest safe integer.
console.log(Number.MIN_SAFE_INTEGER);
// -9007199254740991

Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);

Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY);
Number.NaN

Represents Not-a-Number.

console.log(Number.NaN);

*/

// console.log(Number.MAX_VALUE); //1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324  




//++++++++++++++++++++ Maths ++++++++++++++++=


/*
In JavaScript, Math is a built-in object used for mathematical calculations. Most Math methods are called like Math.method().
*/

/*

1. Math.round()
Math.round() returns the nearest integer to a given number.

Decimal .5 or greater → rounds up
Decimal less than .5 → rounds down

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5

2. Math.floor():
Math.floor() returns the largest integer less than or equal to the given number.

In simple words: always goes down.

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(4));   // 4

With negative numbers:
console.log(Math.floor(-4.2)); // -5

Because -5 is lower than -4.2.

3. Math.ceil():
Math.ceil() returns the smallest integer greater than or equal to the given number.

In simple words: always goes up.

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4));   // 4

With negative numbers:

console.log(Math.ceil(-4.2)); // -4


4. Math.trunc():
Math.trunc() removes the decimal part of a number and returns only the integer part.

console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(4.1));  // 4
console.log(Math.trunc(-4.9)); // -4

Notice:

floor(-4.9) → -5
trunc(-4.9) → -4

5. Math.abs():
Math.abs() returns the absolute value of a number means only positive number.

It converts a negative number to positive.

console.log(Math.abs(-10)); // 10
console.log(Math.abs(10));  // 10
console.log(Math.abs(-5.5)); // 5.5


6. Math.max():
Math.max() returns the largest number from the given values.

console.log(Math.max(10, 20, 5, 30));
// 30

You can also use variables:

let a = 10;
let b = 50;
let c = 20;

console.log(Math.max(a, b, c));
// 50


7. Math.min():
Math.min() returns the smallest number from the given values.

console.log(Math.min(10, 20, 5, 30));
// 5


8. Math.pow():
Math.pow() returns a number raised to a specified power.

Syntax:
Math.pow(base, exponent)

Example:
console.log(Math.pow(2, 3));

Output: 8

Because:
2 × 2 × 2 = 8

Another example:
console.log(Math.pow(5, 2));
// 25

You can also use the ** operator:
console.log(2 ** 3);
// 8


9. Math.sqrt():
Math.sqrt() returns the square root of a number.

console.log(Math.sqrt(25));
// 5

console.log(Math.sqrt(64));
// 8

Because:
5 × 5 = 25
8 × 8 = 64


10. Math.cbrt():
Math.cbrt() returns the cube root of a number.

console.log(Math.cbrt(27));
// 3

Because:
3 × 3 × 3 = 27

Another example:
console.log(Math.cbrt(125));
// 5


11. Math.random():
Math.random() returns a random floating-point number greater than or equal to 0 and less than 1.

console.log(Math.random());

Possible output:
0.245678

Another time:
0.893421

The value is always:
0 <= value < 1
Random number from 1 to 10
let num = Math.floor(Math.random() * 10) + 1;

console.log(num);

we use +1 there to avoiding zero, that means some time it will start from 0 so the floor() is round the value and make it a single  value so the value become 0 so that's why we use + 1.

Possible outputs:
1
2
3
...
10


12. Math.sign():
Math.sign() tells whether a number is positive, negative, or zero.

It returns:

1   → positive
-1  → negative
0   → zero

Example:
console.log(Math.sign(10));
// 1

console.log(Math.sign(-10));
// -1

console.log(Math.sign(0));
// 0


13. Math.hypot():
Math.hypot() returns the square root of the sum of squares of its arguments.

It is commonly used to calculate the hypotenuse of a right triangle.

console.log(Math.hypot(3, 4));
// 5

Because:

√(3² + 4²)
= √(9 + 16)
= √25
= 5

*/

/*

round  → nearest integer
floor  → down
ceil   → up
trunc  → remove decimal
abs    → positive value
max    → biggest
min    → smallest
pow    → power
sqrt   → square root
cbrt   → cube root
random → random number
sign   → positive/negative/zero
hypot  → hypotenuse

*/

/*
Math itself is an object, and these are methods of the Math object. Unlike String or Number, you don't create a Math object with new Math().
*/


const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


