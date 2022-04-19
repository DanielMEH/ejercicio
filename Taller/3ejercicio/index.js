let continentes = prompt("Ingrese el nombre del continente, (América, Europa, Oceanía,  África, Asia )");

let convertitText= continentes.toUpperCase();
function pais(continente){

    switch (continente) {
        case "AMERICA":
           
            let america ={
                colombia: "Colombia",
                ecuador: "Ecuador",
                peru: "Peru",
                brazil: "Brazil",
                argentina: "Argentina"
            } 
            let paises = america
            console.log(`Estos son los paises del continente ${continente}:`)
            for (const continente in paises) {
                console.log(` ${paises[continente]}`);
                
            }
            break;

        case "EUROPA":
  
            let europa ={
                españa: "España",
                alemania: "Alemania",
                italia: "Italia",
                suecia: "Suecia",
                polonia: "Polonia"
            } 
            let paises1 = europa
            console.log(`Estos son los paises del continente ${continente}:`)
            for (const continente1 in paises1) {
                console.log(` ${paises1[continente1]}`);
                
            }
           break;
        case "ASIA":
            let asia ={
                china: "China",
                japon: "Japón",
                india: "India",
                mogolia: "Mogolia",
                afganistan: "Afganistan"
            } 
            let paises2 = asia
            console.log(`Estos son los paises del continente ${continente}:`)
            for (const continente2 in paises2) {
                console.log(` ${paises2[continente2]}`);
                
            }
           break;
           
        case "AFRICA":
            let africa ={
                argelia: "Argelia",
                egipto: "Egipto",
                camerun: "Camerun",
                nigeria: "Nigeria",
                senegal: "Senegal"
            } 
            let paises3 = africa
            console.log(`Estos son los paises del continente ${continente}:`)
            for (const continente3 in paises3) {
                console.log(` ${paises3[continente3]}`);
                
            }
           break;
        case "OCEANIA":
            let oceania ={
                australia: "Australia",
                nuezelanda: "Nueva zelanda",
                tonga: "Tonga",
                fiyi: "Fiyi",
                palau: "Palau"
            } 
            let paises4 = oceania
            console.log(`Estos son los paises del continente ${continente}:`)
            for (const continente4 in paises4) {
                console.log(` ${paises4[continente4]}`);
                
            }
           break;
        default:
            alert(`Este continente no existe: ${continente}`)
            break;
    }
}

pais(convertitText);