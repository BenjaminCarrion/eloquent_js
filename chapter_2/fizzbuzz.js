#!/usr/bin/env node

let text = "";

for (let i = 1; i <= 100; i++) {
   if (i % 3 == 0) {
      text += "Fizz";
   }
   if (i % 5 == 0){
      text += "Buzz";
   }
   
   if (text){
      console.log(text)
      text = "";
   }
   else {
      console.log(i);
   }
}
