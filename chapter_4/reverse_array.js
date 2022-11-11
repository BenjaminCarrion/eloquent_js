#!/usr/bin/env node

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

function reverseArray (array){

    let temp_array = [];

    for (let value of array ) {
       temp_array.unshift(value); 
    }
    return temp_array;
}

function reverseArrayInPlace(array){

    let len = array.length-1, mid = Math.floor(len/2), swap = 0;
    for ( let i = 0; i < mid; i++){
        swap = array[i];
        array[i]= array[len-i];
        array[len-i] = swap;
    }
}
