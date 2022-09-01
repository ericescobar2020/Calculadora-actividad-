const dividir = require("./funciones/dividir");
const multiplicar= require("./funciones/multiplicar");
const restar= require("./funciones/restar");
const sumar= require("./funciones/sumar");

const resultado = sumar (121,34);
console.log (resultado)


const resultado3= restar (500,200);
console.log(resultado3)

const resultado1= multiplicar (20,2);
console.log(resultado1)

const resultado2= dividir(3,0);
console.log(resultado2) 
////////////////////////

const accion = process.argv[2];

const num1= parseInt(process.argv[3])
const num2=parseInt(process.argv[4])

if(!accion|| !num1|| !num2) return; 

switch(accion ){
   
    case "sumar":{
        const resultado = sumar(num1,num2);
        console.log(num1,"+",num2,"=",resultado)
        break;
    }
    case "restar":{ 
     const resultado = restar(num1,num2);
    console.log(num1,"-",num2,"=",resultado)
    break;
    }
    case "multiplicar":{ 
        const resultado = multiplicar(num1,num2);
       console.log(num1,"*",num2,"=",resultado)
       break;
       }
     case "dividir":{ 
          const resultado = dividir(num1,num2);
          console.log(num1,"/",num2,"=",resultado)
          break;
       }
    }
