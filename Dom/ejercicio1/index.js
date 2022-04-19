const commentContainer = document.querySelector(".commentContainer")

const div = document.createElement("div");

const input = document.createElement("input");
input.setAttribute("id","escribir");
input.setAttribute("placeholder","Ingese email");
input.setAttribute("type","email");

const text = document.querySelector(".text")
commentContainer.appendChild(div)
div.appendChild(input)

function inputData(e){
    const text = document.querySelector(".text")
    let datos = e.target.value   
    text.innerHTML= datos  
        
}
const mes = document.getElementById("mes");
for(let i = 0; i <=  12; i++){
    
    let option = document.createElement("option")
    option.value = i;
    option.innerText = i;

    mes.appendChild(option)

 }


input.addEventListener("keyup", inputData)
console.log(commentContainer)
