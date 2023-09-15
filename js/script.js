
const btnPalCeck = document.getElementById("btn-pal-check");
const resultTextPal = document.getElementById("result-text-pal");

btnPalCeck.addEventListener("click",function(){
  const textInputPal = document.getElementById("palindrom-text");
  resultTextPal.classList.add("py-3");
  
  if(isPalindroma(textInputPal.value)){
    resultTextPal.innerHTML = "La parola è Palindroma";
    resultTextPal.classList.remove("bg-danger");
    resultTextPal.classList.add("bg-success");
  }else{
    resultTextPal.innerHTML = "La parola NON è Palindroma";
    resultTextPal.classList.remove("bg-success");
    resultTextPal.classList.add("bg-danger");
  }
  textInputPal.value = "";
});


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

// ------------------------------------
// ------------  FUNCTION  ------------
// ----------  PARI/DISPARI  ----------
// ------------------------------------

/**
 * Restituisce true se pari, false se dispari
 * @param {number} number 
 * @returns 
 */
function isEven (number){
  if(number %2 === 0){
    return true;
  }else{
    return false;
  }
}

// ----------------------------------------------------------------

/**
 * Restituisce la somma di due numeri
 * @param {number} numberA 
 * @param {number} numberB 
 * @returns 
 */
function sum(numberA, numberB){
  return numberA + numberB;
}

// ----------------------------------------------------------------

/**
 * Restituisce un valore randomico compreso tra min e max estremi inclusi
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */

function randomizer(min , max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}