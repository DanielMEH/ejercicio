let arrayDatos = [ [2, 4, 3], [2, 7, 9], [5, 3, 8] ];
let arrayCopia = []

for (let i = 0; i < arrayDatos.length; i++) {

    let  element = arrayDatos[i];
    let arraycop= []
    console.log(element)
    for (let d = 0; d < element.length; d++) {
        
        arraycop.push(element[d]+1)
        
        
    }
    arrayCopia.push(arraycop)
}
