// while and do while loop


/* 1.while loop:-

it is used to execute some sset of instruction for "n" no.of times until the condition is not satisfied.

for the while loop declaration of variable is mandatory. and updatation is also mandatory.

The condition is checked before each iteration.

syntax:-

while (condition) {
    
}
*/

// exmple:-

let num = 0;

while(num<=10){
    // console.log(`Value of index is ${num}`)
    num+=1
}

// array in while loop

let myHeros = ["flash", "batman", "superman", "spiderman", "saktiman"]

let arr = 0;
while(arr < myHeros.length){
    // console.log(`hero name is ${myHeros[arr]}`)
    arr+=1
}



/*  do while loop:-

The do...while loop executes its block once before checking the condition and then continues repeating while the condition is true.

it means if any one of the condition also not satisfied it will runs the do while at least one time by default.  

syntax:-

do {
    
} while (condition);
 
*/


// exmple:-

let score = 1

do {
    // console.log(`The score is ${score}`)
    score++
}while(score <= 10)


/* op:-

The score is 0
The score is 1
The score is 2
The score is 3
The score is 4
The score is 5
The score is 6
The score is 7
The score is 8
The score is 9
The score is 10

*/

let initial_value = 11

do {
    console.log(`The initial value is ${initial_value}`);
    initial_value++
}while(initial_value <= 10)

// op:- The initial value is 11

/* Now the conclusion is look at the both code in the first one return every value because it satisfied the condition but , in the second code doesn't satisfied the condition because 10 is less than 11 so the do while loop at list print the value once like  (The initial value is 11) default value.  */


/* Maps:-
The Map() constructor creates Map objects.

Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

If an iterable object (such as an array) is passed, all of its elements will be added to the new Map. Each element must be an object with two properties: 0 and 1, which correspond to the key and value (for example, [[1, "one"],[2, "two"]]). If you don't specify this parameter, or its value is null or undefined, the new Map is empty.

*/

// exmple:- Creating a new Map

const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

console.log(myMap)

// op:- Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

// console.log(map.get("a"));
// Expected output: 97

// console.log(map.size);
// Expected output: 3

map.delete("b");

// console.log(map.size);
// Expected output: 2

// example:-
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined

contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });

contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}

contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
// console.log(contacts.size); // 1

/*

Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key


Map-like objects are either read-only or read-writable (see the readonly keyword in the IDL above).

Read-only Map-like objects have the property size, and the methods: entries(), forEach(), get(), has(), keys(), values(), and [Symbol.iterator]().
Writeable Map-like objects additionally have the methods: clear(), delete(), and set().
The methods and properties have the same behavior as the equivalent entities in Map, except for the restriction on the types of the keys and values.
*/


const countryCode = new Map();

countryCode.set("IN", "India")
countryCode.set("USA", "United States of America")
countryCode.set("Fr", "France")
countryCode.set("IN", "India")

// console.log(countryCode)

// countryCode.forEach((item)=>{
//     console.log(item)
// })

for (let [key,value] of countryCode){
    // console.log(key, ":-", value)
}

/* const myObj = {
    game1:"NSF",
    game2:"PUBG"
}

for (let [key, value] of myObj){
    console.log(key, value);
    
}

*/

// op:-TypeError: myObj is not iterable  

//but in Map () it work but not in object

// so to iterate in object we use for..in loop. below example

const myObject = {
    js:"javascipt",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (let key in myObject){
    // console.log(`${key} shourtcut is for ${myObject[key]}`)
}

// we can also iterate in array by using for..in 

const programming = ["js", "rb", "py", "java", "cpp"]

for(let key in programming){
    // console.log(key);
    // console.log(programming[key])
    
}


const myMaps = new Map()

myMaps.set("IN", "India")
myMaps.set("USA", "United States of America")
myMaps.set("Fr", "France")
myMaps.set("IN", "India")

for(let key in myMaps){
    // console.log(key)
}

/* so in the Map() object the for...in loop won't work , so we use for..of loop to iterate the values .  */


/*
forEach() in JavaScript

Definition:

forEach() is an array method used to execute a function once for each element in an array. It is mainly used when we want to perform an action on every element of the array.

forEach() can accepts item , index and also the array as an paremeter.

Example:-
let numbers = [10, 20, 30, 40];

numbers.forEach(function(num) {
    console.log(num);
});

Output:

10
20
30
40

Here, forEach() takes each element one by one and passes it to the function.

Using arrow function
let numbers = [10, 20, 30, 40];

numbers.forEach(num => {
    console.log(num);
});

Important points:-

forEach() works mainly with arrays.
It executes the callback once for each element.
It does not return a new array.
It is useful when you just want to perform an action on each element.
You generally cannot stop a forEach() loop using break or continue.

*/

// example2:-

const coding =  ["js", "rb", "py", "java", "cpp"]

// coding.forEach((item)=>console.log(item))

// or

// coding.forEach(function(item){
//     console.log(item)
// })

// or

// coding.forEach((item)=>{
//     console.log(item)
// })

// or

function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)

/*forEach() can accepts item , index and also the array as an paremeter. */

// example:-

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

/*op:-

js 0 [ 'js', 'rb', 'py', 'java', 'cpp' ]
rb 1 [ 'js', 'rb', 'py', 'java', 'cpp' ]
py 2 [ 'js', 'rb', 'py', 'java', 'cpp' ]
java 3 [ 'js', 'rb', 'py', 'java', 'cpp' ]
cpp 4 [ 'js', 'rb', 'py', 'java', 'cpp' ]

*/


// access the array of objects by using forEach()

const languages = [
    {
        languagename:"Python",
        languagefilename:"py"
    },
    {
        languagename:"Java",
        languagefilename:"java"
    },
    {
        languagename:"JavaScript",
        languagefilename:"Js"
    },
]

