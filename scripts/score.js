export let score =JSON.parse(localStorage.getItem('scores'));
if(score==null){
    score = {
        player: 0,
        computer: 0,
        tie:0
    };
}

export function computerMove(){
    let number = Math.round(((Math.random()*2)%4)+1);
    if(number==1){
        return 'Rock';
    }else if(number == 2){
        return 'Scissors';
    }else{
        return 'Paper';
    }
}


export function updateScore(playerMove,computerMove){
    console.log(playerMove + ' '+ computerMove);
    if(computerMove == playerMove){
        score.tie++;
    }else if ((computerMove== 'Rock' && playerMove=='Paper')||(computerMove=='Paper' && playerMove == 'Scissors')||(computerMove== 'Scissors' && playerMove=='Rock')) {
        score.player++;
    }else{
        score.computer++;
    }
    localStorage.setItem('scores',JSON.stringify(score));
}


