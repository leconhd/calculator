let displayValue = [];
let alsNummer = 0;
let first = 0;
let dieRechnung;

function operate(dieAktion, numA, numB) {
    if(dieAktion == "plus") {
        display(numA + numB);
    } else if(dieAktion == "minus") {
        display(numA - numB);
    } else if(dieAktion == "multiply") {
        display(numA * numB);
    } else if(dieAktion == "divide") {
        display(numA / numB);
    }
    werteLöschen();
};

function display(arg) {
    let anzeige = document.querySelector("#display");
    anzeige.innerHTML = arg;
};

//add event listeners to numbers
function addListenerNumbers() {
    let allNumbers = document.querySelectorAll(".number");
    allNumbers.forEach(element => element.addEventListener("click",() => addNumber(element.innerHTML)));
};

//add number to display
function addNumber(arg) {
    displayValue.push(arg);
    let stringArray = displayValue.reduce((a,b) => 
        a+b);
    alsNummer = parseFloat(stringArray);
    display(alsNummer);
};

//add event listener to AC
function addListenerAC() {
    let dasAC = document.querySelector("#ac");
    dasAC.addEventListener("click", löschen);
}

// //add event listener to Operations, hand over first number and operation
function addListenersOperations() {
    let dieOperationen = document.querySelectorAll(".operate");
    dieOperationen.forEach(element => element.addEventListener("click",() => waitForOperation(alsNummer, element.id)));
}

function waitForOperation(ersteZahl, rechnung) {
    first = ersteZahl;
    dieRechnung = rechnung;
    displayValue = [];
    alsNummer = 0;
}

//add event listener to equals
function addEventListenerEquals() {
    let dieGleichheit = document.querySelector(".equal");
    dieGleichheit.addEventListener("click", () => operate(dieRechnung, first, alsNummer));
}

//löschen 
function löschen() {
    displayValue = [];
    alsNummer = 0;
    display(alsNummer);
}

function werteLöschen() {
    displayValue = [];
    alsNummer = 0;
}


//add event listeners
addListenerNumbers();
addListenerAC();
addListenersOperations();
addEventListenerEquals();