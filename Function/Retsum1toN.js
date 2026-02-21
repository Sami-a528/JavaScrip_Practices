function Sum1toN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum = sum + i;
    }
    return sum;
}
console.log(Sum1toN(3));