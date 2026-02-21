h1 = document.querySelector("h1");

function colorChange(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let time = Math.floor(Math.random()*10)+1
            if(time>5){
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`Color Change to ${color}`);
            resolve("color Change");
        }, delay);
    });
}

async function Demo() {
    try{
        await colorChange("red", 2000);
        await colorChange("blue", 2000);
        await colorChange("yellow", 2000);
        await colorChange("green", 2000);
        await colorChange("indigo", 2000);
        await colorChange("voilet", 2000);
        await colorChange("orange", 2000);
        await colorChange("green", 2000);

    }catch(err){
        console.log("Error caught");
        console.log(err);
    }
    let a = 50;
    console.log(a);
}
Demo();