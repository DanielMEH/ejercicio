let arrayPromedio = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let datos = 0
let suma = 0
let aumento = 0
for (let i = 0; i < arrayPromedio.length; i++) {
    const element = arrayPromedio[i];

    for (let y = 0; y < element.length; y++) {
    
        suma = suma + element[y]
        datos++
        
    }

    
}

console.log("Promedio de todas las notas son :", suma / datos)