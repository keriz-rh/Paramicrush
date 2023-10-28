// Función que mueve un elemento (elm) a una posición aleatoria en la ventana
function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

// Obtén referencias a los elementos del DOM
let btnSi = document.getElementById("btn_si");          // Botón "Sí"
let btnNo = document.getElementById("btn_no");          // Botón "No"
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];  // Div con clase "modo_sexo"

// Agrega un evento 'mouseenter' al botón "No" que mueve el botón a una posición aleatoria
btnNo.addEventListener('mouseenter', function(e) {
    moverPosicionRandom(e.target);
});

// Agrega un evento 'click' al botón "Sí" que muestra una alerta y reproduce un audio
btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que sí chiquibeibi');
    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\Modo_sex.mp3');   // Reproduce un archivo de audio
    cancion.play();
});
