//Stack and Heap Memory

/* Stack memory used in all primitive datatypes.
whenever we use stack memory while declare a varible we will get a copy of this*/

//Heap memory used in all non-primitive datatypes
/* whenever we declare a variable or object in Heap memory it will take the references to the original value , it means whenever we change he reference value it will affect the original value.
*/

// ex:- Stack Memory

let myProjectName = "FoodiApplication";

let anotherName = myProjectName
console.log(anotherName);


/* in this above code it will return the same FoodiApplication */

// but what if we update the anotherName

anotherName = "FoodDeliveryApp";

console.log(anotherName);  //FoodDeliveryApp
console.log(myProjectName); //FoodiApplication

/* Now after update the copy variable it did not affected to the original value, the original value has as it is but the copy value has been changed from FoodiApplication to FoodDeliveryApp.  So the Stack memory will not affect the original value it will only copy from the original.  */


// ex:- Heap Memory

let userOne = {
    email:"user@google.com",
    phno:1234567890
}

let userTwo = userOne;

userTwo.email = "rajesh@google.com";

console.log(userTwo); 
// op:- { email: 'rajesh@google.com', phno: 1234567890 }

console.log(userOne);
// op:- { email: 'rajesh@google.com', phno: 1234567890 }

/* look at here whenever we trying to modify the reference value it will also affect to the original value the both userOne and userTwo has the same output , so that's how the Heap Memory work . */





