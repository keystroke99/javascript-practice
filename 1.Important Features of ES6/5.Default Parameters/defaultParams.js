`use strict`

/* 
        Default fuction parameters allow named parameters to be initiliazied with default values if no value or undefined is passed.
*/

function multiply(a, b=1){
    return a*b;
}

console.log(multiply(5,2))

console.log(multiply(5));

console.log(multiply());

function add(a,b){
    return a+b;
}

console.log(add());