let angulo1 = parseInt(prompt("ingrese el angulo1"));
let angulo2 = parseInt(prompt("ingrese el angulo2"));
let angulo3 = parseInt(prompt("ingrese el angulo3"));
let triangulo = angulo1 + angulo2 + angulo3;

if (triangulo == 180){
    console.log("corresponde a un triangulo : ", triangulo);
}else{
    console.log("No corresponde a un triangulo : ", triangulo);
}
