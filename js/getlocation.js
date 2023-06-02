const d = document,
n = navigator;


export default function geoLocation (id){

    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0,

    };
    const success = (position) =>{
        console.log(position);
    }


    const error = (err) => {
        $id.innerHTML = `<p><mark> Error ${err.code}:${err.message}</mark></p>`;

        console.log(`Error ${err.code}:${err.message}`);
    };

    n.geolocation.getCurrentPosition(success,error,options);

}