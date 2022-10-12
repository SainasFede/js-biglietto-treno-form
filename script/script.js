document.querySelector('#btn-input-utente').addEventListener('click', function() {

  // Data Layer
  let output;
  const kmUtente = document.querySelector('#kmUtente').value;
  document.getElementById('km-utente').innerHTML = kmUtente;
  const anniUtente = document.querySelector('#anniUtente').value;
  const costoPerKm = 0.21
  const nomeUtente = document.getElementById('nomeUtente').value;
  document.getElementById('nome-utente').innerHTML = nomeUtente;

  // Logic
  let costoBenzina = kmUtente * 0.21
  const scontoAnziani = costoBenzina * 0.40
  const scontoMinorenni = costoBenzina * 0.20

  if (anniUtente >= 65) {
    costoKmUtente = ((kmUtente * 0.21) - scontoAnziani)
  } else if (anniUtente <= 18) {
    costoKmUtente = ((kmUtente * 0.21) - scontoMinorenni)
  } else {
    costoKmUtente = kmUtente * 0.21
  }

  // Presentation
  output = `${costoKmUtente.toFixed(2)} mon. d'oro`
  document.getElementById('costobiglietto').innerHTML += output;

});

document.querySelector('#btn-reset-utente').addEventListener('click', function() {
  document.querySelector('#kmUtente').value = '';
  document.querySelector('#anniUtente').value = '';
  document.querySelector('#nomeUtente').value = '';
  document.getElementById('costobiglietto').innerHTML = ' ';
  document.getElementById('nome-utente').innerHTML = ' ';
  document.getElementById('km-utente').innerHTML = ' ';
});