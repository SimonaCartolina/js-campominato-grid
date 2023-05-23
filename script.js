/* attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */
const ulElement= document.querySelector('ul');

function createElement(tagName, classList){
    const liElement= document.createElement('li');
    liElement.classList.add('liElement');
    liElement.innerHTML= 'This is a li';
    return liElement;
}



for(let i=0; i<100; i++){
    liElement= createElement('li');
    ulElement.appendChild(createElement('li', 'liElement'));
}


/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/
