let categoria=3;
let salario = 2000000000

switch (categoria) {
    case 1:
        console.log("tentra un aumento del 15%: \n", "$",salario*1.15);
        break;
        case 2:
        console.log("tentra un aumento del 25%: \n", "$",salario*1.25);
        break; 
        case 3:
            console.log("tentra un aumento del 45%: \n", "$",salario*1.45);
            break; 

    default:
        console.log("parece que hubo un error intenta de nuevo");
        break;
}