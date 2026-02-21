let arr = [2,5,1,15,7,3,10];
// let max = -1;
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);
let result = arr.reduce((max, el)=>{
    if(max < el){
        return el;
    }else{
        return max;
    }
});
console.log(result);