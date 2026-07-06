let gameseq = [];
let userseq = [];

let level = 0;
let started = false;
let highestScore = 0;


let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');


document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game Started");
        started = true;
    }
    levelup();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randbutton = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbutton);
}
function userbtnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function buttonpress(){
    let btn = this;
    userbtnFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length-1);
}

function checkans(idx){
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    } else {
        h2.innerHTML = `Game over! Your Score was <b>${level}</b>, Press any key to start the game.`;
        if(level> highestScore){
            highestScore = level;
        }
        h3.innerText = `Highest Score : ${highestScore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", buttonpress);
}

function reset(){
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}