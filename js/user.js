// chiedo all'utente il suo nome e il suo cognome
const nomeUtente = prompt("Inserisci il tuo nome");
const cognomeUtente = prompt("Inserisci il tuo cognome ");
let nomeCompleto = nomeUtente + cognomeUtente;
// chiedo all'utente il suo colore preferito
const userColor = (prompt("Inserisci il tuo colore preferito"))


console.log("Dato inserito:", userColor);
console.log("Tipologia:", typeof userColor);




// salviamo in una variabile un riferimento all'elemento HTML con id "nome_utente"
const h2NomeUtente = document.getElementById("nome_utente");
h2NomeUtente.innerHTML = `<strong> nome completo: </strong> ${nomeCompleto}`;

const h2coloreUtente = document.getElementById("colore_utente");
h2coloreUtente.innerHTML = `<strong> colore: </strong> ${userColor}`;


const paragrafo = document.getElementById("paragrafo");
paragrafo.innerHTML = `La Password generata è : ${nomeCompleto}${userColor}21.`;
