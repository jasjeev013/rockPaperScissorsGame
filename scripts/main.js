import { score,updateScore,computerMove } from "./score.js";

function getScore(){
    document.querySelector('.js-displayScore').innerHTML=`My Score: ${score.player} Computer Score: ${score.computer}`;
}


let playerMove = document.querySelectorAll('.js-playerMove');
for (let i = 0; i < playerMove.length; i++) {
    let player = playerMove[i];
    player.addEventListener('click',()=>{
        updateScore(player.dataset.move,computerMove());
        getScore();
    })
}
document.querySelector('.js-reset').addEventListener('click',()=>{
    score.player = 0;
    score.computer = 0;
    score.tie = 0;
    localStorage.removeItem('scores');
    getScore();
})
let isAutoPlaying = false;
let intervalId;
document.querySelector('.js-autoplay').addEventListener('click',()=>{
 
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            updateScore(computerMove(),computerMove());
            getScore();
        },100);
        isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying=false;
    }
    
});



