// Singleton
//Object.create
// object literals
/*
const my_sym = Symbol("Key1")

const Js_user = {
    name : "Deepanshu",
    age : 19,
    "Full name ": "Deepanshu Shukla",
    [my_sym] : "key2",
    email : "Dipshu.com"
}
console.log(Js_user.name)
console.log(Js_user["name"])
//console.log(Js_user."Full name")
console.log(Js_user[my_sym])
console.log(typeof(Js_user[my_sym]))
console.log(Js_user["Full name "])

// -- > . se access kareo
// -- > = (asign kar sakte hai)
// Object.freeze(name_of_object) --> no change in the object after it

//Function
Js_user.greeting = function(){
    console.log("Hello this is Deepanshu")
}

Js_user.greetingTwo = function(){
    console.log(`Hello ${this.name} this is Deepanshu   `)
}
console.log(Js_user.greeting)//without () return only the address of the function 
console.log(Js_user.greeting())//without () return only the address of the function 

console.log(Js_user.greetingTwo())//with () run function 
*/

//---------------------------------------------------------//
const new_user = new Object() //singleton 
console.log(new_user)
const new_user1 = {} //object literals (non singleton)
console.log(new_user1)

