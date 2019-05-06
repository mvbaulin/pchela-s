/* CALCULATOR-BUTTONS*/

(function(){
	var calculatorArea = document.querySelector('.calculator');
	var calculatorButton = document.querySelectorAll('.calculator__checkbox');
	var calculatorHiddenAreas = document.querySelectorAll('.calculator__list--hidden');
	var calculatorResultBox = document.querySelector('.calculator__result-wrapper');



	for (var i = 0; i < calculatorHiddenAreas.length; i++) {
		calculatorHiddenAreas[i];
	}

	for (let i = 0; i < calculatorButton.length; i++) {
		calculatorButton[i].addEventListener('change', function(){
			if (calculatorButton[i].checked) {
				calculatorHiddenAreas[i].classList.remove('calculator__list--hidden');
				// console.log('checked button' + i);
			} else {
				calculatorHiddenAreas[i].classList.add('calculator__list--hidden');
				// console.log('unchecked button' + i);
			}
		});
	}

	window.addEventListener('scroll', function(){
		if (calculatorArea.getBoundingClientRect().top - window.variables.menuBar.clientHeight  <= calculatorArea.offsetHeight && calculatorArea.getBoundingClientRect().bottom  >= 0) {
			calculatorResultBox.classList.add('calculator__result-wrapper--showed');
		} else {
			calculatorResultBox.classList.remove('calculator__result-wrapper--showed');
		}
		// console.log(calculatorArea.getBoundingClientRect().top);
	})
})()
