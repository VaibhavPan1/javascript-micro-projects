const PI = 3.14

document.getElementById("mySubmit").onclick = function(){
    let radius = document.getElementById("myText").value;
    radius = Number(radius);
    document.getElementById("myRes").textContent = PI * radius * radius;
}