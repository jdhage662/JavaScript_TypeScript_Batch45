//Operators: are special symbols which we are using to perform an action
//helps to calculate values , compare values , assign values 
//AND OR && ||  

let add = 34 + 33;
// let way to declare the vvariable
// add -- variable
// = , + operators 
// 34 33 oprands 
//Multiple types of operatore:
//1. Mathematical calculation : Arithmatic operators
// + - / * % **
console.log(1*2)
//2. Assignment : = , += , -= , *= , /= 

let num1 = 10;
num1 += 5   // num1 = num1 + 5;

//3. comparasion : == , === , != , !== , > , < , <= , <=

console.log( 5 == '5') 

//4. Logical operators: AND == && OR || NOT !

let numb2 = 20;   //number 
let num3 = 30;
    // true  && false == false
if(numb2 >= 20 || num3 >= 40){
    console.log("number is greater than 20")
}

if( numb2 != 30){
    console.log('numer2 is not equal')
}

let num4 = 40  //string   == number 

let Resul = numb2 == num4 ? console.log('numbers are equal') : console.log('numbers are not equal')


let firstName = 'John'
let lastName = 'Marphy'

console.log(firstName + " " + lastName + " Nashik")

//Conditional operator / ternary operator ?

let Ressult =  num4>= 40 ? console.log(num4) : console.log('Blank')


// == ====  == equals 

// = ==
// fibonaci series = * , factorial   3   1*2*3 

////Type Conversion
 // changing a value from one data type to another data type 

let bihNumber = '20'
console.log(typeof(bihNumber))

console.log(typeof(Number(bihNumber)))

//Implicit and explicit 

console.log( "Age: " + 25)

//explacit type conversion
let totalAmount = '100'
let interast = 25

console.log(Number(totalAmount) + interast)
// Number(value) -- to convert into number
// String(value) -- to convert into string
// Boolean(value) -- to convert into boolean
//psrseInt(value)
 // parseFloat(value)

let isPresent = 'true'
console.log(typeof(isPresent))   // string

console.log(typeof(Boolean(isPresent)))  // boolean


console.log(parseFloat(12.333333))

//Identifiers , variables(local & global) , way to declare variable , data types
// naming conventions , operators, type conversion

let studentName: string = 'xyz'
let studentAge: string = '22'


