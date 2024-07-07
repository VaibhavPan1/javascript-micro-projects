
const hiddenContainer = document.getElementById("hiddenContainer");
let labelHidden = document.getElementById("labelHidden");
const min = 1;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let running = true;
let guessNum;
document.getElementById("btnPlay").onclick = function(){
    if(hiddenContainer.style.display = 'none'){
        hiddenContainer.style.display = 'block';
    }
    labelHidden.textContent = `Guess a number between ${min} - ${max}`;
    while(running){
        guessNum = window.prompt("Enter the number: ");
        guessNum = Number(guessNum);
        if(isNaN(guessNum)){
            window.prompt("Enter valid Number! Try again!");
        }
        else if(guessNum > max || guessNum < min){
            window.alert("Enter valid number");
        }
        else{
            attempts++;
            if(guessNum > randomNum){
                window.alert(`Choose lower`)
            }
            else if(guessNum < randomNum){
                window.alert("choose higher")
            }
            else{
                window.alert("winner")
                running = false;
            }
        }
        
        

    
   
}}

