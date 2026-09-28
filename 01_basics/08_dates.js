// Date in  javaScript


/*

JavaScript Date Methods

1. Creating a Date: new Date()

Creates a Date object containing the current date and time.

let date = new Date();
console.log(date);

Example output:
Sat Sep 26 2026 21:50:30 GMT+0530

The exact output depends on the current date and time.


2. Date.now():
Date.now() returns the current timestamp in milliseconds since January 1, 1970 UTC.

console.log(Date.now());

Example:

1790430030000

This number is called a timestamp.

Important
Date.now() returns a number, not a Date object.


3. getFullYear()

getFullYear() returns the year of a Date object according to local time.

let date = new Date("2026-09-26");

console.log(date.getFullYear());

Output:
2026


4. getMonth():
getMonth() returns the month from 0 to 11, where January is 0 and December is 11.

but there is an important rule:

Months start from 0.
January  → 0
February → 1
March    → 2
April    → 3
...
December → 11

Example:
let date = new Date("2026-09-26");

console.log(date.getMonth());

Output: 8
Because September is month 8.


5. getDate():
getDate() returns the day of the month from 1 to 31.

let date = new Date("2026-09-26");

console.log(date.getDate());

Output: 26

Important: getDate() gives the date of the month, not the day of the week.


6. getDay():

getDay() returns the day of the week as a number from 0 to 6.

Returns the day of the week.

But again, JavaScript starts from 0.

Sunday    → 0
Monday    → 1
Tuesday   → 2
Wednesday → 3
Thursday  → 4
Friday    → 5
Saturday  → 6

Example:

let date = new Date("2026-09-26");

console.log(date.getDay());

Output:  6

Because September 26, 2026 is Saturday.

Important difference
getDate() → date of month
getDay()  → day of week
Interview definition


7. getHours():
getHours() returns the hour from 0 to 23 according to local time.

Returns the hour according to local time.

let date = new Date();

console.log(date.getHours());

If the current time is 9:30 PM:

21

It uses the 24-hour format.

12 AM → 0
1 AM  → 1
...
12 PM → 12
1 PM  → 13
...
11 PM → 23



8. getMinutes():
getMinutes() returns the minutes from 0 to 59.

let date = new Date();

console.log(date.getMinutes());

Possible output: 35

Range: 0 → 59


9. getSeconds()
getSeconds() returns the seconds from 0 to 59.

let date = new Date();

console.log(date.getSeconds());

Range: 0 → 59


10. getMilliseconds():
getMilliseconds() returns the milliseconds from 0 to 999.

let date = new Date();

console.log(date.getMilliseconds());

Range: 0 → 999


11. getTime():
getTime() returns the number of milliseconds elapsed since January 1, 1970 UTC for a Date object.

let date = new Date();

console.log(date.getTime());

It returns milliseconds since:

January 1, 1970 UTC
Difference between Date.now() and getTime()
Date.now()

Gets the timestamp for now.

date.getTime()

Gets the timestamp for that Date object.

Example:
let date = new Date("2026-01-01");
console.log(date.getTime());


12. setFullYear():
setFullYear() sets the year of a Date object.

Changes the year.

let date = new Date();

date.setFullYear(2030);

console.log(date);

The year becomes: 2030


13.setMonth():
setMonth() sets the month of a Date object using values from 0 to 11.

Changes the month.

Remember:
January = 0
December = 11

Example:
let date = new Date();
date.setMonth(0);
console.log(date);

The month becomes January.


14. setDate():
setDate() sets the day of the month.

Changes the day of the month.

let date = new Date();
date.setDate(15);
console.log(date);

Now the date is the 15th.


15. setHours();
setHours() sets the hour of a Date object.

Changes the hour.

let date = new Date();
date.setHours(10);
console.log(date);

The hour becomes 10.


16. setMinutes()
Changes the minutes.

let date = new Date();
date.setMinutes(30);
console.log(date);


17. setSeconds()
Changes the seconds.

let date = new Date();
date.setSeconds(20);
console.log(date);


18. setMilliseconds()
Changes the milliseconds.

let date = new Date();
date.setMilliseconds(500);
console.log(date);


19. setTime():
setTime() sets a Date object using milliseconds since January 1, 1970 UTC.

Sets the Date object using a timestamp.

let date = new Date();
date.setTime(0);
console.log(date);

The date becomes: January 1, 1970

because timestamp 0 represents January 1, 1970 UTC.


20. toString()
Converts a Date object into a readable string.

let date = new Date();
console.log(date.toString());

Example:
Sat Sep 26 2026 21:50:30 GMT+0530 (India Standard Time)


21. toDateString()
Returns only the date portion in a readable format.

let date = new Date();
console.log(date.toDateString());

Example:
Sat Sep 26 2026

Difference:

date.toString()
includes date + time.

date.toDateString()
includes only date.


22. toTimeString():
Returns only the time portion.

let date = new Date();
console.log(date.toTimeString());

Example:
21:50:30 GMT+0530 (India Standard Time)
23. toISOString()

Returns the date in ISO 8601 format.

let date = new Date("2026-09-26");
console.log(date.toISOString());

Example:

2026-09-26T00:00:00.000Z

This is very commonly used with APIs and databases.



24. toJSON():
Converts a Date into a JSON-compatible string.

let date = new Date();
console.log(date.toJSON());

Example:
2026-09-26T16:20:00.000Z
It is commonly used when converting objects to JSON.

25. toLocaleDateString()
Returns the date according to the user's locale.

let date = new Date();
console.log(date.toLocaleDateString());

In India, it may display something like:

26/9/2026

You can also specify a locale:

console.log(
    date.toLocaleDateString("en-IN")
);


26. toLocaleTimeString()
Returns the time according to the user's locale.

let date = new Date();
console.log(date.toLocaleTimeString("en-IN"));

Example:
9:50:30 pm


27. toLocaleString()

Returns both date and time according to the user's locale.

let date = new Date();
console.log(date.toLocaleString("en-IN"));

Example:
26/9/2026, 9:50:30 pm

*/

// example:-

// let myDate = new Date(2026,0,25);
// let myDate = new Date(2026,0,25,7,23);
// let myDate = new Date("2026-07-25");
let myDate = new Date("03-13-2026");
// console.log(myDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate.getTime());

// to find the seconds in date
// console.log(Math.floor(Date.now()/1000));  //1790511925


let newDate =new Date();
// console.log(newDate);

// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())


// newDate.toLocaleString():-
/*
Converts a date and time to a string by using the current or specified locale.

ex:- console.log(newDate.toLocaleString());

op:- 9/27/2026, 6:02:19 PM
*/

newDate.toLocaleString("default",{
    weekday:"long",
})










