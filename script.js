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

document.addEventListener('DOMContentLoaded', (getPrecept))