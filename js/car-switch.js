/* CAR-SWITCH */

(function(){
	let carSliderPages = document.querySelectorAll('.calculator-slider__slider-page');
	let carSliderPrevBtn = document.querySelector('.calculator-slider__btn--prev');
	let carSliderNextBtn = document.querySelector('.calculator-slider__btn--next');

	let carSliderPosition = 0;

	function carSlidersSwitch(direction){
		carSliderPosition += direction;

		if (carSliderPosition < 0) {
			carSliderPosition = carSliderPages.length - 1;
		}
		else if (carSliderPosition > carSliderPages.length -1) {
			carSliderPosition = 0;
		}

		carSliderPages.forEach(function(item){
			item.classList.remove('calculator-slider__slider-page--active');
			carSliderPages[carSliderPosition].classList.add('calculator-slider__slider-page--active');
		})
	}

	carSliderPrevBtn.addEventListener('click', function(){
		carSlidersSwitch(-1);
	})

	carSliderNextBtn.addEventListener('click', function(){
		carSlidersSwitch(1);
	})

})()
