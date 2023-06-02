document.getElementById("button-up").addEventListener("click",barraanimacion);

function barraanimacion (){

    const posicion = document.documentElement.scrollTop;
    if(posicion > 0){
        window.requestAnimationFrame(barraanimacion);
        window.scrollTo(0, posicion - (posicion /10));
    }
}


buttonUp = document.getElementById("button-up");
 
window.onscroll = function (){
    const scroll = document.documentElement.scrollTop;
    if(scroll > 500){
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500){
        buttonUp.style.transform ="scale(0)";
    }
}