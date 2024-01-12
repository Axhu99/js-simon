//i puntatori
const button = document.querySelector('button')
const timer = document.getElementById('timer');
const nums = document.querySelector('.nums')

// variabili che si possono modificare in seguito
//! il livello di difficolta' oppure fino a che numero puo' stampare
const level = 4
const max = 99

//bottone per far cominciare il gioco
button.innerText = 'Start game';

// il timer
timer.innerText = 10;

//gneratore di numeri casuali
const randomNums = []

// ciclo che crea un array di X numeri casuali da 1 a 99
while(randomNums.length < level){

    let randomNum = Math.floor(Math.random()*max)+1
    if(!randomNums.includes(randomNum)) randomNums.push(randomNum);
}
