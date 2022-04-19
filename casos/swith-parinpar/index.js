let numeroParInpar= parseInt(prompt("Ingrse un numero"));

let formula= numeroParInpar%2;

switch (formula) {
    case 0:
        console.log("el numero es par",numeroParInpar);
        break;
        default:
        console.log("el numero inpar",numeroParInpar);
        break;
}