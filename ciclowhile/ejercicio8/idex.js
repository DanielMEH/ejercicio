let numero = parseInt(prompt("ingrese un numero"))

let control =1;
let suma = 0;
while (control <= numero) {
   
    suma = suma +  control * control 
    control++;
}

console.log("El cuadrado es: ", suma);