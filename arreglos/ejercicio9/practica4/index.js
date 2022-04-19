let array = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

let inicio = 0;

while (inicio < array.length) {
    
    let aumento = 0;
    while (aumento < array[inicio].length) {
        console.log(array[inicio][aumento])
        aumento++

    }
    inicio++;
}

