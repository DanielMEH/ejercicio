let numero1 =parseInt(prompt("ingrese primer numero"));
let numero2 =parseInt(prompt("ingrese segundo numero"));

if (numero1 > numero2 ) {
    console.log("el numero mayor es: ", numero1)
} else if (numero2 > numero1){
    console.log("el numero mayor es: ", numero2)
}else if (numero1 == numero2){
    console.log("los numeros son iguales: ", numero1, ":", numero2)
}
