const carrusel = document.getElementById('carrusel');
const url = 'texto.json'

function getPrecept() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setInterval(() => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const text = data[randomIndex].precept;
                carrusel.textContent = text;
            }, 6000) //Lo hice cada 6 segundos para que se puedan leer los preceptos, que son muy importantes. 
        })
}

var audio = document.getElementById("background-audio");
var volumeControl = document.getElementById("volume-control");

// Control de volumen
volumeControl.addEventListener("click", function () {
    if (audio.muted) {
        audio.muted = false;
        volumeControl.innerHTML = "🔊";
    } else {
        audio.muted = true;
        volumeControl.innerHTML = "🔇";
    }
});


document.addEventListener('DOMContentLoaded', () => {
    getPrecept()
})