"use strict"
const ul = document.querySelector("ul");
//buena
function frames(){
    const animacion = ul.animate([
        //keysframes
        {transform:"TranslateY(0px)"},
        {transform:"TranslateY(-100px)"}
    ],{
        //opciones
        easing:"linear",
        iterations: 1,
        duration: 400 //milisegundos
    });
    return animacion.finished;
}

function displace(){
    frames()
    .then((res)=>{
        console.log(res);
        ul.appendChild(document.querySelectorAll("ul > li")[0])
    })
}

setInterval(() => {
    displace();
}, 1000);
