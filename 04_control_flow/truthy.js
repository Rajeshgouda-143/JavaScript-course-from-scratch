const userEmail = "rajesh@gmail.com"

if (userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
    
}

/* look at the above code there we didn't mention any true and false statement also it will run the if statement because we have a data in the userEmail, so it treated like a truthy value , now looked at the below code  */

const userGmail = ""

if (userGmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// op:- Don't have user email

/* here in this code we use one empty "" string that is a falsy value in javascript so it will print the else statement block  */


const userGmails = []

if (userGmails){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// op:- Got user email

// here all truthy and falsy value :- 

// 1. Falsy value:-

//( false, 0, -0, BigInt, 0n, "", null, undefined, NaN )

// 2.truthy value:-

//("0", "false", " ", [], {}, function(){})


if (userGmail.length === 0){
    console.log("Array is empty");
}

//for object

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object key is empty");
    
}


//Nullish Coalescing Operator (??): specially for (null, undefined)


// example:-

let val1;
val1 = 5 ?? 10

console.log(val1) // op:- 5

// example2:-

let val2;
val2 = null ?? 10

console.log(val2);  // op:- 10


let val3;
val3 = undefined ?? 15

console.log(val3);  // op:- 15


//look at the above codes first one is print 5 and second one is print 10 , and third one print 15 why because ?? operator especially prevents the null and undefined.

//look at here

let var4;
var4 = null ?? 10 ?? 20

console.log(var4);  // op:- 10

/* so the conclusion is after the null or undefined if the variable find any value it will considers as that variables value  and return., and it don't go for next */


/* Terniary operator :  
----------------------------
(instead og if and else we use this)

 syntax is : - condition ? true : false */

//  example: -

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

// op:- more than 80










