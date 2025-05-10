//(Let and var )and const
b =200
if(1){
    let a=2;
    var b=3;
    const c=4;

}
//console.log(a)
//console.log(b)//Var is access beyond the the scope --> this the problem in the declaraton of the scope 
//console.log(c)
//but let and c are the fie for the scope 
//console.log(b)//this is the main problem with the var that why we do not use the var keyword for futher use in the code  
//instead of var we use let becuse it is scope depended (without the keyword the declartio  of the variable is condeider as a var)

//lec 22

//If function is declare as a normal function the it is acess before it declare in the program 
//If it is declared as a vareable type function them it is not ascees before the function is declare 

//------------EX
//it work
console.log(sumsum(3))

function sumsum(n){
    return n+1;
}

//it fail
//console.log(addadd(3))
 const  addadd = function(n){
    return n+1;
}
