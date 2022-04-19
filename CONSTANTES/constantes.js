let articulo = parseFloat(prompt("ingrese un precio"));
const IVA = 0.19;
let precioIva =articulo+articulo*IVA;
document.write("precio: "+precioIva+"<br>");
let percioFinal= articulo+precioIva;
document.write("su totalidad a pagar es de: ",percioFinal);