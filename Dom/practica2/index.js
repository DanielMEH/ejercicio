const buttom = document.querySelectorAll(".buttom")
const color = document.querySelector(".color")
buttom.forEach( e =>{

    e.addEventListener("click", (e)=>{

        switch (e.target.name) {
            case "negro":
                color.style.background ="#000"
                color.style.color ="#fff"
                break;
                case "rojo":
                    color.style.background ="red"
                    color.style.color ="#fff"
                    break;

                    case "azul":
                color.style.background ="blue"
                color.style.color ="#fff"
                break;

                case "verde":
                color.style.background ="green"
                color.style.color ="#fff"
                break;
            default:
                break;
        }
    })
})