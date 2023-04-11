let modalDisplay = document.querySelector(".modal");
let closeButton = document.querySelector(".close");
let rules = document.querySelector(".rules");
let score = document.querySelector(".score h1");
let secondPart = document.querySelector(".second-part");
let buttonStart = document.querySelector(".start-button");
let buttonEnd = document.querySelector(".end-button");
let rockPaperScissors = document.querySelector(".rock-paper-scissors")
let button = document.querySelector(".score button");
let randomNumber = Math.floor(Math.random()*3) + 1;
let randomNumberTwo = Math.floor(Math.random()*3) + 1;
let user = document.querySelector(".user img");
let computer = document.querySelector(".computer img");
let imgOne = "images/icon-" + randomNumber + ".svg";
let imgTwo = "images/icon-" + randomNumberTwo + ".svg";
let scoreHeader = 0;
let scorehead = document.querySelector(".scorehead");

closeButton.onclick = function(){
    modalDisplay.style.display = "none"
}


window.onclick = function(event){
    if(event.target == modalDisplay){
     modalDisplay.style.display = "none";
    }
}

rules.onclick = function(){
    modalDisplay.style.display = "block"
}

buttonStart.onclick = function(){
    rockPaperScissors.style.display = "none";
    secondPart.style.display = "block";
    buttonStart.style.display = "none";
    buttonEnd.style.display = "block";
}

buttonEnd.onclick = function(){
    rockPaperScissors.style.display = "block";
    secondPart.style.display = "none";
    buttonStart.style.display = "block";
    buttonEnd.style.display = "none";
    
}


function buttonClick(){

   
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let randomNumberTwo = Math.floor(Math.random()*3) + 1;

    let imgOne = "images/icon-" + randomNumber + ".svg";
    let imgTwo = "images/icon-" + randomNumberTwo + ".svg";

    user.setAttribute("src", imgOne);
    computer.setAttribute("src", imgTwo);

    button.innerHTML = "PLAY AGAIN";
    score.style.display = 'block';

    if (randomNumber == 1 && randomNumberTwo == 3){
        score.innerHTML = "YOU WIN";
    }else if(randomNumber == 3 && randomNumberTwo == 2){
        score.innerHTML = "YOU WIN";
    }else if(randomNumber == 2 && randomNumberTwo == 1){
        score.innerHTML = "YOU WIN";
    }else if(randomNumber == randomNumberTwo){
        score.innerHTML = "YOU  DRAW";
    }else{
        score.innerHTML = "YOU LOSE";
    }


    if(randomNumber == 1 && randomNumberTwo == 3 || randomNumber == 3 && randomNumberTwo == 2 || randomNumber == 2 && randomNumberTwo == 1){
        scoreHeader ++;
        scorehead.innerHTML = scoreHeader
    }else if(randomNumber == randomNumberTwo){
        scoreHeader;
    }else{
        scoreHeader --;
        scorehead.innerHTML = scoreHeader
    }

   
}

button.addEventListener("click" , buttonClick)
// function buttonClick;