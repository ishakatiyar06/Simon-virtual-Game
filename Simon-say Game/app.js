let gameSeq=[];
let userSeq=[];

let btns=['btn1','btn2','btn3','btn4'];
let started=false;
let level=0;

let h2= document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //choose random button
    let randmIdx=Math.floor(Math.random()*3);
    let randColor=btns[randmIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
   
}
function checkAns(index){
   
    if(userSeq[index]=== gameSeq[index]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! <b>Your score is ${level}</b><br>
         Press 'Enter' to Start.`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },150)
        reset();
    }
}
function btnPress(){
   let btn=this;
   userFlash(btn);
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);

}
function reset(){
    started=false;
    gameSeq=[];
    user=[];
    level=0;
}