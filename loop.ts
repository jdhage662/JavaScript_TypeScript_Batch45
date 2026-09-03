// print number 1 10 : you are executing block of code repetatedly until a specified condition satisfy
// for loop , while loop , do while loop, for ... of loop , for ...in loop, break , continue

//start = 1   to  end 10   ---no of iteration 
//for loop 
//initialization , condition , increment or decrementatl 
for(let i = 1; i<=5; i++ ){
    let r = ""    //declare variable
    for( let j =1; j<=i; j++){
        r += j;    // 1 
    }
    console.log(r)
}

//2. while loop : you dont know the no of iteration , you wanted to run the block of code until your conadition is satisfied
// while(condition){
//     //block
//     //increment or decrement operation
// }

let i = 6;
while(i<5){
    console.log('While loop '+ i);   // 1
    i++;   //i = 3
}

//3. do while loop : while loop but difference is here we are checking the condition after exeuting the block of code at least once

// do{
//     //block of code
//     //increment/decrement
// }(condition)

do{
    console.log('do while loop '+i)
    i++;
}while(i<=5)

//4. for .. of loop 
// used when you wanted to iterate over the object like array and string

let arrayFruit = ["Apple", "Banana", "Peru"]

console.log(arrayFruit[0])

for(let fruit of arrayFruit){
   console.log(fruit)   
}


for(let j=0 ; j<arrayFruit.length-1 ; j++){
    if(j%2==0){
    console.log(arrayFruit[j])
    }
}

//5. for ..in    object .. object property then 

let student = {
    name: "Jyoti",
    city: "Pune"
}

for(let key in student){
    console.log(key)
}



//factorial of numbers , fibonaci series
//login 


