#!/usr/bin/env node

console.log(min(0, 10));

console.log(min(0, -10));


function min(x , y){
    if (x < y){
        return x;
    }
    else {
        return y;
    }
}
