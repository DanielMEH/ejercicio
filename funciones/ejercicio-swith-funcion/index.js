// Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
// triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
let num1= parseInt(prompt("Ingrese numero"));
let num2= parseInt(prompt("Ingrese numero"));
let num3= parseInt(prompt("Ingrese numero"));

function angulo(ang1,ang2,ang3){

    let triangulo= ang1+ang2+ang3;
    
    if (triangulo == 180) {
        
        return "Si corresponde a un triangulo: "+triangulo;
    }else{
        
        return "NO  corresponde a un triangulo: "+triangulo;
    }

}
console.log(angulo(num1,num2,num3));

let num1= parseInt(prompt("Ingrese numero"));
let num2= parseInt(prompt("Ingrese numero"));
let num3= parseInt(prompt("Ingrese numero"));

function angulo(ang1,ang2,ang3){
    let triangulo= ang1+ang2+ang3;
    switch (triangulo) {
        case 180:
            return "Si corresponde a un triangulo: "+triangulo
            default:
            return "No corresponde  aun triangulo: "+triangulo
    }

}
console.log(angulo(num1,num2,num3));

// 2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
// y otra con estructura switch-case.
let numero = parseInt(prompt("Ingrese numero"));

function par(numero) {

   numero%2 == 0
    if (numero%2 == 0) {
        return "Es par: "+numero;
    }else{
        return "Es impar: "+numero
    }
    
}
console.log(par(numero))

let numero = parseInt(prompt("Ingrese numero"))
function par(numero) {

  let dato = numero%2;
   switch (dato) {
       case 0:
           return "Es par: "+numero;
       default:
        return "Es impar: "+numero;
   }
    
}
console.log(par(numero))
// Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
// condicionales y otra con estructura switch-case.

let numero = parseInt(prompt("Ingrese numero"))
function par(numero){ 

    if (numero%5 == 0) {
        return "Es par: "+numero;
    }else{
        return "Es impar: "+numero
    }
}
console.log(par(numero))


let numero = parseInt(prompt("Ingrese numero"));
function par(numero){ 
    let dato = numero%5
    switch (dato) {
        case 0:
            return "Es par: "+numero;
             
            default:
          return "Es impar: "+numero
    }
}
console.log(par(numero))
// 4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
// condicionales y otra con estructura switch-case.

let numeroPrimo = parseInt(prompt("Ingrese un numero"));

function numeroP(numeroPrimo){

    if (numeroPrimo == 2 || numeroPrimo == 3 || numeroPrimo == 5|| numeroPrimo == 7 || numeroPrimo== 11 || numeroPrimo== 13) {
        
        return "el numero es primo: "+numeroPrimo;
    }else{
        return " no es primo: "+numeroPrimo
    }
}

console.log(numeroP(numeroPrimo))

let numeroPrimo = parseInt(prompt("Ingrese un numero"));

function numeroP(numeroPrimo){

   switch (numeroPrimo) {
       case 2:
           return "El numero es primo: "+numeroPrimo;
        case 3:
            return "El numero es primo: "+numeroPrimo;
        case 5:
            return "El numero es primo: "+numeroPrimo;
        case 7:
            return "El numero es primo: "+numeroPrimo;
        case 11:
            return "El numero es primo: "+numeroPrimo;
        case 13:
            return "El numero es primo: "+numeroPrimo;
       default:
           return "No es primo: "+ numeroPrimo;
   }
}

console.log(numeroP(numeroPrimo))