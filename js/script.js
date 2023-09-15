
const parola = prompt("Inserisci una parola:");

if(isPalindroma(parola)){
  console.log("Parola Palindroma");
}else{
  console.log("Parola non Palindroma");
}

// ------------------------------------
// ------------  FUNCTION  ------------
// -----------  PALINDROMA  -----------
// ------------------------------------

/**
 * Inserisci una stringa, restituisce "true" o "false", se palindroma
 * @param {string} parola 
 * @returns
 */

// METODO 1
function isPalindroma(parola){
  // richiamo la funziona per il reverse della stringa
  const parolaNuova = reverseString(parola);
  // controllo se le due parole sono palindrome
  if(parola.toLowerCase() === parolaNuova.toLowerCase()){
    return true
  }else{
    return false
  }
}

// ----------------------------------------------------------------

/**
 * Restituisce l'inverso della stringa inserita
 * @param {string} parola 
 * @returns 
 */
function reverseString(parola){
  let parolaNuova = "";
  for(let i = parola.length -1 ; i >= 0 ; i--){
   parolaNuova += parola.charAt(i);
  }
  return parolaNuova;
}

// ----------------------------------------------------------------

/**
 * Inserisci una stringa, restituisce "true" o "false", se palindroma
 * @param {string} parola 
 * @returns 
 */

// METODO 2
function isPalindroma2(parola){
  let result = true;
  let i = 0;

  for (let i = 0 ; i < parola.length / 2; i++){
    if(parola.charAt(i).toLowerCase() !== parola.charAt(parola.length - 1 - i).toLowerCase()){
      result = false;
    }else{
      result = true;
    }
  }

  return result;
}