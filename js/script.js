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

//il gioco inizia quando click sul bottone 
button.addEventListener('click',() =>{

    //TODO compare il timer toglire il d-none 
    // il timer
    let countDownNum = 10;
    timer.innerText = countDownNum;
    
    //creo il timer
    const countDownTimer = setInterval(() =>{
    
        //blocco il timer allo 0
        if(countDownNum === 0){ 
            clearInterval(countDownTimer);
        }else{
        timer.innerText = --countDownNum;
        }
    }, 1000);

    //gneratore di numeri casuali
    const randomNums = []

    // ciclo che crea un array di X numeri casuali da 1 a 99
    while(randomNums.length < level){

        let randomNum = Math.floor(Math.random()*max)+1
        if(!randomNums.includes(randomNum)) randomNums.push(randomNum);
    }

    const userNums = [];

    while(userNums.length < randomNums.length){

        let userNum = parseInt(prompt('Dammi un numero'));
        if(!userNums.includes(userNum)) userNums.push(userNum);
    }
})