//Array: array is nothing but collection of multiple value which we are storing in a single variable

let Var: string[] = ['Java' , 'Javascript' , 'TypeScript']
Var.push('Python')

console.log(Var.length-1)
// we are declaring array using [] , index = 0  
for(let a = 0; a<= Var.length-1 ; a++ ){
    console.log(Var[a])
}

Var.unshift('VBScript')

Var.pop()

Var.shift()

console.log(Var.includes('ypeScript'))

console.log(Var.indexOf('Javascript'))
console.log(Var)

let number = [10,20,30,40,50,60]
console.log(number.map(x => x*2))


console.log(number.filter(x => x>2))
// sum , multiplication , maximum no find 

let sum = number.reduce((total, num)=>{
    return total * num
},10)

console.log(sum)

let maxnum = number.reduce((max, num)=>{
    return num > max ? num : max
},number[0])
console.log(maxnum)


let minium = number.reduce((min, num)=>{
    return num < min ? num : min
},number[0])
console.log(minium)



//print all element from an array
//find the length of the array
//find the sum of all element from an arrray
//find the largest element
//find the smallest element
//find the even/odd no from the array
//search for an element in an array
//reverse the array

let varRev = number.reverse()

console.log(varRev)

//sort an array ascending/descnding


let  arr4 = [100, 23,54,33,2,4,5,999]

arr4.sort((a,b) => a - b)

console.log(arr4)

arr4.sort((a,b) => b - a)
console.log(arr4)

//Remove duplicate value from an array
let  arr5 = [100, 23 ,2 ,4, 5, 23,54,33,2,4,5,999]  //


