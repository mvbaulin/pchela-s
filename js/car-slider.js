/* CAR-SLIDER */

(function(){
	let carSliderPages = document.querySelectorAll('.calculator-slider__slider-page');
	let carSliderPrevBtn = document.querySelector('.calculator-slider__btn--prev');
	let carSliderNextBtn = document.querySelector('.calculator-slider__btn--next');


	let carSliderPosition = 0;

	function carSlidersSwitch(direction){

		if (carSliderPosition < 0) {
			carSliderPosition = carSliderPages.length - 1;
		}
		else if (carSliderPosition > carSliderPages.length -1) {
			carSliderPosition = 0;
		}

		carSliderPages[carSliderPosition].classList.remove('calculator-slider__slider-page--active')
		carSliderPosition += direction;
		carSliderPages[carSliderPosition].classList.add('calculator-slider__slider-page--active');


		console.log(carSliderPosition);
	}


	carSliderPrevBtn.addEventListener('click', function(){
		carSlidersSwitch(-1);
	})

	carSliderNextBtn.addEventListener('click', function(){
		carSlidersSwitch(1);
	})



})()
