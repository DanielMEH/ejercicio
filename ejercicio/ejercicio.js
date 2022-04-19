
let estrato=parseInt(prompt("ingrese su estrato"));
let sisben=parseInt(prompt("ingrese su sisben"));

// if ( estrato < 2 &&  sisben < 3) {
//     alert("tiene derecho a subsidio.");
// }else{
//     alert("no tiene derecho a subsidio.")
// }

let resultado = estrato <2 && sisben <3;
console.log("el resultado es: ",resultado)