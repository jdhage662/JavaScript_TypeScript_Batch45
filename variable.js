//let , var , const
// to store the information
//to resuse the value

a = 10;
b =20;
c = a+ b

//1. var 
var name = 10
console.log(typeof(name))

var name = "Jyoti"

console.log(name)

// function scope

function test(){
    let  length = 20;
    if(true){
         length = 30;
        console.log(length)
    }
    console.log(length)
}

test()

console.log(name)

//reassign the value 

name= "Kiran"

//let 

let name1;

if(true){
    let age = 20;
    console.log(age)
}

name1 = 'Java';

// console.log(age)

// const === constant ( we can not change )
const colleageName="XYZ";

//bloxk scope


// what is the difference between 

//var  = redeclaration , reassignment , functional 
//let = reassignment , block
//const = 
