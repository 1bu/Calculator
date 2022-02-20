const express = require('express');
const bodyParser = require('body-parser');

///////////////////////////////Calculo////////////////////////////////
///SUMA
function add (num1,num2){
    let n1 = parseInt(num1,10);
    let n2 = parseInt(num2,10);

    if(n1 && n2){
        return(n1 + n2);
    }
}
///RESTA
function subtraction(num1,num2){
    let n1 = parseInt(num1,10);
    let n2 = parseInt(num2,10);

    if(n1 && n2){
        return (n1 - n2);
    }
}

//Multipliacion
function multiplication(num1,num2){
    let n1 = parseInt(num1,10);
    let n2 = parseInt(num2,10);

    if(n1 && n2){
        return(n1 * n2);
    }
}
function division(num1,num2){
    let n1 = parseInt(num1,10);
    let n2 = parseInt(num2,10);

    if(n1 && n2){
        return(n1 / n2);
    }
}

module.exports = {add, subtraction, multiplication, division};