#!/usr/bin/env node

console.log(arrayToList([10, 20, 30 ]));

console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20

function arrayToList(array){

    let list = null;

    for (let i = 0, len = array.length; i < len; i++){
        list = {value: array.pop(), rest: list};
    }
    return list;
}

function listToArray(list){
    let temp_array = [];

    for (let node = list; node; node = node.rest) {
        temp_array.push(node.value);
    }
    return temp_array;
}

function prepend(item, list){
    list = {value:item, rest: list };
    return list;
}

//function nth(list, number){
//
//   let i = 0;
//   while ( list.rest !== null){
//       if (i == number){
//           return list.value;
//       }
//       list = list.rest;
//       i++;
//   }
//   return undefined;
//}

//recursive version
function nth(list, number){

    if (list.value == null){
        return undefined;
    }
    if (number == 0 ){
        return list.value;
    }

    return nth(list.rest, number-1);

}
