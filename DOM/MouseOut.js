let inp = document.querySelector("input");
inp.onmouseout = SayHello;
function SayHello(){
    alert("Hello");
    console.log("SayHello");
}