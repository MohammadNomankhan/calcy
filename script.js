const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clearBtn');

function sendNumberValue(number) {
	const onScreenText = calculatorDisplay.textContent;
	calculatorDisplay.textContent = onScreenText === '0' ? number : onScreenText + number;
	// calculatorDisplay = currentText;
}

function addDecimal() {
	if (!calculatorDisplay.textContent.includes('.')) {
		calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
	}
}

inputBtns.forEach((inputBtn) => {
	if (inputBtn.classList.length === 0) {
		inputBtn.addEventListener('click', () => {sendNumberValue(inputBtn.value)});
	} else if (inputBtn.classList.contains('operator')) {
		inputBtn.addEventListener('click', () => {sendNumberValue(inputBtn.value)});
	} else if (inputBtn.classList.contains('decimal')){
		inputBtn.addEventListener('click', () => {addDecimal()});
	}
});

function resetAll() {
	calculatorDisplay.textContent = '0';
}

clearBtn.addEventListener('click', resetAll);