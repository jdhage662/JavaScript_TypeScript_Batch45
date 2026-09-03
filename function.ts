
// Object : state and behaviour --- doing some task and tehn adding that into the block

//Function/Methods : is nothing but reusable block of code which is designed to perform a specific task

//Reduce duplicate code
//improve readability
//reuse the login multiple times

//1.  function declaration
function substraction(): void{

}

function additionOfNumbers(a:number, b:number): any{
    let Result = a+b
    return Result;
}

function multiplecation(){
    let Addition = additionOfNumbers(20, 39)
    let multiple = Addition * 30
    console.log(multiple)
}
additionOfNumbers(20, 30)
multiplecation()

//Function Expression

const result = function(a:number, b=20, c?:number){

    console.log(20/0)
    if(b>100){
        throw new Error('b is less than 100')
    }
    if( c === undefined){
        return a+b
    }else{
     return a+b+c ;
    }

}

console.log(
result(23, 40))

//Arrow Function

const multiply = () => console.log('Execute')

//rest parameter ...nameOfTheVariable: typeOfVariable[]
const total = (...no:number[]) => {
    return no;
}

//Call back function: we are passing a function as a argument to another function

setTimeout(function(){}, 2000);

const square = (x:number) => x*x
console.log(square(3))

