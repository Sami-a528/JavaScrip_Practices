function SavetoDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("Success : data was saved");
        }else{
            reject("Failure : week connection");
        }
    });
}

let request = SavetoDB("Apna College");
request.then(()=>{
    console.log("Promise resolved");
    console.log(request);
})
.catch(()=>{
    console.log("Promise rejected");
    console.log(request);
});