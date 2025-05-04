// String is object in js 
const name = "Deepashu Shukla "
const name1 = 50
 console.log(name +name1+" Hello")
// Avoid this type of practice in work 
console.log(`Hello this is  ${name} and my repo is ${name1 }`)
// this is backticks ---> string interpolation (place holder in the string )
const user_Name = new String('Deepanshu')
console.log(user_Name)
console.log(user_Name.length)
console.log(user_Name.toUpperCase())
console.log(user_Name.__proto__)
console.log(user_Name.charAt(4))

//slicesing

// const newname = user_Name.substring(0,8)
// console.log(newname)

const newname = user_Name.substring(-8,2)
console.log(newname)

const newname1 = user_Name.slice(-8,8)
console.log(newname1)

//Aviod this 

//Trim  
const newname2 =  "    Deep    "
console.log(newname2)
console.log(newname2.trim())

// Replace 

const newname3 =  "www.dipshu.com/%20Hello/%20pp"
console.log(newname3)
console.log(newname3.replace('%20','/'))

// Includes

console.log(newname3.includes('dipshu'))

//Split 
console.log(newname3.split('/'))
