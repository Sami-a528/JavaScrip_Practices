// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("Button was Clicked");
// }
// let btn = document.querySelectorAll("button");
// for(btns of btn){
//     btns.onclick= sayHello;
//     btns.onmouseenter = function(){
//         console.log("you entered a button");
//     }
// }

// function sayHello(){
//     alert("Hello");
// }


// AddEventListener
let btn = document.querySelectorAll("button");
for(btns of btn){
    btns.addEventListener("click", sayHello);
    btns.addEventListener("click", sayName);
    
}

function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("Apna College");
}