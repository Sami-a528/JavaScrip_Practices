let inpute = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click Me!";

document.querySelector("body").append(inpute);
document.querySelector("body").append(btn);


btn.setAttribute("id", "button");
inpute.setAttribute("placeholder", "username");

let button = document.querySelector("#button");
button.classList.add("btnstyle");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice"
h1.innerHTML = `<u> ${h1.innerText} </u>`;
document.querySelector("body").append(h1);
h1.classList.add("purple");

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para);

