// 3. Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de
// los cuadrados de sus elementos, luego, imprima el resultado.

let array = [5,5];

let suma = 0;
let cuadrado = 0
function cuadradoDatos(datos){

    for(let i = 0; i < datos.length; i++){ 
    suma = suma + datos[i] * datos[i];
   
    

}

    return suma
}

console.log(cuadradoDatos(array),` la suma de los cuadrados es: ${suma}`)