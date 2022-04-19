let divisible = parseInt(prompt("Ingrse un numero"));

let divisib=divisible%5;

switch (divisib) {
    case 0:
        console.log("es devisible de cinco ", divisible);
        break;

    default:
         console.log(" no es devisible de cinco ", divisible);
        break;
}

