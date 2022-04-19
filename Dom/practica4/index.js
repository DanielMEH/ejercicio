const app = [...document.querySelectorAll("#app .datos")];


app.map( ap =>{
    ap.addEventListener("keyup",(e)=>{

        console.log(e.target.value)
    })
})