#!/usr/bin/env node

class Group {
    constructor(){
        this.set = [];
    }
    
    add(element){
        if(!this.has(element)){
            this.set.push(element);
        }
    }

    delete(element){
        this.set = this.set.filter( x => x != element); 
    }

    has(element){
        return this.set.includes(element);
    }

    static from(input){
        let group = new Group;
        for (let value of input){
            group.add(value);
        }
        return group;
    }

    next(){
        
    }

}
// iteration stuff
// next() return the next result
// result is an object with 
//  a value property
//  done property



let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
