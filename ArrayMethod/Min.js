let arr = [2,4,1,6,4,9,20,3,0];
let result = arr.reduce((min, el)=>{
    if(min > el){
        return el;
    }else{
        return min;
    }
});
console.log(result);

// let min = 1;
// for(let i=0;i<arr.length;i++){
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
// console.log(min);