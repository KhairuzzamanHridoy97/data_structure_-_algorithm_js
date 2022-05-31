function sumOfNumber (n){
    let total = 0;
    for(let i=0;i<n;i++){
        total +=i;
    }
    return total;
}

// let time1 = performance.now();
console.log(sumOfNumber(7))
// let time2 = performance.now();
// console.log(`your time is ${(time2-time1)/1000}`)