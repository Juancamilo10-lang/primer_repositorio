const d = document;


const boton = d.querySelector('#boton');
const menu = d.querySelector('#menu');

boton.addEventListener ("click",()=>{
    console.log("me diste clic");
    menu.classList.toggle('hidden')
} )