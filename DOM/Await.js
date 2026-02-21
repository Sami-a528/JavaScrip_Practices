function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 2000);
    });
}
async function Demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
Demo();