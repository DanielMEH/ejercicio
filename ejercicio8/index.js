let angulo1= parseInt(prompt("ingrese el primer angulo del triangulo"));
let angulo2= parseInt(prompt("ingrese el segundo angulo del triangulo"));
let angulo3 =parseInt(prompt("ingrese el tercer angulo del triangulo"))


let trianguloResult= angulo1+angulo2+angulo3;

let calcular = trianguloResult == 180;
let verificar=  trianguloResult > 180 && trianguloResult < 180
let dato= verificar==true
console.log("el triangulo es correcto? ", calcular,"el triangulo no corresponde", !dato);