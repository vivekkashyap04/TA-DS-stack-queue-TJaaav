let info = {
    name:'vivek',
    greet(){
        alert('hello vivek');
    }
};

let userInfo = {
    username:'nisha',
    age:26,
    marks:78
}

function createUser(name,age){
   let obj = {};
   obj.name = name;
   obj.age = age;
   obj.updateName = function(newName){
     return  obj.name = newName; 
   } 
   obj.updateAge = function(newName){
    obj.age = newName; 
 }

   return obj;
}

function createBook(title,author){
    let obj = {};
    obj.title = title;
    obj.author = author;
    obj.getSummary = function(){
        return `${obj.title} is written by ${obj.author}`
    }
    return obj;
}
//three ways to create object;
//Object literal,object constructor and object create;
//example;
let objConstructor = new Object({
    name:'vivek',
    age:27,
})

let objCreate =Object.create({name:'vivek',age:28});

let user1 ={
    name:'vivek',
    score:3,
    increasescore(value =1){
        user1.score = user1.score + value;
        return user1.score;
    },
    decreasescore(value =1){
        user1.score = user1.score - value;
        return user1.score;
    },
    changeName(name){
        user1.name = name;
        return user1.name;
    }
}