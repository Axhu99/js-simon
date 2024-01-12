//i puntatori
const button = document.querySelector('button')
const timer = document.getElementById('timer');
const nums = document.querySelector('.nums')

// variabili che si possono modificare in seguito
//! il livello di difficolta' oppure fino a che numero puo' stampare
const level = 4
const max = 99

/*  TODO 
    - sistemare i layout
    - togliere il bottone quando clicco start 
    - far vedere i randomNums fino a quando non arrivo a 0 con il countdown
    - fare diversi livelli
        - in base al livello aumentare i numeri e/o diminuire il tempo
    - mettere uno score e mettere lo stesso bottone con 'RIGIOCA'
 */

//bottone per far cominciare il gioco
button.innerText = 'Start game';

//il gioco inizia quando click sul bottone 
button.addEventListener('click',() =>{

    //TODO compare il timer toglire il d-none 
    // il timer
    let countDownNum = 5;
    timer.innerText = countDownNum;
    const userNums = [];
    const findNums = [];
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
    console.log(randomNums);

    // deve chiedermi i numeri dopo che il countdown e' finito
    setTimeout(() =>{
        while(userNums.length < randomNums.length){
        
            let userNum = parseInt(prompt('Dammi un numero'));
            if(!userNums.includes(userNum)) userNums.push(userNum);
        }
        
        // controlla i numeri dell'utente e quelli giusti vengono messi in un arry 
        for(let i = 0; i < userNums.length; i++){
            if(userNums.includes(randomNums[i])){
                findNums.push(randomNums[i]);
            }
        }
        console.log(findNums);
    },  (countDownNum+1) * 1000);
})