
let userName = prompt("Qual è il tuo nome?");

console.log(userName);


let userLastName = prompt("Qual è il tuo cognome?");

console.log(userLastName);


let userFavoriteColor = prompt("Qual è il tuo colore preferito?");

console.log(userFavoriteColor);


const userPsw = userName + userLastName + userFavoriteColor;

document.getElementById("userPsw").innerHTML = "La tua password è:" + " " + userPsw;