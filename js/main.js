// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23

// chiedere il nome all'utente 
let askName = prompt("inserisci qui il tuo nome");

console.log(askName);

document.getElementById("name").innerHTML = askName

// chiedere il cognome all'utente 
let askSurname = prompt("inserisci qui il tuo cognome");

console.log(askSurname);

document.getElementById("surname").innerHTML = askSurname

// chiedere il colore preferito all'utente
let askColor = prompt("inserisci qui il tuo colore preferito");

console.log(askColor);

document.getElementById("color").innerHTML = askColor

// inserire il 23
const insertNumber = "23";

// mettere tutto insieme per ricavare la password

// let result = askName + askSurname + askColor + insertNumber

let result = `${askName}${askSurname}${askColor}23
`

// mostrare la password in pagina

console.log(result);

document.getElementById("password").innerHTML = result

