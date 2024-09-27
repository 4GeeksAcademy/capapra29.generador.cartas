/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generarCarta();
  document.getElementById("boton").addEventListener("click", generarCarta);
  setInterval(generarCarta, 3000);
};

function generarCarta() {
  let cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K"
  ];
  let cardPintas = ["♦", "♥", "♠", "♣"];

  function elegirAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const valorAleatorio = elegirAleatorio(cardValues);
  document.querySelector(".value").innerHTML = valorAleatorio;

  const pintaRandom = elegirAleatorio(cardPintas);
  document.getElementById("pinta").innerHTML = pintaRandom;
  document.getElementById("palo").innerHTML = pintaRandom;

  if (pintaRandom === "♦" || pintaRandom === "♥") {
    document.getElementById("pinta").style.color = "red";
    document.getElementById("palo").style.color = "red";
  } else {
    document.getElementById("pinta").style.color = "black";
    document.getElementById("palo").style.color = "black";
  }
}