// console.log(languages)

languages.forEach( (item) => {
    for(let key in item){
        // console.log(item[key])
    }
})

// if we want single value then..... the code is

languages.forEach( (item) => {
    // console.log(item.languagename)
})

// forEach() won't return anything it return undefined for example..

const datas = languages.forEach( (item) => {
    // console.log(item)
    return item
})

// console.log(datas)



/*
filter() in JavaScript

Definition:

filter() is an array method used to create a new array containing only the elements that satisfy a given condition.

Example
let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter(function(num) {
    return num > 20;
});

console.log(result);

Output: [25, 30]

Here, filter() checks each element:

10 > 20 → false ❌
15 > 20 → false ❌
20 > 20 → false ❌
25 > 20 → true ✅
30 > 20 → true ✅

So, only [25, 30] is returned.

Using arrow function
let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter(num => num > 20);
console.log(result);

Important points:-

filter() works mainly with arrays.
It checks every element.
It returns a new array.
The original array is not changed.
If no elements satisfy the condition, it returns an empty array [].

*/

// example:-

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums)

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// console.log(newNums)  //op:- [ 5, 6, 7, 8, 9, 10 ]

// by using forEach

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

// console.log(newNums) // op:-[ 5, 6, 7, 8, 9, 10 ]



// example2:-

const books = [
    {
        title:"Book One", genre:"Fiction",publish:1981, edition:2004
    },
    {
        title:"Book Two", genre:"Non-Friction",publish:1992, edition:2008
    },
    {
        title:"Book Three", genre:"Fiction",publish:1999, edition:2007
    },
    {
        title:"Book Four", genre:"History",publish:2001, edition:2010
    },
    {
        title:"Book Five", genre:"Science",publish:2009, edition:2014
    },
    {
        title:"Book Six", genre:"History",publish:1987, edition:2010
    },
    {
        title:"Book Seven", genre:"Friction",publish:1986, edition:1996
    },
    {
        title:"Book Eight", genre:"Science",publish:2011, edition:2016
    },
    {
        title:"Book Nine", genre:"Non-Friction",publish:1981, edition:1989
    },
    
]


// const userBooks = books.filter( (bk) => bk.genre === "History" )

// console.log(userBooks)

const userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "History"
})
// console.log(userBooks)



/*

map() in JavaScript

Definition:

map() is an array method that creates a new array by transforming each element of the original array using a callback function.

Example
let numbers = [1, 2, 3, 4];

let result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);

Output: [2, 4, 6, 8]

Here, map() takes each element and changes it according to the given operation:

1 × 2 → 2
2 × 2 → 4
3 × 2 → 6
4 × 2 → 8

Using arrow function
let numbers = [1, 2, 3, 4];

let result = numbers.map(num => num * 2);
console.log(result);


Important points:-

map() works with arrays.
It executes a function for each element.
It returns a new array.
The original array is not changed.
The returned array normally has the same number of elements as the original array.

forEach() vs map() vs filter()

Method	    Main purpose	      Returns
forEach()	Perform an action	  undefined
map()	    Transform elements	  New array
filter()	Select elements	      New array

*/

// example:-

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumbers.map( (num) => num + 10)

// const newNUm = myNumbers.map((num) => {
//     return num * 2
// })
// console.log(newNUm)


// chaining means at a time we can use map() , filter() , another map() etc....

const newNum = myNumbers
.map( (num) => num + 10)
.map( (num) => num + 1)
.filter((num) => {
    return num % 2 === 0
})

// console.log(newNum)


/*
reduce() in JavaScript

Definition:

reduce() is an array method that executes a callback for each element and perform some operation on that array values and return exactly single final value.

The single value can be a number, string, object, array, or any other value.

Example
let numbers = [10, 20, 30, 40];

let result = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(result);

Output: 100

How it works:-

total    num    result
  0       10      10
 10       20      30
 30       30      60
 60       40     100

Here:

total → accumulator that stores the result
num → current array element
0 → initial value of total

Using arrow function
let numbers = [10, 20, 30, 40];

let result = numbers.reduce((total, num) => total + num, 0);
console.log(result);

Another example — find the product
let numbers = [2, 3, 4];

let result = numbers.reduce((total, num) => total * num, 1);console.log(result);

Output: 24

Important points:-

reduce() processes each element.
It returns one final value.
It uses an accumulator to store the result.
It does not normally change the original array.
The second argument is the initial value of the accumulator.
Easy difference

forEach() → perform an action
map() → transform every element
filter() → select elements
reduce() → combine elements into one result

(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)

*/

// example:-

const myNumber = [1, 2, 3]

const myTotal = myNumber.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval:${currval}`)
    return acc + currval
},0)

console.log(myTotal) 

/* op:-

acc:0 and currval:1
acc:1 and currval:2
acc:3 and currval:3
6

*/


// by using arrow function

const myTotals = myNumber.reduce( (acc,currval) => acc + currval, 0)

console.log(myTotals);  //op:- 6


// reduce using in array of objects

const shopingCart = [
    {
        itemName:"js Course",
        price:2999
    },
    {
        itemName:"js Course",
        price:2999
    },
    {
        itemName:"Python Course",
        price:1999
    },
    {
        itemName:"Mobile Dev Course",
        price:5999
    },
    {
        itemName:"Data science Course",
        price:4999
    },
]

// const priceToPay = shopingCart.reduce( (acc,item) =>{
//     return acc + item.price 
// },0)

// console.log(priceToPay)

const priceToPay = shopingCart.reduce( (totalPrice, item) => totalPrice + item.price, 0)

console.log(priceToPay)  //op:- 18995

const myPrice = shopingCart.filter( (item) => {
    return item.price > 2000;
})

console.log(myPrice)










