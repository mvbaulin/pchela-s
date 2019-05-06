/*  MAIN-SLIDER*/

(function(){
	// var mainSlider = document.querySelector('.main-slider'); В ГЛОБАЛЕ
	var mainSliderPages = document.querySelectorAll('.main-slider__slider-page');
	var mainSliderWindow = document.querySelector('.main-slider__pages')
	var mainSliderPrevBtn = document.querySelector('.main-slider__btn--prev');
	var mainSliderNextBtn = document.querySelector('.main-slider__btn--next');

	var mainSliderPosition = 0;


	function noScriptMainSlider(){
		if (window.variables.mainSlider.classList.contains('main-slider--nojs')) {
			window.variables.mainSlider.classList.remove('main-slider--nojs');
		}
	}

	var mainSliderDots = document.querySelectorAll('.main-slider__dot');

	mainSliderPrevBtn.addEventListener('click', prevSlide);
	mainSliderNextBtn.addEventListener('click', nextSlide);

	for (var i = 0; i < mainSliderDots.length; i++){
		mainSliderDots[i].addEventListener('click', clickDot);
	}


	function clickDot(){
		mainSliderDots[i].classList.add('main-slider__dot--active');
	}


	function prevSlide(){
		mainSliderPosition += 25;
		mainSliderWindow.style.transform = "translateX(" + mainSliderPosition + "%)";
		console.log('prev ' + mainSliderPosition);
		if (mainSliderPosition > 0) {
			mainSliderPosition = -75;
			mainSliderWindow.style.transform = "translateX(" + mainSliderPosition + "%)";
		}
	}

	function nextSlide(){
		mainSliderPosition += -25;
		mainSliderWindow.style.transform = "translateX(" + mainSliderPosition + "%)";
		console.log('next ' + mainSliderPosition);
		if (mainSliderPosition < -75) {
			mainSliderPosition = 0;
			mainSliderWindow.style.transform = "translateX(" + mainSliderPosition + "%)";
		}
	}

	noScriptMainSlider();
})()
