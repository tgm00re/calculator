let sum = 0;
let activeSymbol = "none"
let currentNumber = "";
let display = document.getElementById("display");

function setOP(symbol){
    console.log("setOP");
    if(activeSymbol === "none"){
        updateSum();
    }
    display.innerText = "0";
    activeSymbol = symbol;
}


function press(num){
    console.log("press");
    currentNumber += num;
    display.innerText = currentNumber;
    console.log("current number (press): " + currentNumber);
}

function calculate(){
    console.log("calculate");
    updateSum();
    display.innerText = sum;
}

function clr(){
    currentNumber = "";
    activeSymbol = "none";
    sum = 0;
    display.innerText = sum;
}

function updateSum(){
    console.log("update sum");
    if(activeSymbol === "+"){
        console.log(sum + " + " + Number(currentNumber));
        sum += Number(currentNumber);
    } else if(activeSymbol === "-"){
        sum -= Number(currentNumber);
    } else if(activeSymbol === "*"){
        sum *= Number(currentNumber);
    } else if(activeSymbol === "/"){
        sum /= Number(currentNumber);
    } else if(sum === 0){
        sum = Number(currentNumber);
    }
    console.log(sum);
    currentNumber = "";
    activeSymbol = "none";
}