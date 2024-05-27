let tiempo = 0; 
let intervalo;
let estaPausado = true;


function actualizarTiempo() {
  let minutos = Math.floor(tiempo / 60);
  let segundos = tiempo % 60;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;
  document.getElementById('tiempo').textContent = minutos + ":" + segundos;
}

// Iniciar el temporizador
document.getElementById('iniciar').addEventListener('click', function() {
  if (estaPausado) {
    estaPausado = false;
    intervalo = setInterval(function() {
      tiempo++;
      actualizarTiempo();
    }, 1000);
  }
});

// Pausar el temporizador
document.getElementById('pausar').addEventListener('click', function() {
  if (!estaPausado) {
    estaPausado = true;
    clearInterval(intervalo);
  }
});

// Reiniciar el temporizador
document.getElementById('reiniciar').addEventListener('click', function() {
  tiempo = 0;
  estaPausado = true;
  clearInterval(intervalo);
  actualizarTiempo();
});

// Inicializar el temporizador en 0
actualizarTiempo();