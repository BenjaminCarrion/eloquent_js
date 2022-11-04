#!/usr/bin/env node

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));

function countBs(text){
    return countChar(text, "B");
}

function countChar(string, letter){
    let counter = 0;
    for(let x = 0; x < string.length; x++){
        if(string[x] == letter){
            counter++;
        }
    }
    return counter;
}
