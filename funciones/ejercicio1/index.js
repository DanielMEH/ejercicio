// Cree un programa que tome la base y la altura de un triángulo e imprima su área

//** */ let altura = parseInt(prompt("Ingrese la altura "))
//** */ let base = parseInt(prompt("Ingrese la base "));

//** */ function AreaTriangulo(a,b){
//** */     let area = a*b/2 
//** */     return area;
//** */ }
//** */ let resultadoArea= AreaTriangulo(altura,base);
//* console.log("el Area es igual:",resultadoArea)

// 2. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.

let radioCirculo = parseFloat(prompt("Ingrse el radio"));
let radioPrimetro= parseInt(prompt("Ingrse el perimetro"));


function radioNumero(radio1){

    let radioCirculo1= 3.1415*radio1*radio1;
    return radioCirculo1;
}

let valor= radioNumero(radioCirculo);
console.log("el radio es: ", valor)

function numeroPerimetro(perimetro1){
    let perimetro = 2*3.1415*perimetro1;
    return perimetro;

}
let valor1= numeroPerimetro(radioPrimetro);
console.log("el perimetro es es: ", valor1)
let area= 3.1415 * radioCirculo*radioCirculo;
console.log("el area de radio es: ", area) 

let radio = parseInt(prompt("R"))

let perimetro = 2*3.1415*radioPrimetro;


console.log("el perimetro es: ", perimetro);
// 3. Cree un programa que tome el lado de un cubo e imprima su volumen.
let lado = parseFloat(prompt("Ingrse el aldo"));

function ladoNumero(lado){

    let ladoVolumen= lado*lado*lado;
    return ladoVolumen;
}

let valor3 = ladoNumero(lado);
console.log("el cubo es: ", valor3)
// *4. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de
// 19%.

let precioProducto= parseFloat(prompt("Ingrse el valor del producto"));

function calcularIva(producto){

    let resultado = producto*1.19;
    return resultado;

}

let valor4 = calcularIva(precioProducto);
console.log("el precio es:", valor4,)

// **  */ 5. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un
// **  */ descuento del 10%.

let producto1 = parseFloat(prompt("Ingrse el producto"))

function descuentoProducto(precio){

    let resultado = precio - precio*0.10;

    return resultado
}

let valor4 = descuentoProducto(producto1);
console.log("el descuento es del: ", valor4);
// 6. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.

let cantidad = parseInt(prompt("ingrse el primer numero"))
let porcentaje= parseInt(prompt("ingrse el segundo numero"))

function numeroPorsentaje(numero1,numero2){

    let calcular= numero1*numero2/100
    return calcular
}

let valor= console.log("el valor es ", numeroPorsentaje(cantidad,porcentaje),"%")

// 7. Cree un programa que tome un número real e imprima su valor absoluto.
let numeroR = parseFloat(prompt("ingrse un numero"));
function numeroAbsolute(valor){
    if(valor <  0){

        return valor*-1
    }else{
        return "el valor es.", valor;
    }

}

console.log("el resultado es: ",numeroAbsolute(numeroR));

// . Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
// edad o no
let edadNumero = parseInt(prompt("Ingrse edad"));


function edad(edadA){

    if (edadA >= 18){
        return "eres mayor de edad: "+edadA
    }else{
        return "eres menor de edad: "+edadA
    }
}

console.log(edad(edadNumero))

// 2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
// pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
// mencionados y muestre si el producto paga IVA o no.

let ingreseProducto= prompt("Ingrese producto");

function producto(datos){

    if (datos == "lentajas") {

        return "No  paga iva: "+datos;

    }else if (datos == "arroz"){

        return "No ppaga iva: "+datos;

    }else if (datos == "crema"){

        return "Si  paga iva: "+datos;

    }else if (datos == "vino"){

        return "Si  paga iva: "+datos;
    }
}
console.log(producto(ingreseProducto));

// 3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
// también se debe mostrar al usuario.

let numero1= parseInt(prompt("Ingrese primer numero"));
let numero2 = parseInt(prompt("Ingrse segundo numero"))

function numeros(dato1,dato2){

    if (dato1 > dato2) {
        
        return ("el numero mayor es: "+dato1);
    }else if(dato2 > dato1){

        return ("el numero mayor es: "+dato2);
    }else if (dato1 == dato2){
        
        return ("Los numeros son iguales: "+dato1+":"+dato2);
    }
}
console.log(numeros(numero1, numero2))

// 4. Cree un programa que reciba tres números y muestre el mayor. En caso de que los números sean iguales
// también se debe mostrar al usuario.

l