// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23

// chiedere il nome all'utente 
let askName = prompt("inserisci qui il tuo nome");

// chiedere il cognome all'utente 
let askSurname = prompt("inserisci qui il tuo cognome");

// chiedere il colore preferito all'utente
let askColor = prompt("inserisci qui il tuo colore preferito");

// inserire il 23
const insertNumber = "23";

// mettere tutto insieme per ricavare la password
let result = askName + askSurname + askColor + insertNumber

// mostrare la password in pagina

console.log(result);

document.getElementById("password").innerHTML = result

