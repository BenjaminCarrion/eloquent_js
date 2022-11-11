#!/usr/bin/env node

let user = {    id: 101,
                email: 'jack@dev.com',
                personalInfo: {
                        name: 'Jack',
                        address: {
                            line1: 'westwish st',
                            line2: 'washmasher',
                            city: 'wallas',
                            state: 'WX'
                        }
                }
}

readElements(user);

function readElements(obj){
    
    let array = Object.keys(obj);

    for( let prop of array){
        if(typeof(obj[prop]) == "object"){
            return readElements(obj[prop]);
        }
        else {
            console.log( prop + " : " + obj[prop]);
        }
    }
}
console.log(typeof(null));
