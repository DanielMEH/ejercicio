let numero1 =parseInt(prompt("ingrese primer numero"));
let numero2 =parseInt(prompt("ingrese segundo numero"));
let numero3 =parseInt(prompt("ingrese tercer numero"));



if (numero1 > numero2 && numero1 > numero3) {
    console.log("el numero mayor es: ", numero1)
} else if (numero2 > numero1 && numero2 > numero3){ 
    console.log("el numero mayor es: ", numero2)
}else if (numero3 > numero2 && numero3 > numero1){ 
    console.log("el numero mayor es: ", numero3)
}else if (numero3 == numero2 && numero3 == numero1){ 
    console.log("los numeros son iguales: ", numero1, ":", numero2, ":",  numero3 )
}