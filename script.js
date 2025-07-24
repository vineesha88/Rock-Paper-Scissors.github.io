let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".image");

const gencompchoice=()=>{
    const options=["paper","rock","scissors"];
    const randIdx=Math.floor(Math.random()*3);
  
    return options[randIdx];

    
};
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    //console.log("game was draw");
    msg.innerText="game was draw play again";
    
    msg.style.backgroundColor="black";
};
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
       // console.log("you win");
        msg.innerText=`you win , your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        //console.log("you loose");
        msg.innerText=`you loose, ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
document.querySelector("#msg");

const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
//generate computer choice
const compchoice=gencompchoice();
console.log("compchoice= ",compchoice);
if(userchoice===compchoice){
    //draw game
    drawGame();
}
else{
    let userWin=true;
    if(userchoice==="rock"){
        //scissors,paper-comp
       userWin= compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
//rock,scissors
userWin= compchoice==="scissors"?false:true;
    
    }
    else{
        //rock,scissors
        userWin= compchoice==="rock"?false:true;
    
    }
showWinner(userWin,userchoice,compchoice);
    
}
};

choices.forEach((image)=>{
   const userchoice= image.getAttribute("id");
  image.addEventListener("click",()=>{
console.log("choice was clicked",userchoice);
playgame(userchoice );
  });
});
