// console.log(2 > 1);  // true
// console.log(2 >= 1); // true
// console.log(2 < 1);  // false
// console.log(2 <= 1); // false 
// console.log(2 == 1); // false
// console.log(2 != 1); // true


// type2: string

/* console.log("2" > 1); // true
Here "2" is a String, but > is a numeric comparison.

JavaScript converts:
"2" → 2

Then:
2 > 1 → true

So output is:
true

*/

// console.log("02" > 1);  // true
/* Same thing:
 "02" → 2 */

//type3: null

// console.log(null > 0); // false
// console.log(null >= 0); // true
// console.log(null == 0); // false
// console.log(null === 0); // false

/* conclusion:
The reason is that an equality check == and comparisions > < >= <= work differently.

Comparisions convert null to a number, treating it as 0.

That's why null >= 0 is true and null > 0 is false.

*/

/*
For relational comparisons, JavaScript converts null to 0:

null → 0
So it becomes:
0 > 0

op:-
That's - false.

*/


/*  
null == 0

This is different!
== is loose equality, and it follows different rules from > and >=.

console.log(null == 0);

JavaScript does not convert null to 0 for this comparison.

In loose equality:
null == undefined → true

But:
null == 0 → false

So:
null == 0 // false
*/

// console.log(undefined == 0); //false
// console.log(undefined > 0);  //false
// console.log(undefined < 0);  //false

//type4: === and ==

/* "===" triple equal to is used to compare both datatype and value without performed type conversion. it will check strictly.

ex:-
console.log("2" === 2);  //false
console.log(2 === 2);    //true  
*/


/* "==" double equal to ussed to check only the value not the datatype by performing type conversion , loose equality.

ex:-
console.log("2" == 2);  //true
console.log(2 == 2);    //true

here what happend the "2" value is coonvert into a number so it return true.

*/





 


