let cpu = document.getElementById("cpuChoice");
let playerPoint = 0, cpuPoint = 0;
let source = "images/";
let hands = ["rock.png","paper.png","scissors.png"]
let cpuChoice;
let pp = document.getElementById("playerPoint");
let cp = document.getElementById("cpuPoint");
let res = document.getElementById("desc");
let result = "";
function loadPoints(){
    res.textContent = result;
    pp.textContent = ("Player points: " + playerPoint);
    cp.textContent = ("CPU points: " + cpuPoint);
}
function rpc(){
    cpuChoice = Math.floor(Math.random() * 3)
    source += hands[cpuChoice]
}
function rock(){
    rpc()
    cpu.src = source;
    source = "images/"
    if(cpuChoice == 2){
        playerPoint++;
        result = "You Win !";
    }
    else if(cpuChoice == 1){
        cpuPoint++;
        result = "You Lose !";
    }
    else result = "Draw";
    loadPoints();
}
function paper(){
    rpc()
    cpu.src = source;
    source = "images/"
    if(cpuChoice == 0){
        playerPoint++;
        result = "You Win !";
    }
    else if(cpuChoice == 2){
        cpuPoint++;
        result = "You Lose !";
    }
    else result = "Draw";
    loadPoints()
}
function scissor(){
    rpc()
    cpu.src = source;
    source = "images/"
    if(cpuChoice == 1){
        playerPoint++;
        result = "You Win !";
    }
    else if(cpuChoice == 0){
        cpuPoint++;
        result = "You Lose !";
    }
    else result = "Draw";
    loadPoints();
}
function reset(){
    playerPoint = 0;
    cpuPoint = 0;
    res.textContent = "";
    pp.textContent = "Player points: ";
    cp.textContent = "CPU points: ";
}