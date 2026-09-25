//String Datatype
/*A string is a data type used to store text or a sequence of characters. */

/*The + operator performs addition when both operands are numbers. If either operand is a string, it performs string concatenation. Evaluation happens from left to right. */

// these all are strings.
let a = "Hello";
let b = 'Hello';
let c = `Hello`;

/*ex:- 
let name = "Rajesh";

let → declares the variable
name → variable name
"Rajesh" → String value

You can check the datatype using typeof:
console.log(typeof name);

*/

//example:

// console.log(1 + 2 + 3 + "4");

// First:
// 1 + 2 + 3 = 6

// Then:
// 6 + "4" = "64"

// ✅ Output: 64


// ex2:-
const name = "rajesh";
const repoCount = 50;
// console.log(name + repoCount + "kumar");

// op:-  rajesh50kumar

// example3:- `` backtics  (it is called string intepelition)

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// op:-Hello my name is rajesh and my repo count is 50

// Another way to declare a string is... by using new keyword and string function

const gameName = new String("Pubg");
// console.log(gameName);

// op:-[String: 'Pubg']

/* difference is because new String() creates a String object, while a normal string creates a primitive string value.
*/


/*
1. Normal String
const gameName = "Pubg";
console.log(gameName);

Output:
Pubg

Here "Pubg" is a primitive string.

console.log(typeof gameName);
Output:
string
*/


/*
2. Using new String()

const gameName = new String("Pubg");
console.log(gameName);

You may see:
[String: 'Pubg']

Why?
Because:

new String("Pubg")

creates a String object, not a primitive string.

console.log(typeof gameName);
Output:
object

*/

/*
Very important example

const a = "Pubg";
const b = new String("Pubg");

console.log(a == b);   // true
console.log(a === b);  // false

"==" is returned true because it check only the value not the datatype that's why it returned true, but "===" check both value as well as datatype that's why it returned false. 

*/

//IMPORTANT***

/*we can perform the methods by using simple string also as well as String Object also */

// // ex:- string
// let myName = "rajesh";

// console.log(myName.length); it return the length of the string

// console.log(myName.toUpperCase()); it will convert the lowercase character into uppercase

// console.log(myName.charAt(3)); it is used to return the character based on the index.


// console.log(myName.indexOf("e")); it is used to return the index based on the character.


// ex:- new String()

/* trim(): string
Removes the leading and trailing white space and line terminator characters from a string.  

let myName = new String("  rajesh gouda  ");
console.log(myName.trim());
*/

/*  replace():String
it will replace the old element into a new element if the element is present in the sequence manner,  else it will return as it is the string and also the element should present in the string otherwise it will return as it is the string 

let myName = new String("  rajesh gouda  ");
console.log(myName.replace("raj","Rep"));

let myName = new String("  rajesh gouda  ");
console.log(myName.replace("rnj","Rep"));

const url = "https://rajesh.com/google@20gouda"
console.log(url.replace("@20","-"));
op:- https://rajesh.com/google-gouda

*/

/* An object that can split a string.
Split a string into substrings using the specified separator and return them as an array

 let myName = new String("rajesh gouda");
 console.log(myName.split(" "));  
 op:- [ 'rajesh', 'gouda' ]  because based on the separator it will separate the stringand returnthose value in an array  

let myName = new String("rajesh gouda");
console.log(myName.split()); 
op:-  [ 'rajesh gouda' ] because here we didn't pass any separator. that is why it return everything in a string an array.

*/

/* Slice is used to extract a part from a string based on the start value , end value and it will not update the original string.

let myName = new String("rajesh gouda");
console.log(myName.slice(2,4)); 
// op:- je

*/

/*

1. length
Returns the number of characters.

let str = "Rajesh";
console.log(str.length); // 6

2. toUpperCase()
Converts to uppercase.
"rajesh".toUpperCase(); // "RAJESH"

3. toLowerCase()
Converts to lowercase.
"RAJESH".toLowerCase(); // "rajesh"

4. charAt()
Returns the character at a particular index.
let str = "Rajesh";
console.log(str.charAt(0)); // R

5. includes()
Checks whether a string contains something.
"Rajesh".includes("Raj"); // true

6. indexOf()
Returns the position of a character/string.
"Rajesh".indexOf("j"); // 3
If not found, it returns -1.

7. slice()
Extracts part of a string.
let str = "JavaScript";
console.log(str.slice(0, 4)); // Java

8. substring()
Also extracts part of a string.
"JavaScript".substring(0, 4); // Java

9. replace()
Replaces part of a string.
let str = "Hello Rajesh";
console.log(str.replace("Rajesh", "Rahul"));
// Hello Rahul

10. trim()
Removes white spaces from the beginning and end.
let str = "  Rajesh  ";
console.log(str.trim()); // "Rajesh"


11. split()
Converts a string into an array.
let str = "Python,React,SQL";
console.log(str.split(","));
Output:
["Python", "React", "SQL"]

12. concat()
Joins strings.
let a = "Hello";
let b = "Rajesh";
console.log(a.concat(" ", b));
// Hello Rajesh

But usually we use + or template literals instead.

13. startsWith()
"JavaScript".startsWith("Java"); // true

14. endsWith()
"JavaScript".endsWith("Script"); // true

15. charCodeAt()
Returns the Unicode value of a character.
"ABC".charCodeAt(0); // 65

*/


/*

let str = "JavaScript";
1. slice(start, end)
start → starting index
end → ending index (not included)
Supports negative indexes
console.log(str.slice(0, 4));

Output:
Java

Negative example:
console.log(str.slice(-6));
Output:
Script


2. substring(start, end)
start → starting index
end → ending index (not included)
Does NOT properly support negative indexes; negative values are treated as 0.
If start > end, it swaps them.
console.log(str.substring(0, 4));

Output:
Java

Example:
console.log(str.substring(4, 0));
It treats it as:
str.substring(0, 4);
Output:
Java

3. substr(start, length) ⚠️
substr() is deprecated. You may see it in older code, but you generally should not use it in new code.

The second argument means length, not ending index.

console.log(str.substr(0, 4));
Output:
Java

Here:
start = 0
length = 4
So it takes 4 characters.

*/











