
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





// const carrusel = document.getElementById('carrusel');
// const url = 'texto.json'

// function getPrecept() {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             setInterval(() => {
//                 const randomIndex = Math.floor(Math.random() * data.length);
//                 const text = data[randomIndex].precept;
//                 carrusel.textContent = text;
//             }, 6000) //Lo hice cada 6 segundos para que se puedan leer los preceptos, que son muy importantes.
//         })
// }

// const background_audio = document.getElementById('background-audio');

// // Remueve los controles existentes
// background_audio.removeAttribute('controls');

// // Personaliza el control de audio utilizando eventos
// background_audio.addEventListener('loadedmetadata', function () {
//     // Elimina la duración del audio
//     background_audio.removeAttribute('controls');

//     // Añade un botón personalizado de reproducción/pausa
//     const playButton = document.createElement('button');
//     playButton.textContent = 'Reproducir';
//     playButton.addEventListener('click', function () {
//         if (background_audio.paused) {
//             background_audio.play();
//             playButton.textContent = 'Pausa';
//         } else {
//             background_audio.pause();
//             playButton.textContent = 'Reproducir';
//         }
//     });
//     background_audio.parentNode.insertBefore(playButton, background_audio);
// });

// document.addEventListener('DOMContentLoaded', (getPrecept))