let btn = document.createElement("button");
btn.innerText = "Click me"
let body = document.querySelector("body");
body.append(btn);

btn.addEventListener("click", function(){
    console.log("button was Clicked");
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
});