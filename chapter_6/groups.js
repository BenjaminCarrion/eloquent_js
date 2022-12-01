#!/usr/bin/env node

class Group {
    constructor(){
        this.set = [];
    }
    
    set add(){
    }

    delete(){
    }

    has(element){
        return 
    }

    static from(){
    }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
