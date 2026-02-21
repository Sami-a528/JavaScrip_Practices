let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    console.log("Button was Clicked");
    inp.value = "";


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delbtes of delBtns){
//     delbtes.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }