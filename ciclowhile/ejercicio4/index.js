let tablaMultiplicar = parseInt(prompt("Ingrese un numero"))
let number= 50;
let tabla = 1
function tablaMult(numberT){

    while (number >= tabla) {

        console.log(numberT, " X ",tabla, " = ", (numberT*tabla));
        tabla++
       
    }
    
}
console.log(tablaMult(tablaMultiplicar));