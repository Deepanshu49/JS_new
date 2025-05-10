//This is for function and their memory managment 
//syntax for the function

function fun_name(){
    //body;
}

// fun_name // this is the refrence of the function
// fun_name() //this the actual calling of the fun=nction to excute the program in the function
function add(n1 =0 , n2 =0){//This is called as a defualt parameter
    return (n1+n2)
}
const sum = add(2,3)
console.log(sum)

const sum2 = add()
console.log(sum2)
//Ye tho similar hai c++ jasie

// Rest in function is means that is the parameter are large 
function cartPrice(...num){
    return num;
}
console.log(cartPrice(2,3,5,6,7))//it handle all size of parameter 

let k1,k2;
console.prompt(k1)
console.prompt(k2)

const sum3 = add(k1,k2)
console.log(sum3)
//Something wrong in it 
