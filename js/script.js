// 1. Salviamo la parola inserita in una variabile

const parola = prompt("Inserisci una parola:").toLowerCase();

// 2. creo un ciclo che cicla per la lunghezza della stringa
let parolaNuova = "";


// - genero una nuova stringa componendola partendo dai caratteri finali verso l'inizio
for(i = parola.length -1 ; i >= 0 ; i--){
  parolaNuova += parola.charAt(i);
  console.log(parolaNuova);
}

// - comparo la stringa iniziale con quella nuova, se sono uguali la parola è palindroma e stampo il risultato

if(parola == parolaNuova){
  console.log("La parole è palindroma");
}else{
  console.log("La parola non è palindroma");
}