const inputText = document.getElementById("inputText")
const toCel = document.getElementById("toCel")
const toFah = document.getElementById("toFah")
const result = document.getElementById("result")
let temp;

function convert(){
    if(toCel.checked){
        temp = Number(inputText.value)
        temp = (temp - 32) * (5/9)
        result.textContent = temp.toFixed(1) + `C`;

    }
    else if(toFah.checked){
        temp = Number(inputText.value)
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + `F`; 
    }
    else{
        result.textContent = "`Select a unit`";
    }
}