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

    [Symbol.iterator](){
        return new GroupIterator(this);
    }

}

class GroupIterator{
    constructor(group){
        this.group = group;
        this.position = 0;
    }

    next(){
        if(this.position >= this.group.set.length){ 
            return {done: true}
        }else{
            let value = {value: this.group.set[this.position], done: false};
            this.position++;
            return value;
        }
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


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
