// 'this' keyword specially used to refer to the current context value.

// example:-

const user = {
    username:"rajesh",
    price: 999,

    welcomeMsg : function(){
        console.log(`${this.username} welcome to website `)
        console.log(this)  // it return the current object
    }
}

user.welcomeMsg // it won't print anything because we didn't called it yet.

user.welcomeMsg()
user.username = "rajesh gouda"
user.welcomeMsg()

console.log(this) // it return empty object  {} if we try to print outside.


// if we try to excess the value without this keyword it will raised error like ReferenceError: username is not defined


/*Mainly "this" keyword is almost used for the Objects , instead of Object if we try to excess the variable then it will return undefined.  */

// example:-

function demo(){
    let myName = "rajesh"

    console.log(this.myName)
}

demo()  // op:- undefined

// if we try it in An object then see the result

const User = {
    myName: "rajesh",

    demo: function() {
        console.log(this.myName);  // rajesh
    }
};

User.demo();



// Arrow function and this keyword

const sample = () =>{
    let username = "rajesh"
    console.log(this.username);  //undefined
    console.log(this) // {}
    
}

sample()


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4,5))  //9

// or  eplicity return

// const addTwos = (num1, num2) => num1 + num2
// const addTwos = (num1, num2) => (num1 + num2)
// const addTwos = (num1, num2) => {name:"rajesh"}  // op:-
// undefined 
const addTwos = (num1, num2) => ({name:"rajesh"})  // op:-{name:"rajesh"}



// here one important point if we keep the value inside the parenthesis () then there is no need to use return keyword, if we use {} curly braces then should use return keyword.

console.log(addTwos(6,7));  // 13


// by using forEach()

const myArr = [2, 3, 4, 5, 6, 7]

myArr.forEach((item)=>{
    setTimeout(()=>{
        console.log(item)
    },1000)
})


/*


1. Normal function + this

const user = {
    name: "Rajesh",

    greet: function() {
        console.log(this.name);
    }
};

user.greet(); // Rajesh

Here:

this === user

Because the function is called like:

user.greet();

So this refers to the object that called the function.


2. Arrow function + this

Now change it to an arrow function:

const user = {
    name: "Rajesh",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();

This does not give "Rajesh".

Why?

Because:

Arrow functions do not have their own this.

They take this from their surrounding/outer scope.

So even though we call:

user.greet();

the arrow function does not make this equal to user.

3. Very simple comparison

Normal function:

const user = {
    name: "Rajesh",
    greet: function() {
        console.log(this.name);
    }
};

user.greet(); // Rajesh

Arrow function:

const user = {
    name: "Rajesh",
    greet: () => {
        console.log(this.name);
    }
};

user.greet(); // undefined
Why?

Think like this:

Normal function
      ↓
has its own `this`
      ↓
depends on HOW it is called


Arrow function
      ↓
does NOT have its own `this`
      ↓
takes `this` from OUTER scope


4. Where arrow functions are very useful

Arrow functions are especially useful inside callbacks:

const user = {
    name: "Rajesh",

    showName: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

user.showName();

Output: Rajesh

Here the arrow function gets this from showName()'s surrounding context.

Interview answer

Arrow functions don't have their own this. They inherit this from their surrounding lexical scope, while a normal function's this depends on how the function is called.

Easy memory:

Normal function → own `this`
Arrow function  → takes `this` from outside

*/

// defination:- actually the arrow function does not have their own "this" so it inherit "this" from its surrounding lexical scope.

// example:-

const myUser = {
    username : "rajesh",

    showMyName: function(){
        setTimeout(() => {
            console.log(this.username); // rajesh
        },2000)
    }
}

myUser.showMyName()

// So in this code the arrow function can use the "this" keyword from its lexical or outer scope.








