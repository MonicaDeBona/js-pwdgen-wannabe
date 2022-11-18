
let userName = prompt("Qual è il tuo nome?");

console.log(userName);


let userLastName = prompt("Qual è il tuo cognome?");

console.log(userLastName);


let userFavoriteColor = prompt("Qual è il tuo colore preferito?");

console.log(userFavoriteColor);


let stefanoAge = prompt ("Quanti anni ha Stefano?");

console.log(stefanoAge);


let currentYear = 2022;

console.log(currentYear);


let stefanoYearOfBirth = currentYear - stefanoAge;

console.log(stefanoYearOfBirth);


const userPsw = userName + userLastName + userFavoriteColor + stefanoYearOfBirth;

document.getElementById("userPsw").innerHTML = "La tua password è:" + " " + userPsw;