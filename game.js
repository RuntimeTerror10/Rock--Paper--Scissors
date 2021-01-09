var playerCall = document.querySelector('#playercall');
var cpuCall = document.querySelector('#CPUcall');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
var playerChoice="";
var aiChoice="";
var playerScore = document.querySelector('.pscore');
var cpuScore = document.querySelector('.cscore');
let playerScoreStat=0;
let cpuScoreStat=0;
let cpuWon = document.querySelector('.cpuWon');
let playerWon = document.querySelector('.playerWon');
const playAgain = document.querySelector('.play-btn');
const btnMusic=document.querySelector('#btnaudio')

function updateName(){
    const name = document.querySelector('.playername');
    let temp=prompt("Enter player name");
    name.textContent = temp;
}



rockBtn.addEventListener('click',()=>{
    btnMusic.play();
    aiChoice=cpuChoice();
    dispCPUChoice(aiChoice);
    playerChoice="rock";
    console.log(aiChoice);
    console.log(playerChoice);
  playerCall.innerHTML='<i class="fas fa-hand-rock icon"></i>';
  checkInputs(playerChoice,aiChoice);
});
paperBtn.addEventListener('click',()=>{
    btnMusic.play();

    aiChoice=cpuChoice();
    dispCPUChoice(aiChoice);
    playerChoice="paper";
    console.log(aiChoice);
    console.log(playerChoice);
    playerCall.innerHTML='<i class="fas fa-hand-paper icon "></i>';
    checkInputs(playerChoice,aiChoice);
});
scissorsBtn.addEventListener('click',()=>{
    btnMusic.play();

    aiChoice=cpuChoice();
    dispCPUChoice(aiChoice);
    playerChoice="scissors";
    console.log(aiChoice);
    console.log(playerChoice);
    playerCall.innerHTML='<i class="fas fa-hand-scissors icon "></i>';
    checkInputs(playerChoice,aiChoice);
  });



function cpuChoice(){
    const choiceList = ["rock","paper","scissors"];
    let choice = Math.floor(Math.random()*3);
    return choiceList[choice];
}

function dispCPUChoice(choice){
    if(choice==="rock"){
        cpuCall.innerHTML='<i class="fas fa-hand-rock icon"></i>';
    }
    else if(choice==="paper"){
        cpuCall.innerHTML='<i class="fas fa-hand-paper icon "></i>';
    }
    else{
        cpuCall.innerHTML='<i class="fas fa-hand-scissors icon "></i>';
    }
}
function checkInputs(player,ai){
    if(playerScoreStat<5 && cpuScoreStat<5){
    if(player==="rock"&& ai==="scissors" || player==="paper"&& ai==="rock" || player==="scissors"&& ai==="paper"){
    
        playerScoreStat+=1;
      console.log("player: "+playerScoreStat)
      playerScore.innerText=playerScoreStat;
      if(playerScoreStat==5){
        playWinMusic();
        playerWon.style.display="block";
        playAgain.style.display="block";

        }
    }
    
    else if(player==="rock"&& ai==="paper" || player==="paper"&& ai==="scissors" || player==="scissors"&& ai==="rock"){
     cpuScoreStat+=1;
     console.log("CPU: "+cpuScoreStat);
     cpuScore.innerText=cpuScoreStat;
     if(cpuScoreStat==5){
        playLoseMusic()
        cpuWon.style.display="block";
        playAgain.style.display="block";
    }
    }
    else{
        console.log("draw");
    }
}

}
function reset(){
    playerScoreStat=0;
    cpuScoreStat=0;
    cpuScore.innerText = 0;
    playerScore.innerText = 0;
    playerCall.innerHTML="";
    cpuCall.innerHTML=" ";
   playAgain.style.display="none";
   cpuWon.style.display="none";
   playerWon.style.display="none";

}


function playWinMusic(){
   let winMusic = document.querySelector('#Winaudio');
   winMusic.play();
}
function playLoseMusic(){
   let loseMusic = document.querySelector('#Loseaudio');
   loseMusic.play();
}


