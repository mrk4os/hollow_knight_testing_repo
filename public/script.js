
const carrusel = document.getElementById('carrusel');
const url = 'texto.json';

function getPrecept() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setInterval(() => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const text = data[randomIndex].precept;
                carrusel.textContent = text;
            }, 6000); // Lo hice cada 6 segundos para que se puedan leer los preceptos, que son muy importantes.

            customizeAudioControls();
        });
}

function customizeAudioControls() {
    const background_audio = document.getElementById('background-audio');

    background_audio.removeAttribute('controls');

    const playButton = document.createElement('button');
    playButton.textContent = 'Play Himno';
    playButton.addEventListener('click', function () {
        if (background_audio.paused) {
            background_audio.play();
            playButton.textContent = 'Pausa';
        } else {
            background_audio.pause();
            playButton.textContent = 'Play himno';
        }
    });

    // Agrega el botón personalizado después del elemento de audio
    background_audio.parentNode.insertBefore(playButton, background_audio);
}

document.addEventListener('DOMContentLoaded', getPrecept);
