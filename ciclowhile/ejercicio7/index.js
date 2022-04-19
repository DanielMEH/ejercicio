let numero = parseFloat(prompt("Ingrese numero "))

let valor = 0
let promedio=0
let contador = 0;
while (numero != 0){


    promedio = promedio + numero;
    contador++;
    numero = parseInt(prompt("Ingrese nota"));

}

console.log("Promedio: ", promedio/contador);