// as same as c++
// to convert string in to num 
var k = "30"
console.log(k)
console.log(typeof(k))
k = Number(k)
console.log(k)
console.log(typeof(k))

k = "12jk"
console.log(k)
console.log(typeof(k))
k = Number(k)
console.log(k)
console.log(typeof(k))
//NaN i.e Not a Number 
k = null

console.log(k)
console.log(typeof(k))
k = Number(k)
console.log(k)
console.log(typeof(k))
k = undefined

console.log(k)
console.log(typeof(k))
k = Number(k)
console.log(k)
console.log(typeof(k))

//bool me 1-> true(non empty srting and number != 0) and 0 -> flase(empty srting and number == 0)

let some_num = 33;
let str_some_num = String(some_num);
console.log(str_some_num);
console.log(typeof(str_some_num));
