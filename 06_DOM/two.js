const parent = document.querySelector(".parent")
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[1].innerHTML) //op:- Tuesday

//parent.children returns the HTMLCollection , so here we can use for...loop.

// example:-

// for(let i = 0; i < parent.children.length; i++){
//     console.log(parent.children[i].innerHTML)
// }

/* op:-

Tuesday
Monday
Tuesday
Wednesday
Thursday

*/

// to move from parent to child

parent.children[1].style.color = "orange"

// console.log(parent.firstElementChild)  
// it will returns first child 
// op:- <div class="day">Monday</div>


// console.log(parent.lastElementChild)  
// it will returns the last child.
// op:- <div class="day">Thursday</div>



// Here how can we go from parent to child for example....

const dayOne = document.querySelector(".day")
// console.log(dayOne) 

// console.log(dayOne.parentElement)  
// it returns the parent one elements
// console.log(dayOne.nextElementSibling) 
// it means after the targeted element.


// to check how many nodes inside the structure...

console.log("NODE: ", parent.childNodes)

/* here the node length is 9, but interesting part is inside the HTML we have only four elements , then how does the length become 9 ?  */

/* answer:- why because, The DOM count every line break so there is four elements after every element we press one line break or Enter, so it count that line break as a Node so that is why the NodeList length becames 9. */






