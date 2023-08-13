let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },2500);
}


function levelup(){
level++;
h2.innerText=`Level ${level}`

let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randbtn=document.querySelector(`.${randColor}`)
console.log(randIdx)
console.log(randColor)
console.log(randbtn)
btnFlash(randbtn);
}
