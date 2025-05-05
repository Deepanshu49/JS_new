//Dates 
let my_Date = new Date()
console.log(my_Date)
console.log(typeof(my_Date))
console.log(my_Date.toString())
console.log(my_Date.toDateString())
console.log(my_Date.toISOString())
console.log(my_Date.toLocaleString())
console.log(my_Date.toLocaleDateString())

let create_Date = new Date(2025,2,22)
console.log(create_Date)
console.log(create_Date.toLocaleString())

//Time Stamp 
let my_time_stamp = Date.now()

console.log(my_time_stamp)
console.log(create_Date.getTime())
console.log(Math.floor(Date.now()/1000))

//new thing

let newDate = new Date()

console.log(newDate.toLocaleDateString())
console.log(newDate.getDay()+1)
console.log(newDate.getMonth()+1)

//toLoacleString 

newDate.toLocaleString('default',{weekday:"Long",})
