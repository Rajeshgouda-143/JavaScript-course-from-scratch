// array

/*
JavaScript Arrays

What is an Array?
An array is a data structure used to store multiple values in a single variable.

let skills = ["Python", "JavaScript", "React", "SQL"];

Instead of:

let skill1 = "Python";
let skill2 = "JavaScript";
let skill3 = "React";
let skill4 = "SQL";

we can store everything in one array:

let skills = ["Python", "JavaScript", "React", "SQL"];

Why do we use Arrays?

Arrays are useful when:
You need to store multiple values.
You need to access values using an index.
You need to loop through data.
You need to add/remove elements.
You need to search or filter data.
You need to transform data.
You receive a list of data from an API.

Example:
let students = ["Rajesh", "Rahul", "Amit"];

console.log(students[0]);

Output:  Rajesh

Important:
Array indexing starts from 0.

Rajesh → 0
Rahul  → 1
Amit   → 2


1. length:
Returns the number of elements in an array.

let numbers = [10, 20, 30, 40];
console.log(numbers.length);

Output: 4


2. push():

Adds an elements to the end of an array.
push() changes the original array.

let numbers = [10, 20, 30];

numbers.push(40);
console.log(numbers);

Output: [10, 20, 30, 40]



3. pop():
Removes the last element from an array.
it won't accepts any arguments.
pop() also changes the original array.

let numbers = [10, 20, 30];

numbers.pop();
console.log(numbers);

Output: [10, 20]



4. unshift():
Adds an elements to the beginning of an array.

let numbers = [20, 30];

numbers.unshift(10);
console.log(numbers);

Output: [10, 20, 30]


5. shift():
Removes the first element.

let numbers = [10, 20, 30];
numbers.shift();
console.log(numbers);

Output: [20, 30]

Easy memory
push()    → add at end
pop()     → remove from end

unshift() → add at beginning
shift()   → remove from beginning

These four are very important.



6. at():
Returns the element at a specific index.

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.at(1));

Output: Banana

It also supports negative indexes:

console.log(fruits.at(-1));

Output: Mango


7. includes():
Checks whether an array contains a particular value.

Returns true or false.

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Banana"));

Output: true

console.log(fruits.includes("Orange"));

Output: false



8. indexOf():
Returns the index of the first occurrence of a value. if the element is not present it will return the -1.


let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Banana"));

Output: 1

If the value doesn't exist:

console.log(fruits.indexOf("Orange"));

Output: -1


9. lastIndexOf():

Returns the index of the last occurrence of a value.

let numbers = [10, 20, 30, 20, 40];

console.log(numbers.lastIndexOf(20));

Output: 3


10. join():

Converts array elements into a string.

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.join(", "));

Output: Apple, Banana, Mango

You can choose the separator:

console.log(fruits.join(" - "));

Output: Apple - Banana - Mango



11. slice():
Returns a portion of an array without changing the original array.
The ending index is not included.

syntax:- slice(start, end)

let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result);

Output: [20, 30, 40]




12. splice():

Used to add, remove, or replace elements in an array.

It changes the original array.

Remove:
let numbers = [10, 20, 30, 40];

numbers.splice(1, 2);

console.log(numbers);

Output: [10, 40]

Meaning:
start = 1
delete = 2 elements

Add:
let numbers = [10, 40];

numbers.splice(1, 0, 20, 30);

console.log(numbers);

Output: [10, 20, 30, 40]


Easy difference
slice()  → extracts, doesn't change original
splice() → modifies original

This is a very important interview question.


13. concat():
Combines two or more arrays.
It doesn't modify the original arrays.

let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);
console.log(result);

Output: [1, 2, 3, 4]



14. reverse():
Reverses the order of elements.
reverse() changes the original array.

let numbers = [1, 2, 3, 4];
numbers.reverse();

console.log(numbers);

Output: [4, 3, 2, 1]


15. sort():
Sorts the elements of an array.

Strings:
let fruits = ["Mango", "Apple", "Banana"];
fruits.sort();
console.log(fruits);

Output: ["Apple", "Banana", "Mango"]


Important problem with numbers
let numbers = [10, 5, 20, 2];
numbers.sort();
console.log(numbers);

You might expect: [2, 5, 10, 20]

But JavaScript sorts by default as strings, so you can get: [10, 2, 20, 5]

For numbers:

Ascending: 
numbers.sort((a, b) => a - b);

op:- [2, 5, 10, 20]

Descending:
numbers.sort((a, b) => b - a);


16. forEach():
Executes a function for each element.
It is mainly used when you want to perform an action on each element.

forEach() does not return a new array. it returns undefined.

let numbers = [10, 20, 30];

numbers.forEach(function(num) {
    console.log(num);
});

Output:

10
20
30


17. map():
Creates a new array by applying a function to every element.

map() transforms every element and returns a new array.

let numbers = [1, 2, 3];

let result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);

Output: [2, 4, 6] 


18. filter():
Creates a new array containing only elements that satisfy a condition.

filter() returns a new array containing elements that pass a condition.

let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter(function(num) {
    return num > 20;
});

console.log(result);

Output: [25, 30]


19. find():
Returns the first element that satisfies a condition. and It stops when it finds the first matching element.

let numbers = [10, 20, 30, 40];

let result = numbers.find(function(num) {
    return num > 20;
});

console.log(result);

Output: 30


20. findIndex():
Returns the index of the first element that satisfies a condition.

let numbers = [10, 20, 30, 40];

let result = numbers.findIndex(function(num) {
    return num > 20;
});

console.log(result);

Output: 2



21. findLast():
Returns the last element that satisfies a condition.

let numbers = [10, 20, 30, 40];

let result = numbers.findLast(function(num) {
    return num > 20;
});

console.log(result);

Output: 40


22. findLastIndex()
Returns the index of the last matching element.

let numbers = [10, 20, 30, 40];

let result = numbers.findLastIndex(function(num) {
    return num > 20;
});

console.log(result);

Output: 3


23. some():
Checks whether at least one element satisfies a condition.
some() checks whether at least one element passes the condition.

Returns true or false.

let numbers = [10, 20, 30];

let result = numbers.some(function(num) {
    return num > 25;
});

console.log(result);

Output: true

Because 30 > 25.



24. every():
Checks whether all elements satisfy a condition.

let numbers = [10, 20, 30];

let result = numbers.every(function(num) {
    return num > 5;
});

console.log(result);

Output: true

Easy difference
some()  → at least one
every() → all


25. reduce():
reduce is an advanced array methods used to traverse through an array and perform some operations and returns exactly one single value.

Very commonly used for:

Sum
Product
Total price
Counting
Calculations

Example:
let numbers = [10, 20, 30];

let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log(total);

Output: 60

How it works
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60


26. reduceRight()
Works like reduce(), but processes the array from right to left.

let numbers = [1, 2, 3, 4];

let result = numbers.reduceRight(function(acc, num) {
    return acc - num;
}, 0);

console.log(result);
It starts from the right side.


27. flat():
Converts nested arrays into a flatter array.

let numbers = [1, 2, [3, 4], [5, 6]];
console.log(numbers.flat());

Output: [1, 2, 3, 4, 5, 6]

For deeper nesting:

let numbers = [1, [2, [3, 4]]];
console.log(numbers.flat(2));

Output: [1, 2, 3, 4]


28. flatMap()
Performs map() and then flat() at one level.

let numbers = [1, 2, 3];
let result = numbers.flatMap(num => [num, num * 2]);

console.log(result);

Output: [1, 2, 2, 4, 3, 6]


29. fill():
Replaces elements with a specified value.

let numbers = [1, 2, 3, 4];
numbers.fill(0);
console.log(numbers);

Output: [0, 0, 0, 0]

You can specify a range:

let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 3);
console.log(numbers);

Output:[1, 0, 0, 4, 5]



30. Array.isArray()
Checks whether a value is an array.

let numbers = [1, 2, 3];
console.log(Array.isArray(numbers));

Output: true

console.log(Array.isArray("hello"));

Output: false

Very important

Because:
typeof []
returns: "object"

So to properly check for an array, use:
Array.isArray()


31. Array.from()
Creates an array from an iterable or array-like value.

Example:
let name = "Rajesh";

let result = Array.from(name);
console.log(result);

Output: ["R", "a", "j", "e", "s", "h"]


32. Array.of()
Creates an array from the given arguments.

let result = Array.of(10, 20, 30);
console.log(result);

Output: [10, 20, 30]


33. entries()
Returns an iterator containing index and value pairs.

let fruits = ["Apple", "Banana"];

for (let [index, value] of fruits.entries()) {
    console.log(index, value);
}

Output:

0 Apple
1 Banana


34. keys():
Returns an iterator containing the array's indexes.

let fruits = ["Apple", "Banana"];

console.log([...fruits.keys()]);

Output: [0, 1]



35. values():
Returns an iterator containing the array's values.

let fruits = ["Apple", "Banana"];

console.log([...fruits.values()]);

Output: ["Apple", "Banana"]


36. toString()
Converts an array to a string.

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.toString());

Output: Apple,Banana,Mango


37. toReversed()
Returns a new reversed array without modifying the original.

let numbers = [1, 2, 3];
let result = numbers.toReversed();
console.log(result);

Output: [3, 2, 1]

Original remains: [1, 2, 3]


Difference
reverse()     → changes original
toReversed()  → returns new array


38. toSorted():
Returns a new sorted array without changing the original.

let numbers = [30, 10, 20];
let result = numbers.toSorted((a, b) => a - b);
console.log(result);

Output: [10, 20, 30]

Original: [30, 10, 20]


39. toSpliced()

Works like splice(), but doesn't modify the original array.

let numbers = [10, 20, 30, 40];

let result = numbers.toSpliced(1, 2);

console.log(result);

Output:

[10, 40]

Original:

[10, 20, 30, 40]
40. with()

Returns a new array with an element replaced at a particular index.

let numbers = [10, 20, 30];

let result = numbers.with(1, 100);

console.log(result);

Output:

[10, 100, 30]

Original:

[10, 20, 30]


⭐ Most Important Methods for Interviews

Adding/removing
-----------------
push()
pop()
shift()
unshift()
splice()

Searching
-------------
includes()
indexOf()
lastIndexOf()
find()
findIndex()

Processing
--------------
forEach()
map()
filter()
reduce()
some()
every()

Array manipulation
----------------------
slice()
concat()
join()
reverse()
sort()

Modern methods
----------------
flat()
flatMap()
toSorted()
toReversed()
toSpliced()
with()

Array creation/checking
-------------------------
Array.isArray()
Array.from()
Array.of()


🔥 The most important differences

These are very common interview questions:

map() vs forEach()
map()     → returns a new array
forEach() → doesn't return a new array
map() vs filter()
map()    → transforms every element
filter() → selects elements based on condition
find() vs filter()
find()   → returns first matching element
filter() → returns all matching elements in a new array
some() vs every()
some()  → at least one must pass
every() → all must pass
slice() vs splice()
slice()  → doesn't change original
splice() → changes original
push() vs unshift()
push()    → add at end
unshift() → add at beginning
pop() vs shift()
pop()   → remove from end
shift() → remove from beginning
reverse() vs toReversed()
reverse()    → changes original
toReversed() → doesn't change original
sort() vs toSorted()
sort()     → changes original
toSorted() → doesn't change original


1. Shallow Copy
A shallow copy creates a new array, but if the array contains nested objects or arrays, those nested values are still shared with the original.

Example
let original = [1, 2, [3, 4]];

let copy = [...original];

copy[0] = 100;
copy[2][0] = 300;

console.log(original);
console.log(copy);

Output:

[1, 2, [300, 4]]
[100, 2, [300, 4]]

Notice:

copy[0] = 100

didn't affect the original.

But:

copy[2][0] = 300

did affect the original because the nested array [3,4] is shared.

Common ways to create a shallow copy
let copy1 = [...original];

let copy2 = original.slice();

let copy3 = Array.from(original);

You can also use:

let copy4 = Object.assign([], original);
Interview definition

A shallow copy creates a new outer array, but nested objects or arrays still reference the same memory.

2. Deep Copy

A deep copy creates a completely independent copy, including nested arrays and objects.

Changing the copy will not affect the original.

Example
let original = [1, 2, [3, 4]];

let copy = structuredClone(original);

copy[0] = 100;
copy[2][0] = 300;

console.log(original);
console.log(copy);

Output:

[1, 2, [3, 4]]
[100, 2, [300, 4]]

The original remains unchanged.

*/

