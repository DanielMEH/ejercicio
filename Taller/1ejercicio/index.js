let producto = prompt("Ingrese el nombre del producto")

let productos = {
    arroz: 1700,
    lenteja: 1500,
    vino: 5000,
    aceite: 10500,
    maiz: 5400
}


let llave = Object.keys(productos)


switch (producto) {
    case llave[0]:
        alert(`nombre: ${llave[0]} Precio: ${productos[llave[0]]}`)
        break;

    case llave[1]:
        alert(`nombre: ${llave[1]}  Precio: ${productos[llave[1]]}`)
       
       break;
    case llave[2]:
        alert(`nombre: ${llave[2]} Precio: ${productos[llave[2]]}`)
       
       break;
    case llave[3]:
        alert(`nombre: ${llave[3]}  Precio: ${productos[llave[3]]}`)
       
       break;

    case llave[4]:
        alert(`nombre: ${llave[4]}  Precio: ${productos[llave[4]]}`)
       
       break;
    default:
        alert("Este producto no existe")
        break;
}




// for (const key in productos) {
//     console.log("llave",key);
//     if (producto == key) {
//         console.log(producto)
//         alert("si existe");
        
//     }else{
//         alert("no existe")
//     }
//     // console.log("Valor", productos[key]);
    
// }