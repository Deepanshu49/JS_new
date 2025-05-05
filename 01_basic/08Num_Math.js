const num = 100

console.log(num)
console.log(typeof(num))

// Number as a object 

const num1 = new Number(1000)
console.log(num1)
console.log(typeof(num1))

console.log(num1.toString().length)
console.log(num1.toString())
console.log(num1.toFixed(3))

const num3 = 3.145132

console.log(num3)
console.log(num3.toPrecision(3))


const num4 = 100000000

console.log(num4)
console.log(num4.toLocaleString())
console.log(num4.toLocaleString('en-IN'))
//=============-------------========================
//Mathematics Math libray for js 
// Wahi ceil,floor ,abs ,round ,min , max , sab .se accecs ho ga 

console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
