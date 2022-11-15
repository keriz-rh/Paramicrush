function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeinght) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWindht) + 'px';
}


let btnSI = document.getElementById('btn_si')
let btnNo = document.getElementById('btn_no')
let divModoSexo = document.getElementsByClassName("modo_sexo")[0]

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) })

btnSI.addEventListener('click', function(e) {
    alert('Sabia que dirias que si chiquibeibi')
    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\Modo_sex.mp3');
    cancion.play();
})
