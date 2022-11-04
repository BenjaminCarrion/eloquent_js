#!/usr/bin/env node

let size = 8;
let text= "";

for (let i = 0; i < size; i++){
   for (let j = 0; j < size ; j++) {
     if( (i+j) % 2){
        text += "#";
     }
      else{
         text += " ";
      }
   }
   console.log(text);
   text = "";
}
