let TeamACount=0;
let changeCount=document.getElementById("TeamA");

function plusone(){
    TeamACount +=1;
    changeCount.textContent=TeamACount;
}

function plustwo(){
    TeamACount +=2;
    changeCount.textContent=TeamACount;
}

function plusthree(){
    TeamACount +=3;
    changeCount.textContent=TeamACount;
}


let TeamBCount=0;
let TeamBchangeCount=document.getElementById("TeamB");

function TeamBplusone(){
    TeamBCount +=1;
    TeamBchangeCount.textContent=TeamBCount;
}

function TeamBplustwo(){
    TeamBCount +=2;
    TeamBchangeCount.textContent=TeamBCount;
}

function TeamBplusthree(){
    TeamBCount +=3;
    TeamBchangeCount.textContent=TeamBCount;
}


function Reset(){
    TeamACount=0;
    changeCount.textContent=TeamACount;
    TeamBCount=0;
    TeamBchangeCount.textContent=TeamBCount;
}
