let arreglo1 = [[2,5], [3,5,9]];

// los elementos mas internos requieren  de dos indices para aceder a ellos , por lo tantoel arreglo es dimension 2
// para aceder al elemento "9", usamos indice

console.log("Elemento 9: ", arreglo1[1][2])
// ** ANIDAMIENTO : SE MIRA LA DIMENSION DEL ARREGLO,
// ** SI ES DE DIMENSION DOS USANDOS CICLOS FOR,
// ** SI ES DE DIMENSION 3 SE USAN 3 CICLOS FOR...
// En este caso necesitamos 2 ciclos f

for (let i = 0; i < arreglo1.length; i++) {
      
    console.log(arreglo1[i])

      for (let j = 0; j < arreglo1[i].length;  j++) {
          console.log(arreglo1[i][j])
          
      }
  
}


