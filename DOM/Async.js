async function greet() {
    // throw "Some random error"
    return "hello";
};

greet()
.then((result)=>{
    console.log("Promise was resolved");
    console.log("result was ", result);
})
.catch((err)=>{
    console.log("Error",err);
});