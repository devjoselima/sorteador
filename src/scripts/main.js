document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteador').addEventListener('submit', function(e){
        e.preventDefault()
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroAleatorio = Math.random() * numeroMax;
        numeroAleatorio = Math.floor(numeroAleatorio + 1)

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.result').style.display = 'block';
    })
})