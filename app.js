let gameSeq = [];
let userSeq=[];

let started = false ;
let level = 0 ;
let btns = ["red","yellow","green","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
    btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
    btn.classList.remove("userflash");
    },300);
}

function levelUp(){
    userSeq = [];
    level++ ;
    h2.innerText = `Level ${level}`;

    // random button selection 
    let ranIndx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIndx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    // console.log(ranIndx);
    // console.log(ranColor);
    // console.log(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function checkAns(idx){
    // console.log("curr level :",level);
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = (`Wrong Guess!"GAME OVER,YOUR SCORE IS <b>${level}<b>" <br> Please try again from Start`);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

