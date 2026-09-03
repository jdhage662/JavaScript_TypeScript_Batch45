
//Exception: Unwanted or unexpected event which is halting your normal flow of execution 

let result3:number = 10/0;
try{
    JSON.parse('Hello') 

}catch(error){
        // console.log(error)

}finally{
     console.log('Add clean up code of the databases')
}
console.log('Execute this statement')
console.log('Execute this statement')
console.log('Execute this statement')
console.log('Execute this statement')
console.log('Execute this statement')

//tired got puncture you are auto or taxi --- getting alternate way to reach office

//different way to handle exeception in javascript and typescript

//try block
//catch block
//finally block 
//throw keyword: you are manullay creating the exception


//what is execption name : description about the exception : path exactly where you got the exeception
// Printstack

try{
   //risky code: you know you might received an execution

}catch(error){
    //alternate code 
}


//db connection is open

//executing line of code
//line 5
//line 10

//you are closing the db connection

let age = 18;

function calculateAge(age:number){
if(age < 18){
    throw new Error('Age must be 18 or above')
}
return 'Access Granted'

}

try{
    calculateAge(12)
}catch(error){
    console.log(error.message)
}

