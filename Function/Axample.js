function hello(){
    console.log("Helo Sami");
}
hello();

function Print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
Print1to5();

function isAdult(){
    let age = prompt("Enter your age");
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("Not Adult");
    }
}
isAdult();