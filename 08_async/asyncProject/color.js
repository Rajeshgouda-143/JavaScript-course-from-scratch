
//Code for generate the random color

function randomColor(){
    const hex = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++){
        color+=hex[Math.floor(Math.random() * 16 )]
    } 

    return color
}

// console.log(randomColor())

const startColorBtn = document.querySelector("#start")
const stopColorBtn = document.querySelector("#stop")

let startid;

startColorBtn.addEventListener("click", function(){
    startid = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    },1000)
},false)

// to stop the color

stopColorBtn.addEventListener("click", function(){
    clearInterval(startid)
    // startid = null;
},false)





