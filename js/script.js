// -------------------------------------------------------------------------

const btnPalCeck = document.getElementById("btn-pal-check");
const resultTextPal = document.getElementById("result-text-pal");

btnPalCeck.addEventListener("click",function(){
  let isDataCorrect = false; 

  const textInputPal = document.getElementById("palindrom-text").value;
  console.log(textInputPal.length); 
  if(textInputPal.length > 0){
    isDataCorrect = true;
  }else{
    resultTextPal.innerHTML = `
      <p class="text-center bg-danger text-white">Inserire dati corretti!</p>
      `;
  }
  
  if(isDataCorrect){
    // Stampo se palindroma o meno
    if(isPalindroma(textInputPal)){
      resultTextPal.innerHTML = `
      <p class="text-center bg-success text-white" >${textInputPal} - è Palindroma</p>
      `;
    }else{
      resultTextPal.innerHTML = `
      <p class="text-center bg-danger text-white" >${textInputPal} - NON è Palindroma</p>
      `;
    }
  }
});

// -------------------------------------------------------------------------

const btnEvenOdd = document.getElementById("btn-result");
const resultEvenOdd = document.getElementById("result-even-odd");

btnEvenOdd.addEventListener("click",function(){
  let isDataCorrect = false;

  const textInputEvenOdd = document.getElementById("inputEvenOdd").value;
  const inputNumber = document.getElementById("even-odd-text").value;

  // Controllo se vengono inseriti dati validi
  if ((inputNumber>=1 && inputNumber <= 5) && parseInt(textInputEvenOdd) >= 0){
    isDataCorrect = true
  }else{
    resultEvenOdd.innerHTML = `
      <p class="text-center bg-danger text-white">Inserire dati corretti!</p>
      `;
  }


  if (isDataCorrect){
    const nRandom = randomizer(1,5);
    const sumNumber = sum(parseInt(inputNumber),nRandom);

    // Stampo i dati creati/calcolati
    resultEvenOdd.innerHTML = `
    <p class="text-center border rounded">Numero Rnd CPU: ${nRandom}</p>
    <p class="text-center border rounded">La somma è: ${sumNumber}</p>
    `;
  
    // Stampo se hai vinto o perso
    if (isEven(sumNumber) == textInputEvenOdd){
      resultEvenOdd.innerHTML += `
      <p class="text-center bg-success text-white">Hai vinto!</p>
      `;
    }else{
      resultEvenOdd.innerHTML += `
      <p class="text-center bg-danger text-white">Hai perso!</p>
      `;
    }
  }
});

// -------------------------------------------------------------------------

// ------------------------------------
// ------------  FUNCTION  ------------
// -----------  PALINDROMA  -----------
// ------------------------------------

/**
 * Inserisci una stringa, restituisce "true" o "false", se palindroma
 * @param {string} parola 
 * @returns
 */

// METODO 1 PALINDROMA
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

// METODO 1 REVERSE STRING
function reverseString(parola){
  let parolaNuova = "";
  for(let i = parola.length -1 ; i >= 0 ; i--){
   parolaNuova += parola.charAt(i);
  }
  return parolaNuova;
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------

/**
 * Restituisce l'inverso della stringa inserita
 * @param {string} parola 
 * @returns 
 */

// METODO 2 REVERSE STRING
function reverseString2(parola){
  return parola.split("").reverse().join("");
}

// ----------------------------------------------------------------


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