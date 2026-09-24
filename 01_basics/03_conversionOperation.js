// let score = 33;

// console.log(typeof score);  //number
// console.log(typeof (score));  // number


// what if the value id like this,
// let score = "33";
// console.log(typeof score);  // string

// so whenever we want to convert the string valuue into a number we will use Number() function.

// ex:-
// let score = "33";
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // 33

// what if the score is like this
// let score = "33abc";
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // NaN

// it will return the typeof is a number but while print the value it will print NaN it means not a number.

// let score = null;
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // 0

// let score = true;
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // 1

// let score = false;
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // 0

// let score = "rajesh";
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //true

// let isLoggedIn = 0
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //false


// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //false

// let isLoggedIn = "rajesh"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //true

// let isLoggedIn = {}
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //true

// let isLoggedIn = {
//     name:"rajesh"
// }
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //true

// let isLoggedIn = []
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //true

// let isLoggedIn = ["rajesh","kumar"]
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //true

// let isLoggedIn = null
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //false

// let isLoggedIn = undefined
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // false

// note:-

// 1 => true
// 0 => false
// "" => false
// "rajesh" => true
// {} => true
// [] => true
// null => false
// undefined => false


// String Conversion
// let someNUmber = 33;
// let stringNumber = String(someNUmber)
// console.log(typeof stringNumber); //string
// console.log(stringNumber); // "33"


/* like this we can convert object , array and other datatypes also by using their functions*/



//***************OPERATIONS *******************//

// let value = 3;
// let negValue = -value
// console.log(negValue);  //-3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/0)  //Infinity
// console.log(2%2)

// note:- if we devide any number by 0, it will return infinity.

// let str1 = "hello"
// let str2 = "rajesh"
// let str3 = str1 + str2
// console.log(str3);

/* If + sees a String, it starts doing string concatenation instead of normal addition. */

// console.log("1" + 2); // 12

/* "1" is a String, and 2 is a Number.
 JavaScript converts 2 to "2" and joins them:*/

// console.log(1 + "2"); // 12
/*First value is Number, second is String.
JavaScript converts 1 to "1":
"1" + "2" → "12" */

// console.log("1" + "2"); // 12


// console.log("1" + 2 + 2); // 122

/* solution:-
JavaScript evaluates from left to right.

First:
"1" + 2

Because "1" is a String:
"1" + "2" → "12"

Now we have:
"12" + 2

Again, String + Number:
"12" + "2" → "122"

✅ Output: 122
*/

// console.log(1 + 2 + "2"); // 32
/* 
Again, left to right.

First:
1 + 2

Both are Numbers:
1 + 2 → 3

Then:
3 + "2"

Now we have Number + String, so JavaScript converts 3 to "3":

"3" + "2" → "32"

✅ Output: 32
// */

// console.log(typeof ("1" + 2));       // string
// console.log(typeof (1 + "2"));       // string
// console.log(typeof ("1" + "2"));      // string
// console.log(typeof ("1" + 2 + 2));    // string
// console.log(typeof (1 + 2 + "2"));    // string


//boolean

// console.log(true); // true
// console.log(+true); // 1
// console.log(+""); // 0

// let num1, num2, num3 
// num1 = num2 = num3 = 2 + 2;
// console.log(num1); //4
// console.log(num2); //4
// console.log(num3); //4


//1. Post-increment: gameChanger++
let gameChanger = 100
gameChanger++;
console.log(gameChanger);  // 101

/* x++ means:
Use the current value first, then increase it. 

ex:-
let x = 100;
let y = x++;

console.log(y); // 100
console.log(x); // 101
*/


//2. Pre-increment: ++gameChangers
let gameChangers = 100
++gameChangers;
console.log(gameChangers); 

/*   
++x means:
Increase the value first, then use the new value.

ex:-
let x = 100;
let y = ++x;

console.log(y); // 101
console.log(x); // 101
*/
