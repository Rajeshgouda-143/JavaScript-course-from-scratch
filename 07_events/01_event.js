
/*
JavaScript Events — Detailed Explanation:-
-----------------------------------------
1. What is an Event?
--------------------

An event is an action or occurrence that happens in a webpage, such as a mouse click, keyboard press, form submission, or page loading. JavaScript can detect these events and execute a function in response.

For example, when a user clicks a button:

button.addEventListener("click", function() {
    console.log("Button clicked");
});

Here:

click → event
function() { ... } → event handler
addEventListener() → attaches the handler to the event


2. What is addEventListener():-
------------------------------
Definition:-
-----------
addEventListener() is a DOM method used to attach a function to an event so that the function runs when that event occurs.

Syntax:-
-------
element.addEventListener(event, function, options);

Example:

let button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log("Button clicked");
});

The third argument is optional.

element.addEventListener("click", handler, true);

or:

element.addEventListener("click", handler, false);

We'll understand true and `false shortly.

3. Mouse Events:-
----------------
click:-
-------
Occurs when the user clicks an element.

button.addEventListener("click", function() {
    console.log("Clicked");
});

Use: Buttons, links, menus, etc.

dblclick:-
----------
Occurs when the user double-clicks an element.

button.addEventListener("dblclick", function() {
    console.log("Double clicked");
});

Use: Actions that require a double click.

mousedown:-
----------
Occurs when the mouse button is pressed down.

element.addEventListener("mousedown", function() {
    console.log("Mouse button pressed");
});


mouseup:-
-------
Occurs when the mouse button is released.

element.addEventListener("mouseup", function() {
    console.log("Mouse button released");
});


Difference
-----------
mousedown → press
mouseup   → release
click     → press + release

mousemove:-
----------
Occurs when the mouse pointer moves over an element.

element.addEventListener("mousemove", function() {
    console.log("Mouse moving");
});

Be careful: this can fire many times, so don't perform heavy operations unnecessarily.

mouseenter:-
-----------
Occurs when the mouse pointer enters an element.

element.addEventListener("mouseenter", function() {
    console.log("Mouse entered");
});


mouseleave:-
----------
Occurs when the mouse pointer leaves an element.

element.addEventListener("mouseleave", function() {
    console.log("Mouse left");
});

Commonly used for hover effects.

mouseover:-
----------
Occurs when the pointer moves onto an element or one of its descendants.

element.addEventListener("mouseover", function() {
    console.log("Mouse over");
});

mouseenter vs mouseover

mouseenter does not bubble.
mouseover does bubble.

For basic hover behavior, mouseenter/mouseleave are often easier because moving between child elements doesn't repeatedly trigger them in the same way.


4. Keyboard Events:-
------------------
There are mainly two important keyboard events.

keydown:-
--------
Occurs when a key is pressed down.

document.addEventListener("keydown", function(event) {
    console.log(event.key);
});

If you press A:

a

If you press Enter: Enter


keyup:-
------
Occurs when a pressed key is released.

document.addEventListener("keyup", function(event) {
    console.log(event.key);
});

keydown vs keyup
----------------
Press key
   ↓
keydown
   ↓
Release key
   ↓
keyup

What about keypress?

keypress is an old/deprecated event and should generally not be used in modern JavaScript. Prefer keydown or keyup.

5. Form Events:-
--------------
submit:-
-------
Occurs when a form is submitted.

<form id="myForm">
    <input type="text">
    <button type="submit">Submit</button>
</form>

let form = document.querySelector("#myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");
});

Why preventDefault()?

Normally, submitting a form can reload/navigate the page.

event.preventDefault();

prevents the browser's default action.

This is very common when handling forms with JavaScript.


input:-
-------
Occurs whenever the value of an input changes as the user types.

input.addEventListener("input", function(event) {
    console.log(event.target.value);
});

For:

R
Ra
Raj
Raje
Rajesh

the event can fire for each change.

Use: Live search, character counters, validation, etc.

change:-
--------
Occurs when the value of an input/select changes and the change is committed.

input.addEventListener("change", function() {
    console.log("Value changed");
});


input vs change

For a text input:

input  → usually fires while typing
change → usually fires after the value is changed and the control loses focus

For <select>, change fires when the selected option changes.

focus:-
------
Occurs when an element receives focus.

input.addEventListener("focus", function() {
    console.log("Input focused");
});

Example: clicking inside an input.


blur:-
------
Occurs when an element loses focus.

input.addEventListener("blur", function() {
    console.log("Input lost focus");
});

Useful for validation.

focus → enters input
blur  → leaves input


6. Clipboard Events:-
---------------------
copy:-
-----
Occurs when content is copied.

element.addEventListener("copy", function() {
    console.log("Copied");
});


cut:-
-----
Occurs when content is cut.

element.addEventListener("cut", function() {
    console.log("Cut");
});


paste:-
------
Occurs when content is pasted.

element.addEventListener("paste", function() {
    console.log("Pasted");
});

These are useful for controlling or validating copied/pasted content.


7. Drag and Drop Events:-
------------------------
Common drag events include:

dragstart
drag
dragend
dragenter
dragover
dragleave
drop
dragstart

Fires when dragging begins.
--------------------------
element.addEventListener("dragstart", function() {
    console.log("Dragging started");
});


dragover:-
---------
Fires while an element is being dragged over a drop area.

drop:-
-----
Fires when the dragged element is dropped.

dropArea.addEventListener("drop", function(event) {
    console.log("Dropped");
});

For a drop to work properly, you commonly prevent the default behavior during dragover:

dropArea.addEventListener("dragover", function(event) {
    event.preventDefault();
});


8. Window Events:-
------------------
load:-
-----
Occurs when the page and its dependent resources have finished loading.

window.addEventListener("load", function() {
    console.log("Page loaded");
});


DOMContentLoaded:-
-----------------
Occurs when the HTML document has been completely parsed and the DOM is ready.

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM ready");
});


Difference:-
----------
DOMContentLoaded
→ HTML is parsed and DOM is ready

load
→ Page resources such as images have also finished loading

For many DOM-manipulation tasks, DOMContentLoaded is enough.

resize:-
-------
Occurs when the browser window size changes.

window.addEventListener("resize", function() {
    console.log(window.innerWidth);
});

Use: Responsive behavior, layout adjustments, etc.

scroll:-
------
Occurs when the user scrolls.

window.addEventListener("scroll", function() {
    console.log("Scrolling");
});

Use: Sticky navigation, infinite scrolling, scroll animations, etc.


9. Touch Events:-
----------------
Common on mobile/touch devices:

touchstart:-
-----------
Finger touches the screen.

touchmove:-
----------
Finger moves while touching.

touchend:-
--------
Finger is removed from the screen.

Example:

element.addEventListener("touchstart", function() {
    console.log("Touch started");
});

For modern applications, Pointer Events are often preferred when you want one system that works across mouse, touch, and pen.


10. Pointer Events:-
-------------------
Pointer Events provide a unified way to handle different pointing devices.

Common events:

pointerdown
pointerup
pointermove
pointerenter
pointerleave

Example:

element.addEventListener("pointerdown", function() {
    console.log("Pointer pressed");
});

This can work with:

Mouse
Touch
Pen/stylus


11. Media Events:-
-----------------
For audio/video:

play
pause
ended
volumechange
timeupdate
loadeddata

Example:-
--------
video.addEventListener("play", function() {
    console.log("Video started");
});


12. Error Event:-
----------------
Used when an error occurs while loading certain resources or in certain browser event contexts.

Example:

image.addEventListener("error", function() {
    console.log("Image failed to load");
});


13. The Event Object:-
---------------------
When an event occurs, the browser provides an event object containing information about that event.

button.addEventListener("click", function(event) {
    console.log(event);
});

Some commonly used properties:

event.type
event.target
event.currentTarget
event.key
event.clientX
event.clientY


event.target:-
-------------
The element that actually triggered the event.

button.addEventListener("click", function(event) {
    console.log(event.target);
});


event.currentTarget:-
--------------------
The element on which the event handler is currently running.

This becomes especially important when we learn event bubbling.


14. preventDefault():-
--------------------
Definition:-
-------------
preventDefault() prevents the browser's default action associated with an event.

Example:

let link = document.querySelector("a");

link.addEventListener("click", function(event) {
    event.preventDefault();
});

Normally, clicking the link navigates to its URL.

preventDefault() stops that default navigation.

Another common example:

form.addEventListener("submit", function(event) {
    event.preventDefault();
});

This prevents the normal form submission behavior.


15. stopPropagation():-
------------------------
Definition:-
-----------
stopPropagation() prevents an event from continuing to propagate to other elements in the event flow.

Example:

child.addEventListener("click", function(event) {
    event.stopPropagation();
});

This is related to event bubbling and capturing.

16. Event Propagation:-
----------------------
This is the most important part of your question about true and false.

Suppose we have:

<div id="parent">
    <button id="child">Click</button>
</div>

When we click the button, the event doesn't simply happen at the button.

It travels through the DOM.

There are three phases:

1. Capturing phase
       ↓
2. Target phase
       ↓
3. Bubbling phase

Think:

HTML
 ↓
BODY
 ↓
DIV
 ↓
BUTTON   ← clicked
 ↑
DIV
 ↑
BODY
 ↑
HTML

The downward journey is capturing.

The upward journey is bubbling.


17. What does true mean?
------------------------
Consider:

parent.addEventListener("click", function() {
    console.log("Parent");
}, true);

The true means:

Run this event listener during the capturing phase.

The event travels from the outer element toward the target.

Example:

parent.addEventListener("click", function() {
    console.log("Parent");
}, true);

child.addEventListener("click", function() {
    console.log("Child");
}, true);

When the child is clicked:

Parent
Child


18. What does false mean?
-------------------------
parent.addEventListener("click", function() {
    console.log("Parent");
}, false);

false means the listener runs during the bubbling phase.

Actually, this third argument is optional because the default is:

false

So these are effectively equivalent for the third argument:

element.addEventListener("click", handler);

element.addEventListener("click", handler, false);

Both use the normal bubbling phase.


19. Capturing vs Bubbling
--------------------------
Consider:

<div id="parent">
    <button id="child">Click</button>
</div>
Bubbling
parent.addEventListener("click", function() {
    console.log("Parent");
});

child.addEventListener("click", function() {
    console.log("Child");
});

Click the button.

Output:

Child
Parent

Because the event starts at the target and bubbles upward.

Capturing
parent.addEventListener("click", function() {
    console.log("Parent");
}, true);

child.addEventListener("click", function() {
    console.log("Child");
}, true);

Output:

Parent
Child

Because the event travels downward during capturing.

20. Why do we use true and false?
true

Use when you specifically want the handler to run during capturing.

element.addEventListener("click", handler, true);
false

Use for the bubbling phase.

element.addEventListener("click", handler, false);

But in normal development, you will often simply write:

element.addEventListener("click", handler);

because bubbling is the default.

21. Modern way: options object

Instead of:

element.addEventListener("click", handler, true);

you can write:

element.addEventListener("click", handler, {
    capture: true
});

And for bubbling:

element.addEventListener("click", handler, {
    capture: false
});

This is clearer, especially when using other options.

22. once

You can make an event listener execute only once.

button.addEventListener("click", function() {
    console.log("Clicked");
}, {
    once: true
});

The first click runs the function.

After that, the listener is automatically removed.

23. passive

passive tells the browser that the event handler will not call preventDefault().

element.addEventListener("touchstart", handler, {
    passive: true
});

This can help the browser optimize certain scrolling/touch interactions.

Important: if a listener is passive, you should not try to use preventDefault() for that event.

24. Removing an Event Listener

If you add:

function handleClick() {
    console.log("Clicked");
}

button.addEventListener("click", handleClick);

You can remove it with:

button.removeEventListener("click", handleClick);
Important

This won't work as expected:

button.addEventListener("click", function() {
    console.log("Clicked");
});

button.removeEventListener("click", function() {
    console.log("Clicked");
});

Because these are two different function objects.

Use a named function or keep the same function reference.

25. Event Delegation

This is an important interview concept.

Instead of adding an event listener to every child:

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        console.log("Clicked");
    });
});

You can put one listener on the parent:

let container = document.querySelector("#container");

container.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
        console.log("Button clicked");
    }
});

This works because of event bubbling.

Why use event delegation?
Fewer event listeners
Better for many elements
Works well for dynamically created elements
26. Most Important Events to Remember

For a fresher interview, focus especially on:

Mouse:
click
dblclick
mousedown
mouseup
mouseenter
mouseleave
mousemove

Keyboard:
keydown
keyup

Form:
submit
input
change
focus
blur

Page:
load
DOMContentLoaded
resize
scroll

Clipboard:
copy
cut
paste

Drag:
dragstart
dragover
drop

Touch:
touchstart
touchmove
touchend

Pointer:
pointerdown
pointerup
pointermove
27. Most Important Concepts to Remember
Event
 ↓
Action that happens

addEventListener()
 ↓
Listen for an event

Event handler
 ↓
Function that runs

event.target
 ↓
Element that triggered the event

event.currentTarget
 ↓
Element whose listener is currently running

preventDefault()
 ↓
Stop browser's default action

stopPropagation()
 ↓
Stop event propagation

true
 ↓
Capturing phase

false / omitted
 ↓
Bubbling phase
Strong fresher interview answer

JavaScript events are actions or occurrences that happen on a webpage, such as clicks, keyboard presses, form submissions, and page loading. We use addEventListener() to listen for these events and execute a function when they occur. Events propagate through the DOM using capturing and bubbling phases. In addEventListener(), true enables the capturing phase, while false or the default behavior uses the bubbling phase.

*/



