// Object : 
//State: attribute
//Behaviour : functions/ actions

///rain == true ,, umbrella , dont take 
// if,   if statement execute the block of code only if condition is true

let reality = "raining"
if(reality == "raining"){
    // console.log("umbrella")
}

//if else : satisfied : execute block of code , if condition not satisfied then also you want to execute block of code
if(reality == "raining"){
    console.log("umbrella")
}else{
    console.log('Dont carry Umbrella')
}

let age = 18;

if(age>18){  //19> 18 true 
    console.log("Adult")
}else{
    console.log("Child")
}


// if ... else if  
let Result = 40;

let finalOutput = Result> 90 ? "Topper" : "Fail"

if(Result > 66){  // false
    console.log("Destinction")
}else if( Result > 55 || Result < 66 ){   // false 
    console.log("First class")
}else if(Result < 36){ //false 
    console.log("Fail")
}else{
    console.log("Invalid result")
}

// switch block 
function dayOfTheWeek(day:number){
switch(day){
    case  1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log("Wensday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    default:
        console.log("Invalid output")        
}
}

dayOfTheWeek(8)

let num1 = 10;
let num2 = 20;
let num3 = 20;
if(num1 > num2  && num1 > num3){
    console.log("num 1 is greater than num 2")
}else if (num2> num1 && num2 > num2){
        console.log(num2+ "is greater than num ")

}
else{
        console.log(num3 + "is greater than num 1")

}

for(let i = 1 ; i<= 10 ; i++){
    if( i % 2 == 1){
        console.log(i)
    }
}


