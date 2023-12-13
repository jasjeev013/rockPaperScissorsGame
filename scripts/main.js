import { score,updateScore,computerMove } from "./score.js";

function getScore(res){
    let displayWin = document.querySelector('.js-winName');
    if(res == 0){
        displayWin.innerHTML='Its a tie.'
    }else if(res==1){
        displayWin.innerHTML='You won.'
    }else if(res==2){
        displayWin.innerHTML='Comp won.'
    }else{
        displayWin.innerHTML=' - - '
    }
    document.querySelector('.js-scoreText').innerHTML=`SCORE: ${score.player}`;
}


let playerMove = document.querySelectorAll('.js-playerMove');
for (let i = 0; i < playerMove.length; i++) {
    let player = playerMove[i];
    player.addEventListener('click',()=>{
        let res = updateScore(player.dataset.move,computerMove());
        getScore(res);
    })
}
document.querySelector('.js-reset').addEventListener('click',()=>{

    score.player = 0;
    score.computer = 0;
    score.tie = 0;
    localStorage.removeItem('scores');
    getScore(4);
    updateHTML('reset','reset');
})
let isAutoPlaying = false;
let intervalId;
document.querySelector('.js-autoplay').addEventListener('click',()=>{
 
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            let res = updateScore(computerMove(),computerMove());
            getScore(res);
        },100);
        isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying=false;
    }
    
});


export function updateHTML(player,computer){
    let playerImg = document.querySelector('.js-your-choice');
    let compImg = document.querySelector('.js-comp-choice');
    if(player=='Rock'){
        playerImg.innerHTML=`<img src="/images/gameplay_bar/rock_circle.png" alt="circle" height="300px" width="300px">`;
    }else if(player=='Scissors'){
        playerImg.innerHTML=`<img src="/images/gameplay_bar/scissor_circle.png" alt="circle" height="300px" width="300px">`;
    }else if(player == 'Paper'){
        playerImg.innerHTML=`<img src="/images/gameplay_bar/paper_circle.png" alt="circle" height="300px" width="300px">`;
    }else{
        playerImg.innerHTML=`<img src="/images/gameplay_bar/circle.png" alt="circle" height="300px" width="300px">`;
    }
    if(computer=='Rock'){
        compImg.innerHTML=`<img src="/images/gameplay_bar/rock_circle.png" alt="circle" height="300px" width="300px">`;
    }else if(computer=='Scissors'){
        compImg.innerHTML=`<img src="/images/gameplay_bar/scissor_circle.png" alt="circle" height="300px" width="300px">`;
    }else if(computer == 'Paper'){
        compImg.innerHTML=`<img src="/images/gameplay_bar/paper_circle.png" alt="circle" height="300px" width="300px">`;
    }else{
        compImg.innerHTML=`<img src="/images/gameplay_bar/circle.png" alt="circle" height="300px" width="300px">`;
    }
}