// first way to add event

// document.getElementById("baby").onclick = function(){
//     alert("Baby picture Clicked")
// }


// type, timestamp, defaultPreventend, target, toElement,
//srcElement, currentTarget, clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode

//second way

// 

// document.getElementById("images").addEventListener("click", function(e){
//     console.log("Clicked inside the ul")
// },false)


// document.getElementById("baby").addEventListener("click", function(e){
//     console.log("Baby clicked")
//     e.stopPropagation()
// },false)


// document.getElementById("train").addEventListener("click", function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("train clicked")
// },false)

document.querySelector("#images").addEventListener("click",function(e){
    console.log(e.target.parentNode)

    // let removeIt = e.target.parentNode
    // removeIt.remove()  // to remove the parent 

    if ( e.target.tagName = "IMG"){     // strict schek
        let removeIt = e.target.parentNode
        removeIt.remove()  // to remove the parent 
    }

})

// but one draback is here if we click the "li" it will remove the entire items because the parentNode of "li" is "ul".
// so we can give a strict check .


/*

These are properties of the JavaScript Event Object. They give us information about what happened during an event.

For example:

document.addEventListener("click", function(event) {
    console.log(event);
});

Here, event is the event object, and properties like event.type, event.target, etc. give us details about the event.

1. type:-
-------
Definition

type tells us which event occurred.

button.addEventListener("click", function(event) {
    console.log(event.type);
});

Output: click

For keyboard:
-------------
document.addEventListener("keydown", function(event) {
    console.log(event.type);
});

Output: keydown


2. timeStamp:-
-------------
Definition

timeStamp tells us the time at which the event occurred, represented as a time value associated with the event.

button.addEventListener("click", function(event) {
    console.log(event.timeStamp);
});

Output might be: 12543.72

The exact meaning and reference point can vary by browser/event context, so don't think of it as a normal clock time.

Use: Measuring timing between events.


3. defaultPrevented:-
--------------------
Definition

defaultPrevented tells us whether preventDefault() has been called for the event.

Example:

link.addEventListener("click", function(event) {
    event.preventDefault();

    console.log(event.defaultPrevented);
});

Output: true

Before preventing the default action, it would normally be:

false
Remember:
preventDefault()
       ↓
defaultPrevented
       ↓
true


4. target:-
----------
Definition

target refers to the element that originally triggered the event.

Example:

<button id="btn">Click Me</button>
document.addEventListener("click", function(event) {
    console.log(event.target);
});

If you click the button:

<button id="btn">Click Me</button>

So: event.target

means "Which element was actually clicked?"


5. toElement:-
-------------
toElement is an old/non-standard property associated mainly with older Internet Explorer event models.

It was used to identify the element the pointer was moving to during certain mouse events.

For modern JavaScript, don't use toElement.

Instead, use modern properties such as:

event.relatedTarget

For example, with mouseover/mouseout, relatedTarget can tell you the element the pointer came from or is moving to, depending on the event.

6. srcElement:-
--------------
srcElement is another legacy property, mainly associated with older Internet Explorer.

It was used similarly to:

event.target

Modern JavaScript should use:

event.target

instead of:

event.srcElement
Remember:
srcElement → old/legacy
target     → modern



7. currentTarget:-
-----------------
This one is very important.
Definition

currentTarget refers to the element whose event listener is currently handling the event.

Example:

<div id="parent">
    <button id="child">Click</button>
</div>
let parent = document.querySelector("#parent");

parent.addEventListener("click", function(event) {
    console.log(event.target);
    console.log(event.currentTarget);
});

If you click the button:

event.target         → button
event.currentTarget  → div
Easy difference

target = where the event started

currentTarget = which element's listener is currently running

This becomes especially important with event bubbling and event delegation.


8. clientX:-
-----------
Definition

clientX gives the horizontal (X-axis) position of the mouse pointer relative to the browser's viewport.

document.addEventListener("click", function(event) {
    console.log(event.clientX);
});

If you click around the right side of the viewport, you might get:

750


9. clientY:-
-----------
Definition

clientY gives the vertical (Y-axis) position of the mouse pointer relative to the browser's viewport.

document.addEventListener("click", function(event) {
    console.log(event.clientY);
});

So:

clientX → horizontal position
clientY → vertical position

Think:

Browser viewport
       0
       ┌──────────────────→ X
       │
       │        🖱
       │
       ↓
       Y


10. screenX:-
------------
Definition

screenX gives the horizontal position of the mouse pointer relative to the user's entire screen.

document.addEventListener("click", function(event) {
    console.log(event.screenX);
});

It is measured from the screen's left edge.


11. screenY:-
------------
Definition

screenY gives the vertical position of the mouse pointer relative to the user's entire screen.

document.addEventListener("click", function(event) {
    console.log(event.screenY);
});
client vs screen
Property	Reference point
clientX	Browser viewport
clientY	Browser viewport
screenX	Entire screen
screenY	Entire screen


12. altKey:-
-----------
Definition

altKey tells us whether the Alt key was pressed when the event occurred.

document.addEventListener("click", function(event) {
    console.log(event.altKey);
});

If you click normally:

false

If you hold Alt + click: true


13. ctrlKey:-
------------
Definition

ctrlKey tells us whether the Ctrl key was pressed when the event occurred.

document.addEventListener("click", function(event) {
    console.log(event.ctrlKey);
});

Holding Ctrl while clicking: true

Otherwise: false

14. shiftKey:-
-------------
Definition

shiftKey tells us whether the Shift key was pressed when the event occurred.

document.addEventListener("click", function(event) {
    console.log(event.shiftKey);
});

Holding Shift + clicking: true


15. keyCode:-
------------
Definition

keyCode was used to identify which keyboard key was pressed using a numeric code.

Example:

document.addEventListener("keydown", function(event) {
    console.log(event.keyCode);
});

For example, older browsers commonly returned:

A → 65
Enter → 13
Important ⚠️

keyCode is deprecated.

Don't use it in modern JavaScript.

Use:

event.key

or:

event.code

Example:

document.addEventListener("keydown", function(event) {
    console.log(event.key);
});

If you press A:

a

If you press Enter:

Enter
key vs code

This is useful to understand.

event.key

Tells you the value/name of the key.

event.key

Examples:

"a"
"Enter"
"Shift"
"1"
event.code

Tells you the physical key position/code.

event.code

Examples:

KeyA
Enter
ShiftLeft
Digit1

Quick Revision Table
Property	            Meaning
--------------------------------
type	                Type of event
timeStamp	            Time value associated with the event
defaultPrevented	    Whether default action has been prevented
target	                Element that originally triggered the event
toElement	            Legacy property; avoid
srcElement	            Legacy property; use target
currentTarget	        Element whose listener is currently running
clientX	                Mouse X relative to viewport
clientY             	Mouse Y relative to viewport
screenX             	Mouse X relative to screen
screenY	                Mouse Y relative to screen
altKey	                Whether Alt was pressed
ctrlKey	                Whether Ctrl was pressed
shiftKey	            Whether Shift was pressed
keyCode	                Old numeric keyboard code; deprecated


Most important for interviews

Focus especially on these:

event.target
event.currentTarget
event.type
event.preventDefault()
event.defaultPrevented
event.clientX
event.clientY
event.key
event.code
event.ctrlKey
event.shiftKey
event.altKey

*/












// attachEvent() nowdays  no one use it
//JQuey - on



