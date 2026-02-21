function SavetoDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        success();
    }else{
        failure();
    }
}

SavetoDB("Apna College",()=>{
    console.log("Success : Your data was Saved");
    SavetoDB("Sami",()=>{
        console.log("Success2 : data Saved");
        SavetoDB("Sahil",()=>{
            console.log("success3 : your data was saved");
            SavetoDB("Nitis",()=>{
                console.log("success4 : data Saved");
            },()=>{
                console.log("failur4 data not saved");
            });
        },()=>{
            console.log("Falure3 : data not saved");
        });
    },()=>{
        console.log("Failure2 Data not Saved");
    });
},()=>{
    console.log("Faliure : low connection");
});