//Last video of object 
//API ka general view 

const course = {
    name : "jee",
    fee : 100,
    teacher : "Deepanshu"
}
console.log(course)
const {fee : fe} = course //This process is called Destructure {} se hota hai , object aur array ko bi kiya ja sakta hai 
//console.log(fee)
console.log(fe)

//----------------------<API>--------------------------------------//
//AB api json me ati hai jo ki object k jaise hi hota  hai aur kabi kabi array bi milti hai
// //String to string hota hai aur number ya bool bi bi hota hai  
//Object k similar hai ye 
// {
//     "name" : "Deepanshu",
//     "class" : "B.tech second year ",
//     "Phone no." : 229232
// } similar to this
//Array wala hai ye 
// [
//     {

//     },
//     {

//     }
// ]