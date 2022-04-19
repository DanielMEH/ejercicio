// ?1. Cree un programa que use una función de un parámetro, a la cual se le pase como argumento un arreglo, de
// ?tal manera que la función retorne la longitud(número de elementos) del arreglo.

let arrays= ["daniel","ospina","computador","salon"];

function arrayDatos(datos){

    let datosArray = datos.length
    return datosArray
}


console.log(arrayDatos(arrays))