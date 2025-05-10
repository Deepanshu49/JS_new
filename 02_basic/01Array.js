const myArr = [1,2,3,4,5]
console.log(myArr)
/*
console.log(myArr.length)
//Indexing is same as c++ with zero
//Shallow Copy refrence 
//Deep copy pass by copy
console.log(myArr[3])
const myarr2 = new Array(1,2,34,5)
console.log(myarr2)
console.log(myarr2[3])

myArr.push(2)
myArr.push(222)
console.log(myArr)
console.log(myArr.length)
myArr.pop()
console.log(myArr)
console.log(myArr.length)
console.log(myArr.includes(1))
console.log(myArr.indexOfs(1))
*/
const newArr = myArr.join()

console.log(newArr)
console.log(typeof newArr )
//.s...(st,end)
//slice me end-1 pe point hota ahi aur break hojaye ga aur orignal array be change nhi hojata hai
//splice me end aur orignal array be change hojata hai    (it remove the protion from the array )
//---------->      <----------------\\
//Array in JS have diffrent data type in it at once
//.concat gives a new array  
//.spread
const A = [1,2,3,4]
const B = [6,7,3,4]
const c = [...A,...B]//This methos is called Spread 
console.log(c)
//.flate(value)  --> it flate the array of array or number and return a plate array upto the value

console.log(Array.isArray("Deepanshu"))
console.log(Array.from("Deepanshu"))


