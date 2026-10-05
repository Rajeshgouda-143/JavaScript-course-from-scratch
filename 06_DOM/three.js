// How to create a new element by using JavaScript

// answer:- by using createElement()

/* 
createElement() in JavaScript:-
------------------------------
Definition:-
------------
createElement() is a DOM method used to create a new HTML element dynamically using JavaScript.

It creates the element in memory, but does not automatically add it to the webpage. To add it to the page, we usually use methods like appendChild() or append().

Basic Example:-
---------------
let paragraph = document.createElement("p");
paragraph.textContent = "Hello Rajesh";
document.body.appendChild(paragraph);


What happens here?

Step 1 — Create the element

let paragraph = document.createElement("p");

Creates:

<p></p>

But it is not yet visible on the webpage.

Step 2 — Add content

paragraph.textContent = "Hello Rajesh";

Now it becomes:

<p>Hello Rajesh</p>

Step 3 — Add it to the webpage

document.body.appendChild(paragraph);

Now the paragraph appears on the webpage.

Creating a div
--------------
let box = document.createElement("div");

box.textContent = "This is a new box";
document.body.appendChild(box);

Adding a class
---------------
let box = document.createElement("div");

box.className = "container";
box.textContent = "Hello";
document.body.appendChild(box);

Creates:
-----------
<div class="container">Hello</div>

Adding an attribute
----------------------
let image = document.createElement("img");

image.setAttribute("src", "photo.jpg");
image.setAttribute("alt", "My Photo");

document.body.appendChild(image);

Creates:
---------
<img src="photo.jpg" alt="My Photo">

Important difference
---------------------
document.createElement("p");
Creates the element.

document.body.appendChild(paragraph);
Adds the element to the webpage.

So remember:
------------
createElement() → create an element
appendChild() → add the element to the DOM

Interview definition
--------------------
createElement() is a DOM method used to create a new HTML element dynamically. The created element can then be modified and added to the webpage using DOM methods.

*/


const div = document.createElement("div")
console.log(div)

div.className = "main"
div.id = "main-box"
div.setAttribute("title", "generate title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
// div.innerHTML = "This is my first box"
const addText = document.createTextNode("This is my first box")
div.appendChild(addText)

document.body.appendChild(div)

//

/*
We use createTextNode() when we want to add text safely without interpreting HTML tags. It is especially useful for untrusted user input. innerHTML should be used when we intentionally want to create or insert HTML content.

*/

// Why use createTextNode()?
// 1. It treats content as plain text

// Suppose the user provides:

let userInput = "<h1>Hello</h1>";
const para = document.createElement("p")

// With innerHTML:
para.innerHTML = userInput; 
document.body.appendChild(para) 

// display:- Hello 
// The browser interprets <h1> as HTML.

// But with createTextNode():
para.appendChild(document.createTextNode(userInput));

// It displays: <h1>Hello</h1>  ... means as it is it will print



/* Here in this code we create a language by using a function and we can use it whenever we want lets see.. the code */


//this is basic way
function addLanguage(language){
    const li = document.createElement("li")
    li.innerHTML = `${language}`
    const addLang = document.querySelector(".language")
    addLang.appendChild(li)
}
addLanguage("Python")
addLanguage("Java")
addLanguage("React")


//this is optimized way to add

function addOptiLanguage(language){
    const li = document.createElement("li")
    const addLang = document.createTextNode(language)
    li.appendChild(addLang)
    const lang = document.querySelector(".language")
    lang.appendChild(li)
}
addOptiLanguage("Ruby")
addOptiLanguage("SQL")


// Edit like remove , update etc...

const secondLang = document.querySelector("li:nth-child(2)")

//first way:
// secondLang.innerHTML = "Mojo"

//second way:
const newLi = document.createElement("li")
newLi.textContent = "Mojo"
secondLang.replaceWith(newLi)


//example3:-

const firstLang = document.querySelector("li:first-child")
const newLang = document.createElement("li")
newLang.textContent = "TypeScript"
firstLang.replaceWith(newLang)

/*third way to change:
-----------------------  */
const thirdLang = document.querySelector("li:nth-child(3)")
thirdLang.outerHTML = "<li>Django</li>"


//  remove

const lastLang = document.querySelector("li:last-child")
lastLang.remove()  // SQL removed


/*

replaceWith() in JavaScript:
----------------------------
Definition:
-----------
replaceWith() is a DOM method used to replace an existing HTML element with another element or content.

In simple words:
--------------
It removes the selected element and puts a new element or content in its place.

Example

HTML:

<p id="message">Hello</p>

JavaScript:

let oldElement = document.getElementById("message");

let newElement = document.createElement("h1");
newElement.textContent = "Welcome";

oldElement.replaceWith(newElement);

Before:

<p id="message">Hello</p>

After:

<h1>Welcome</h1>

The <p> element is removed and <h1> takes its place.

You can also replace it with text
let paragraph = document.querySelector("p");

paragraph.replaceWith("Hello Rajesh");

The original <p> is replaced with text.

You can replace it with another existing element

let first = document.querySelector("#first");
let second = document.querySelector("#second");

first.replaceWith(second);

The first element is replaced by second.

replaceWith() vs remove()

element.remove();

➡️ Removes the element completely.

element.replaceWith(newElement);

➡️ Removes the old element and puts another element/content in its place.

Interview definition

replaceWith() is a DOM method used to replace an existing element with a new element or other content.

*/











