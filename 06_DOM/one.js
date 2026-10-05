/*

DOM — Detailed Explanation
1. What is DOM?

DOM stands for Document Object Model.

The DOM is a programming interface created by the browser that represents an HTML document as a tree of objects, allowing JavaScript to access, modify, add, or remove HTML elements and their content.

2. Why do we need DOM?
HTML creates the structure of a webpage.
CSS controls the appearance.
JavaScript controls the behavior and changes.


For example:

<h1 id="title">Hello</h1>
<button onclick="changeText()">Click</button>

JavaScript can access the <h1> through the DOM and change it:

function changeText() {
    document.getElementById("title").textContent = "Hello Rajesh";
}

When the button is clicked, the text changes.


3. How does the DOM work?
Suppose we have:

<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>

<body>
    <h1>Hello</h1>
    <p>Welcome</p>
</body>
</html>

The browser converts this HTML into a tree-like structure:

Document
   |
   └── html
       |
       ├── head
       |    |
       |    └── title
       |
       └── body
            |
            ├── h1
            |    └── "Hello"
            |
            └── p
                 └── "Welcome"

This is called the DOM tree.


4. What is document?
document is the main object that represents the webpage loaded in the browser.

For example:

console.log(document);

Using document, JavaScript can access HTML elements.

document.getElementById("title");


5. Selecting elements

1.getElementById()
Selects an element using its id.

let heading = document.getElementById("title");



2.getElementsByClassName()
Selects elements using a class name.

let items = document.getElementsByClassName("item");


3.getElementsByTagName()
Selects elements using their tag name.

let paragraphs = document.getElementsByTagName("p");


4.querySelector()
Selects the first matching element.

let heading = document.querySelector("#title");

You can use CSS selectors:

document.querySelector(".item");
document.querySelector("p");
document.querySelector("#title");


5.querySelectorAll()
Selects all matching elements.

let items = document.querySelectorAll(".item");


6. Changing content

1.textContent:-
Changes or gets text content.

document.getElementById("title").textContent = "Welcome";

2.innerHTML:-
Changes or gets HTML content.

document.getElementById("box").innerHTML = "<b>Hello</b>";

Important difference:

element.textContent = "<b>Hello</b>";

Displays: <b>Hello</b>

But:

element.innerHTML = "<b>Hello</b>";

Displays: Hello

because the browser interprets <b> as HTML.


7. Changing CSS:-
-----------------
JavaScript can also change styles.

let heading = document.getElementById("title");

heading.style.color = "red";
heading.style.fontSize = "30px";


8. Changing attributes:-
------------------------
HTML: <img id="photo" src="old.jpg">

JavaScript:

let image = document.getElementById("photo");

image.setAttribute("src", "new.jpg");

You can also get an attribute:
image.getAttribute("src");

Remove an attribute:
image.removeAttribute("src");


9. Creating elements:-
-----------------------
JavaScript can create new HTML elements.

let p = document.createElement("p");

p.textContent = "Hello Rajesh";

document.body.appendChild(p);

This creates: <p>Hello Rajesh</p>

and adds it to the body.


10. Removing elements:-
-------------------------
let element = document.getElementById("title");

element.remove();

The element will be removed from the webpage.


11. DOM Events:-
-----------------
Events are actions that happen on a webpage.

Examples:

click
mouseover
mouseout
keydown
keyup
submit
change
input
load

Example:

let button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log("Button clicked");
});

When the button is clicked, the function runs.


12. Event Listener:-
---------------------
addEventListener() is commonly used to handle events.

element.addEventListener("event", function() {
    // code
});

Example:

button.addEventListener("click", () => {
    alert("Hello");
});

Here:

button → element
"click" → event
arrow function → callback that runs when the event happens


13. DOM Traversing:-
-----------------------
DOM traversal means moving from one element to another through the DOM tree.

Important properties:

parentElement :- gets the parent.
---------------------------------
element.parentElement;


Gets child elements:-children
---------------------
element.children;


Gets the first child element:-firstElementChild
-----------------------------
element.firstElementChild;


Gets the last child element:-lastElementChild
----------------------------
element.lastElementChild;


Gets the next sibling:-nextElementSibling
-----------------------
element.nextElementSibling;


Gets the previous sibling.:-previousElementSibling
-------------------------
element.previousElementSibling;



14. DOM Manipulation
DOM manipulation means changing the webpage using JavaScript.

It includes:

Select elements
     ↓
Change content
     ↓
Change styles
     ↓
Change attributes
     ↓
Create elements
     ↓
Remove elements
     ↓
Handle events

Example:

let heading = document.querySelector("h1");

heading.textContent = "Welcome";
heading.style.color = "blue";


15. DOM vs HTML:-
---------------
This is important for interviews.

HTML:-
------------
HTML is the source code/structure that you write.

<h1>Hello</h1>


DOM:-
----------
DOM is the object/tree representation of that HTML created by the browser.

JavaScript interacts with the DOM to change the webpage.


16. DOM vs BOM:-
----------------
Another common interview question.

DOM:-
--------
Deals with the webpage/document.

document

Examples:

document.getElementById()
document.querySelector()


BOM:-
--------
BOM stands for Browser Object Model.

It deals with the browser window/environment.

Examples:

window
location
history
navigator
screen

Example:
console.log(window.innerWidth);


17. Most important DOM methods to remember
------------------------------------------
Method	                         Purpose

getElementById()	            Select by ID
getElementsByClassName()	   Select by class
getElementsByTagName()	        Select by tag
querySelector()	          Select first matching element
querySelectorAll()	       Select all matching elements
createElement()	                 Create element
appendChild()	                    Add child
remove()	                       Remove element
setAttribute()	                    Set attribute
getAttribute()	                    Get attribute
removeAttribute()	               Remove attribute
addEventListener()                 Handle events


Interview definition:-
--------------------------
DOM stands for Document Object Model. It represents an HTML document as a tree of objects and allows JavaScript to access, modify, create, and remove elements and handle events on a webpage.
*/


