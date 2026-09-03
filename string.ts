//String : set of character is nothing but string, character array
//

let str1:string = 'Javascript Learn'   //['J','a']
let str2: string = "Typescript" // 0, 1 ,2,3,4,5
// let str3 = new String('Java')

//length of the method
console.log(str1.length)

//upper case

console.log(str1.toUpperCase())
console.log(str2.toLowerCase())

console.log(str1.trim())

console.log(str1.includes('z'))

console.log(str1.trim().startsWith('J'))
console.log(str1.trim().endsWith('t'))

console.log(str2.indexOf('y'))
console.log(str2.charAt(1))

console.log(str2.slice(3,5))   //

console.log(str1.replace('a','*'))

console.log(str2.concat(str1))

let strRev='';
for(let i=0; i<= str1.length; i++){
  strRev  =  str1.charAt(i) + strRev    //         aJ
}

console.log("Reverse of string : "+ strRev)

strRev = ''

for(let i = str2.length; i>= 0 ; i--){
      strRev  =  strRev + str2.charAt(i)     //         aJ

}

console.log("Reverse of string : "+ strRev)

// write function to reverse string
// write function to find repetataive characer from string
// String123£££££    --- string print , only number , only special character 

// Why string are immutable in nature

//immutable: not changeble  

//String constant pool : special memory available to store the string
let str4 = 'Java'

str4.concat(' Classes')

let str5 = 'Java'


console.log(str4)

str4 = str4.concat('classes')

console.log(str4)

//== equals
