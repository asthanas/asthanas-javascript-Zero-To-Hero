'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore=0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    // when no number is provided
    if (!guess) {
        //document.querySelector('.message').textContent = '⛔No number!';
        displayMessage('⛔No number!');

    // when correct number is provided
    } else if (guess == secretNumber){
        //document.querySelector('.message').textContent = '🎉Correct number';
        displayMessage('🎉Correct number');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width='30rem';

        if (score > highScore ){
            highScore = score;
            document.querySelector('.highscore').textContent=highScore;
        }

    // when guess is not correct
    // using turnery operator  
    } else if(guess !== secretNumber){
        if(score >  1) {
            //document.querySelector('.message').textContent = guess > secretNumber ? '💥Too High' : '💥Too Low';
            displayMessage(guess > secretNumber ? '💥Too High' : '💥Too Low');
            score--;
            document.querySelector('.score').textContent = score;
    } else {
        //document.querySelector('.message').textContent = '🤷‍♀️ You lost the game !'
        displayMessage('🤷‍♀️ You lost the game !');
        document.querySelector('.score').textContent = 0;
        }
    }
    // //when high number is provided
    // else if (guess >  secretNumber){
    //     if(score >  1) {
    //         document.querySelector('.message').textContent = '💥Too High number';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    // } else {
    //     document.querySelector('.message').textContent = '🤷‍♀️ You lost the game !'
    //     document.querySelector('.score').textContent = 0;
    //     }

    // //when low number is provided   
    // } else if (guess < secretNumber){
    //     if(score >  1) {
    //         document.querySelector('.message').textContent = '💥Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = ' 🤷‍♀️You lost the game !'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

//reset functionality on clicking again
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber ;

    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width='15rem';
})