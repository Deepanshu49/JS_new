// to refere the current conntext we use the arrow function -> and this. 
//the result of the this in the object is the object within it call and outsite of the object it result ti empty object 

//for the function

// function add(){
//     let use = "Deepanshu"
//     console.log(this.use)
    
// }
// add()

// const chai = function(){
//     let sss = "Deepu"
//     console.log(this.sss)
// }
// chai()
//that means this is not use in  function as it is used for object  
// Same for both type of declare function 

//to use the this we use arrow funtion

const chai = () => {//this is declaration of the arrow function
    let sss = "Deepu"
    console.log(this)
}
chai()
//Arrow function
//declare () =>
//Implitite arrow funtion
//var_Type var_name = (parameter) => (what_you_want_to_return) //for the function of one line 