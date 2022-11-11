#!/usr/bin/env node

console.log(range(1, 10));
console.log(range(50, 2, -3));

console.log(sum(range(1, 10)));

function range(start, end, step = 1){
    let array = []

    //backwards count
    if (start > end){
        for (let x = start; x >= end; x -= Math.abs(step)) {
            array.push(x);
        }
    }

    //forward count
    else {
        for (let x = start; x <= end; x +=step) {
        array.push(x);
        }
    }

   return array;
}


function sum(numbers){
    let result = 0 ;

    for (let value of numbers) {
        result += value;
    }

    return result;
}
