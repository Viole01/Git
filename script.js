var CSS = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value
    + ")";
    
    CSS.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Code to match background color with the 2 input values.
body.style.background = "linear-gradient(to right, " + color1.value + ", "+ color2.value + ")";

// code to display CSS of initial colors.
CSS.textContent = body.style.background + ";";