// example:-

// const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[3]);  // 3


// const myHeros = ["Spiderman","Ironman","Saktiman"]
// console.log(myHeros);

// const myArr2 = new Array("Spiderman","Ironman","Saktiman")
// console.log(myArr2);

// console.log(myHeros == myArr2) // false
// console.log(myHeros === myArr2) // false

// console.log([...myHeros.entries()]);
// console.log([...myHeros.keys()]);
// console.log([...myHeros.values()]);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); 
console.log(marvel_heros[3][1]); 

// push add the element to the existing array it will not create an new array.

let allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
// without a variable declare it will not return anything because it will create a new array so we have to hold the new array in  a variable.

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,[3,4],5,6,[4,[8,9]]]
const flated_array = another_array.flat()
console.log(flated_array);
// in the above it will by default flatter only one level if there is more than one nested array we have to give the level of flatted or  we can directly use Infinity it will flattered all the nasted array to a single array.

// ex:-
const flated_array1 = another_array.flat(2)
console.log(flated_array1);

const flated_array2 = another_array.flat(Infinity)
console.log(flated_array2);

console.log(Array.isArray("rajesh")) // check wheather it is array or not
console.log(Array.from("rajesh")) // create an array

console.log(Array.from({name:"rajesh"})) // it will return empty array [] because it confuse what we want key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)) // it will convert the set of element into a new array.
console.log(Array.of(10,20,30,40))

console.log([...marvel_heros.entries()]) // it returns both key and value pairs like key is the index and value is the elments of an array.

console.log([...marvel_heros.keys()]) // it return only keys like the index of an array.

console.log([...marvel_heros.values()]) // it return the values of an array.




















