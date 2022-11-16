#!/usr/bin/env node

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

//take care with null values

function deepEqual(valueOne, valueTwo){
    
    let arrayOne = Object.keys(valueOne);
    let arrayTwo = Object.keys(valueTwo);

    if(arrayOne.toString() === arrayTwo.toString()){
        for (let key of arrayOne){

            let gate = valueOne[key] === valueTwo[key];

            if (typeof(valueOne[key])=="object" && typeof(valueTwo[key])=="object" && valueOne[key] != null && valueTwo[key] != null ){
                return deepEqual(valueOne[key], valueTwo[key]);
            }

            else if(!gate){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

