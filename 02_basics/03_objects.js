// Objects

const mySym = Symbol("key1");

const jsUser = {
    name:"rajesh",
    "full name":"rajesh gouda",
    [mySym]:"mykeys1",
    age:23,
    location:"odisha",
    email:"rajesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]    
}

//there are two ways to access the properties from an object. by using (.) dot notation and braket notation [].

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser['full name']) // here without square notation we can't access the properties because in the full name were an gap between them.

// console.log(jsUser[mySym]);

/* important: whenever we want to declare a Symbol() inside an Object directly it won't possible we have to declare first outside the object, then we give the variable inside a square bracket [] of an object, then only we can access the Symbol . */


jsUser.email = "rajesh@gmail.com"
// Object.freeze(jsUser)  // it won't allow to modify the value of an object
// jsUser.email = "rajesh@gpt.com"
// console.log(jsUser);


// function inside object

jsUser.greetting = function(){
    // console.log("hello js user");
}

// console.log(jsUser.greetting); // [Function (anonymous)]

// console.log(jsUser.greetting()) // hello js user
// undefined


jsUser.greettingTwo = function(){
    // console.log(`hello js user, ${this.name}`);
}

// console.log(jsUser.greettingTwo());
// console.log(jsUser.greetting());


// const tinderUser = new Object() // Singleton object

const tinderUsers = {} //non singleton object

tinderUsers.id = "123abc"
tinderUsers.name = "Rocky"
tinderUsers.name = "rahul" // it wil update from rocky to rahul
tinderUsers.isLoggedIn = false

// console.log(tinderUsers)

// console.log(tinderUser);  // op:- {}
// console.log(tinderUsers); //op:- {}

// console.log(tinderUser == tinderUsers)  // false
// console.log(tinderUser === tinderUsers) // false

const regularUser = {
    email:"dibyansh@gmail.com",
    fullname: {
        userfullname:{
            firstname:"dibyansh",
            lastname:"meher"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


// to merge the object

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

let obj3 = {obj1 , obj2}; // if we try to merge the object in this way then it will merge the object as it is like there are two object. 

// console.log(obj3);
// op:- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

let obj4 = {...obj1, ...obj2}
// console.log(obj4);


let obj5 = Object.assign({}, obj1,obj2)
// console.log(obj5);

/*
The empty object {} in Object.assign({}, obj1, obj2) is used as the target object so that properties are copied into a new object without modifying the original objects.

it is not mandotory but it is good to use because it has create a new object.
*/


// most of the time we will get the data like this format

const Users =[
    {
        1:"a",
        2:"b"
    },
    {
        1:"a",
        2:"b"
    },
    {
        1:"a",
        2:"b"
    },
    {
        1:"a",
        2:"b"
    },
    {
        1:"a",
        2:"b"
    },
]

console.log(Users[1][1]) // a

console.log(Object.keys(tinderUsers))
console.log(Object.entries(tinderUsers))
console.log(Object.values(tinderUsers))

console.log(tinderUsers.hasOwnProperty("isLoggedIn"))  // to check the particular property is present or not in the object.

// access the key and value through looping.

for(let [key,value] of Object.entries(tinderUsers)){
    console.log(key, value)
}


// Objects destructuring and JSON API

const course = {
    coursename:"Data Analyst",
    price:999,
    courseInstructor:"rajesh"
}

// access the data by using destructuring

const {courseInstructor} = course;
console.log(courseInstructor);      // op:-  rajesh

// suppose we have a big name and we want to make it small then we can also give the alternative name to the value for example

const {courseInstructor:instructor} = course;
console.log(instructor);  // op:-  rajesh


// if you want to understand the api perfectly we use one tool called JSON formater.















 
