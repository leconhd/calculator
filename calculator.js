let displayValue = [];
let alsNummer = 0;
let first = 0;
let dieRechnung;

function plus(numA, numB) {
    console.log(numA + numB);
};

function minus(numA, numB) {
    console.log(numA - numB);
};

function divide(numA, numB) {
    console.log(numA / numB);
};

function multiply(numA, numB) {
    console.log(numA * numB);
};

function operate(operator, numA, numB) {
	operator(numA, numB);
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
    dieGleichheit.addEventListener("click", () => equals(alsNummer));
}


function equals(dieZweite) {
    console.log(dieRechnung + "(" + first + "," + dieZweite +")");
    console.log(dieRechnung);
    operate(dieRechnung,first,dieZweite);
};

//add number to display
function addNumber(arg) {
    displayValue.push(arg);
    let stringArray = displayValue.reduce((a,b) => 
        a+b);
    alsNummer = parseFloat(stringArray);
    display(alsNummer);
};

//löschen 
function löschen() {
    displayValue = [];
    alsNummer = 0;
    display(alsNummer);
}


//add event listeners
addListenerNumbers();
addListenerAC();
addListenersOperations();
addEventListenerEquals();
operate(minus,66,6);