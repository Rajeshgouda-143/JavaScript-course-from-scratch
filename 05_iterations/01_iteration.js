// Iteration or loops

/* 1. for loop:-
It is used to execute some setup instructions for "n" no.of times.

The for loop repeatedly executes a block of code while its condition remains true, with initialization, condition checking, and updating handled in its loop structure.  */

/* syntax:-

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/

/* Structure:

for (initialization; condition; update) {
    // code
}

*/

// Execution:-

/* initialization
      ↓
condition
      ↓
execute body
      ↓
update
      ↓
condition again

*/

// example1:-

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

/* this is not for the for loop to select the same value at the same time we use the command ctrl + d , just point to the cursore there and press the ctrl + d thats it.  */


for (let index = 0; index < 10; index++) {
    const element = index;
    
    if(element === 5){
        // console.log("5 is the best number"); 
    }
    // console.log(element);
    
}

// Nested for loop conclusion

for ( let i = 0 ; i<=10; i++){
    // console.log("outer value:",i);

    for (let j=0; j<=10; j++){
        // console.log(`Inner value ${j} of outer value ${i}`, );
        
    }
    
}


/* here in this code the inner for loop is execute 10 times per value of the outer loop  */

/* op:-

outer value: 0
Inner value 0 of outer value 0
Inner value 1 of outer value 0
Inner value 2 of outer value 0
Inner value 3 of outer value 0
Inner value 4 of outer value 0
Inner value 5 of outer value 0
Inner value 6 of outer value 0
Inner value 7 of outer value 0
Inner value 8 of outer value 0
Inner value 9 of outer value 0
Inner value 10 of outer value 0

like this again for value 1 then 2 , 3.... upto 10.
*/

// Multiplication table

for (let i = 1; i<=10; i++){
    // console.log(`Table of ${i}`);

    for (let j = 1; j<=10; j++){
        // console.log(`${i} * ${j} = ${i*j}`);   
    }  
}


// By using for loop in array

let myArr = ["flash", "batman", "superman"]

for (let i=0; i < myArr.length;i++){
    const element = myArr[i]

    // console.log(element); 
}

/* by using for...of loop

Definition:-
The for...of loop iterates over the values produced by an iterable object, such as an array or string. 

syntax:-

for (const element of object) {
    
}

*/
// example:-
const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);       
}

// example:-
let myHeros = ["flash", "batman", "superman", "spiderman", "saktiman"]

for(let hero of myHeros){
    // console.log(hero); 
}

/* by using for...in loop

Definition
The for...in loop iterates over the enumerable property keys of an object. it means it returns both index as well as elements  

syntax:-

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}
    
*/



let myHero = ["flash", "batman", "superman", "spiderman", "saktiman"]

for(let hero in myHero){
    // console.log(myHero[hero])
}

// for objects

const user = {
    name:"rajesh kumar",
    age:23
}

for(let data in user){
    // console.log(data)
}

// op:- name age

// if you want the values

for( let value in user){
    // console.log(user[value]);  
}

// op:- rajesh kumar 30


// break and continue 

/* 1.break:
The break statement immediately terminates the nearest enclosing loop or switch statement.

it doesn't return anything we specially used it for inside the looping statement  */

// example:-

for( let i = 1; i <= 20; i++){
    if(i === 5){
        // console.log(`Detected 5`)
        break
    }
    // console.log(`Value of i is ${i}`)
}

/*2.continue:-
The continue statement skips the current value loop iteration and proceeds to the next iteration.  */


// example:-

for( let i = 1; i <= 20; i++){
    if(i === 5){
        // console.log(`Detected 5`)
        continue
    }
    // console.log(`Value of i is ${i}`)
}


// see here it skip the 5 and start with again from 6.




