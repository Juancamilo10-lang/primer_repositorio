const d = document,
n = navigator;


d.getElementById("webcam");

const video = d.getElementById("webcam");
if(n.mediaDevices.getUserMedia){
    n.mediaDevices
    .getUserMedia({video:true,audio:true})
    .then((stream) => {
        console.log(stream);
        video.srcObject = stream;
        video.play();
    })
    .catch((err) => {
        video.insertAdjacentHTML("beforebegin",`<p><mark>${err}</mark></p>`);
        console.log(`sucedio algo inesperado ${err}`);

    }
    
)}