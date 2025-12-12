
// 1) GENERO 5 NUMERI CASUALI

let correctNumbers = [];

while (correctNumbers.length < 5) {
  let n = Math.floor(Math.random() * 50) + 1;

  // Evito numeri doppi
  if (correctNumbers.indexOf(n) === -1) {
    correctNumbers.push(n);
  }
}

// Mostro i numeri in pagina
let numbersList = document.getElementById("numbers-list");

for (let i = 0; i < correctNumbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = correctNumbers[i];
  numbersList.appendChild(li);
}


// 2) COUNTDOWN DI 30 SECONDI

let time = 20;
let countdown = document.getElementById("countdown");
countdown.textContent = time;

let timer = setInterval(function () {
  time--;
  countdown.textContent = time;

  if (time === 0) {
    clearInterval(timer);
    numbersList.classList.add("d-none");  
    document.getElementById("answers-form").classList.remove("d-none"); 
    countdown.textContent = "";
  }
}, 1000);


// 3) CONTROLLO RISPOSTE UTENTE

let form = document.getElementById("answers-form");
let inputs = document.querySelectorAll("#input-group input");
let message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // evita ricarica pagina

  let userNumbers = [];

  // prendo i numeri inseriti dall'utente
  for (let i = 0; i < inputs.length; i++) {
    userNumbers.push(Number(inputs[i].value));
  }

  // controllo quanti numeri ha indovinato
  let guessed = [];

  for (let i = 0; i < userNumbers.length; i++) {
    if (correctNumbers.indexOf(userNumbers[i]) !== -1) {
      guessed.push(userNumbers[i]);
    }
  }

  // messaggio finale
  message.textContent =
    "Hai indovinato " +
    guessed.length +
    " numeri: " +
    guessed.join(", ");
});
