let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event){
    console.log("code =", event.code);
    if(event.code == "ArrowUp"){
        console.log("Arrow Moves Apward");
    }else if(event.code == "ArrowDown"){
        console.log("Moves Farward");
    }else if(event.code == "ArrowLeft"){
        console.log("Moves Left");
    }else if(event.code == "ArrowRight"){
        console.log("Moves Right");
    }
});