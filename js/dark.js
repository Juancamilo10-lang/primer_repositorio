//se llama el nombre de la clase del boton en el html


export default function darkmode (id){
     const $btnSwitch = document.getElementById(id);


//se agrega el evento click al boton con toggle
$btnSwitch.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
   $btnSwitch.classList.toggle("active");



    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode","true");
    } else{
        localStorage.setItem("dark-mode", "false");
    }

})        

if(localStorage.getItem("dark-mode")=== "true"){
    document.body.classList.add("dark");
    $btnSwitch.classList.add("active");
}else{
    document.bosy.classList.remove("dark");
}

//se llama el nombre de la clase del boton en el html




}