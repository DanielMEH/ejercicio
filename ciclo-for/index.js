
//ciclo formula// index es el iteradr o variable o control del for 
//el primer de los componentes (separados por;)
// del for es iterador con su valor inicial
// el segundo componente la cual sabemos del
// cuando dejara de cumpirce mientras se cumpla el ciclo
// se ejecutara 
// el tercer componente es la variacion del iterador, lo que 
// hara que el ciclo de ejecutarse alguna vez
//  for (let i = 0; i <= 10; i++) {
    
//     console.log(i);
    
// }

// // por ejemplo no se usa el iterador dentro del bloque for
// for (let i = 0; i < 200; i++) {
    
//     console.log("hola adsi 2469181");   
// }

// // un programa que pida 10 leytras a l usuario y las imprima 

// for (let i = 15; i < 26; i++) {
    
//     let letra = prompt("Ingrese letra");
//     console.log(letra);
    
// }

//* un programa que muestre la tabla del  7  del 10 al 50
// console.log("--------------------------------------------")
// console.log("--------------------------------------------")

// let tabla = parseInt(prompt("Tabla ingrese numero"))
// console.log("Tabla de multiplicación del: "+ tabla)
// for (let i = 10; i <= 50; i++) {
    
//     console.log(tabla+" X " +i +" = "+(tabla*i))
// }
// console.log("--------------------------------------------")

// for (let n = 0; n <= 100; n++) {
//     console.log(n)
    
// }
// console.log("--------------------------------------------")
// for (let i = 100; i >= 0; i--) {
//     console.log(i)
    
// }
// console.log("--------------------------------------------")

// 2. Cree un programa que imprima la tabla de multiplicar del 3, del 0 al 50. Use ciclo for. Use funciones.

// let tablaNumero = parseInt(prompt("Ingrese la tabla del 3"));

// function tablaMultiplicar($numero) {

//     for(let i = 10; i < 50; i++){
//         console.log($numero + " X "+ i +" = "+($numero*i))
//     }
// }
// console.log(tablaMultiplicar(tablaNumero))

//*. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones.


// let estudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes"))
// function calcularPromedio(estudiantesw){
//     for (let i = 0; i < estudiantesw; i++) {
//         let nota1= parseFloat(prompt("Ingrse 1 nota"));
//         let nota2 = parseFloat(prompt("Ingrese 2 nota"));
//         let nota3 = parseFloat(prompt("Ingrese 3 nota"));
//         let calificar = nota1+nota2+nota3;
//         let notaFinal = calificar/3;
//         console.log("la notas final es: "+notaFinal)
//     }
// }
// console.log(calcularPromedio(estudiantes))

// 4. Cree un programa que dado un número entero n, calcule su factorial(n!). Use ciclo for. Use funciones.


let factorial = parseInt(prompt("ingrese factorial"))

function numFactorial(numero){
    if (numero == 0 || numero == 1) {
        return 1;
    }
        let resultado =1;
        for (let i = 1; i <=numero; i++) {
            resultado=resultado*i
        }
         return (`el numero factorial de: ${numero} es: ${resultado}`)
    
}
console.log(numFactorial(factorial))

// g = 5 * (5 -1)
// .
// .
// .
// g = g  * (5 - 2)
// g = g  * (5 - 3)
// g = g  * (5 - 4)
