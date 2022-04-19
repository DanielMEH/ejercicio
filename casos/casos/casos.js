//los casos nos permiten evaluar el valor de la
//que pueden tomr un variable p.e., y tomar
//diferentes desiciones basados en este valor.
//los casos son una forma elegante y legible para
//de reemplazar un bloque de condicionales


//version if
let estrato = parseInt(prompt("ingrese estrato"));
/*
if (estrato == 1){console.log("su estrato es 1");};
if (estrato == 2){console.log("su estrato es 2");};
if (estrato == 3){console.log("su estrato es 3");};
//declaramos una varibles auxiliar
let aux = 60;
if (estrato == 4){console.log("su estrato es 4");};
if (estrato == 5){console.log("su estrato es 5");};
if (estrato == 6){console.log("su estrato es 6");};
*/




//version switch-case
switch (estrato){
    case 1:
        console.log("su estrato es 1");
        break;

    case 2:
        console.log("su estrato es 2");
        break;
        
    case 3:
        console.log("su estrato es 3");
        break;

    case 4:
        console.log("su estrato es 4");
        break;
    
            
    case 5:
        console.log("su estrato es 4");
        break;

            
    case 6:
        console.log("su estrato es 4");
        break;

//en caso de que ninguno se cumpla...
    default:
        console.log("ingrese un estrato valido");
        break;


    }
    