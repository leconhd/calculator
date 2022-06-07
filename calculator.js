let displayValue = [];
let alsNummer = 0;

function add(numA, numB) {
    console.log(numA + numB);
};

function subst(numA, numB) {
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

function numbers() {
    let allNumbers = document.querySelectorAll(".number");
    allNumbers.forEach(element => element.addEventListener("click",() => addNumber(element.innerHTML)));
};

function addNumber(arg) {
    displayValue.push(arg);
    let stringArray = displayValue.reduce((a,b) => 
        a+b);
    alsNummer = parseFloat(stringArray);
    display(alsNummer);
};


//add event listeners to numbers
numbers();