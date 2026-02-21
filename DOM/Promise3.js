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

SavetoDB("Apna college")
.then((result)=>{
    console.log("Data1 Saved");
    console.log("result of promises : ", result);
    return SavetoDB("Hellow World");
})
.then((result)=>{
    console.log("Data2 saved");
    console.log("result of promises : ", result);
    return SavetoDB("Sami");
})
.then((result)=>{
    console.log("Data3 Saved");
    console.log("result of promise : ", result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promise : ", error);
});