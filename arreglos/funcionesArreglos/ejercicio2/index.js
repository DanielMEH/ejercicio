// 3. Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de
// los cuadrados de sus elementos, luego, imprima el resultado.

let arrayCuadrados = [2,4,5,6,7,8,9];
console.log(arrayCuadrados)

let suma= 0;
let cuadrado = 0;
let resultado = 0;
function array(datos){

       for (let i = 0; i < datos.length; i++) {
           
        suma = suma + datos[i]
         cuadrado = suma;
         resultado = cuadrado * cuadrado
           
       }
}
array(arrayCuadrados)

console.log(`la suma es: ${suma} los cuadrados son: ${resultado}`)
