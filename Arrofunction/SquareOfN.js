Square = (n) => (
    n**2
);
console.log(Square(11));


let id = setInterval(()=>{
    console.log("Hellow World");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("Clear interval");
},10000);