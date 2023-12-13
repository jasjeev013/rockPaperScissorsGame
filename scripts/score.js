import { updateHTML } from "./main.js";

export let score =JSON.parse(localStorage.getItem('scores'));
if(score==null){
    score = {
        player: 0,
        computer: 0,
        tie:0
    };
}

export function computerMove(){
    let number =  Math.floor(Math.random()*10);
    if(number==1 || number == 2 || number == 3){
        return 'Rock';
    }else if(number==4 || number == 5 || number == 6){
        return 'Scissors';
    }else{
        return 'Paper';
    }
}


export function updateScore(playerMove,computerMove){
    let result = 0;
    console.log(playerMove + ' '+ computerMove);
    if(computerMove == playerMove){
        score.tie++;
    }else if ((computerMove== 'Rock' && playerMove=='Paper')||(computerMove=='Paper' && playerMove == 'Scissors')||(computerMove== 'Scissors' && playerMove=='Rock')) {
        score.player++;
        result = 1;
    }else{
        score.computer++;
        result = 2;
    }
    localStorage.setItem('scores',JSON.stringify(score));
    updateHTML(playerMove,computerMove);
    return result;
}