// DOM manipulation

    const title = document.getElementById("title")
    title.style.color = "seagreen"
    title.style.backgroundColor = "orange"
    title.style.padding = "15px"
    title.style.borderRadius = "15px"

    // id for check what id having the h1 tag
    document.getElementById("title").id

    //className for check what className does have the h1 tag
    document.getElementById("title").className

    /* it will use to check the attribute and based on the attribute name we get the value . */
    document.getElementById("title").getAttribute("class")

    /*setAttribute  is used to set the attribute name. */
    document.getElementById("title").setAttribute("class","text")

// how to get the contents from our html tags here is the example

/* 1.textContent:-
-----------------
it is used to show all the content on the UI, it means hide and unhide data also it will showing. */

// example:-

console.log(title.textContent)

/* op:- Dom learning  with me become easy for you  */


/* 2.innerHTML:-
------------------
it will give the entire structure of the code as it is. */

// example:-  

console.log(title.innerHTML)

/*op:- Dom learning  with me <span style="display: none;">become easy for you</span>

*/
    

/* 3.innerText:-
-----------------
it will returns only the visible codes.  */

// example:-

console.log(title.innerText)

// op:- Dom learning with me



/* querySelector() and querySelectorAll() — Detailed Explanation
Both are DOM methods used to select HTML elements using CSS selectors. */

/*

1.querySelector():-
---------------------
it will returns the first matching element.  */

console.log(document.querySelector("#title") );
//# this is for id

console.log(document.querySelector(".heading") );
//. this is for class

console.log(document.querySelector('input[type="password"]'));


console.log(document.querySelector("p:first-child"))


const myul = document.querySelector("ul")
console.log(myul)

const turnGreen = myul.querySelector("li")
turnGreen.style.color = "green"
turnGreen.padding = "10px"
turnGreen.innerText = "Banana"
turnGreen.style.backgroundColor = "gray"


/*

2.querySelectorAll():-
-----------------------
querySelectorAll() is a DOM method that selects and returns all elements that match the given CSS selector. and returns them as a NodeList.

A NodeList is a collection of DOM nodes returned by some DOM methods, such as querySelectorAll().

NodeList contains each and every node such as element node, attribute node, test node, comment node etc.

Inside HTML document each and everything is considered as a node.

the NodeList is looks like an Array but actually it doesn't, but we can convert it into an Array.

*/

// example:-

const tempLiList = document.querySelectorAll("ul")
// console.log(tempLiList);

// tempLiList.style.color="green"  
// // this code will raise error because there are multiple "li" which one do we want that is why it confuse , so we have to give the index value like this below example.....

// tempLiList[0].style.color = "red"  
//this code work

const myH1 = document.querySelectorAll("h1")
// myH1.style.color = "orange"

myH1[0].style.color = "black"

/* this code also raised error because we used there querySelectorAll() so when ever we want to access anything or styling anything you have to make sure about index , look at the code there has only one "h1" tag also you have to provide the index , otherwise it will be raised error. */


// here we can access the NodeList items by using forEach() , because its already present in it.

// example:-

tempLiList.forEach( (ele) => {
    ele.style.color = "blue"
})


/*
3.getElementsByClassName():-
----------------------------
Definition:-
getElementsByClassName() is a DOM method used to select all HTML elements that have a specific class name.

It returns an HTMLCollection. it means....

An HTMLCollection is a collection of HTML elements returned by DOM methods such as getElementsByClassName() and getElementsByTagName().

Example
<p class="item">Apple</p>
<p class="item">Banana</p>
<p class="item">Mango</p>
let items = document.getElementsByClassName("item");

console.log(items);

Output: HTMLCollection(3)

It contains all three <p> elements.

Access individual elements

console.log(items[0]); // Apple
console.log(items[1]); // Banana
console.log(items[2]); // Mango

You can also check the number of elements:

console.log(items.length);

Output: 3

Important: Don't use .

With querySelector():

document.querySelector(".item");

But with getElementsByClassName():

document.getElementsByClassName("item");

You give only the class name, without ..

Multiple classes

You can select elements that have both classes:

<div class="box active">One</div>
<div class="box">Two</div>
<div class="box active">Three</div>
let elements = document.getElementsByClassName("box active");

This selects only:

One
Three

Important point: HTMLCollection is live

let items = document.getElementsByClassName("item");

console.log(items.length); // 2

If another element with class item is added to the DOM, the collection automatically reflects the change.

That's why we call it a live HTMLCollection.

getElementsByClassName() vs querySelectorAll()
	
Selection Class name	       Any CSS selector
Return type	HTMLCollection	     NodeList
Multiple elements Yes	            Yes
Collection	 Live	                Static
Syntax	"item"	                   ".item"


Interview definition:-
--------------------
getElementsByClassName() is a DOM method that returns all HTML elements having the specified class name as a live HTMLCollection.

*/


const items = document.getElementsByClassName("list-item")
console.log(items)

/*it returns a HTMLCollection , it looks like an array but it doesn't , in the querySelectorAll() ther forEach present but here not , so to access the elements we have to convert it into an Array. below example... */

// example:-

const itemList = Array.from(items)
console.log(itemList)

// now it has converted into an array. so we can use the array methods

// example:-

itemList.forEach((ele) => {
    ele.style.color = "seagreen"
    ele.style.fontSize = '20px'
    ele.style.fontFamily = "Arial"
})


//also we can access the elements like this....and styling.

console.log(items[0].style.color = "green")
console.log(items[1].style.color = "red")
console.log(items[2].style.color = "blue")
