let url = "https://icanhazdadjoke.com/";

async function GetCat() {
    try{
        const config = {headers : {Accept : "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    }catch(e){
        console.log("Error---",e)
    }
}
GetCat();