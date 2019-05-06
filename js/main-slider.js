/* MAIN-SLIDER */

(function(){
	// var mainSlider = document.querySelector('.main-slider'); В ГЛОБАЛЕ
	var mainSliderPages = document.querySelectorAll('.main-slider__slider-page');
	var mainSliderWrapper = document.querySelector('.main-slider__pages');
	var mainSliderPrevBtn = document.querySelector('.main-slider__btn--prev');
	var mainSliderNextBtn = document.querySelector('.main-slider__btn--next');




	function noScriptMainSlider(){
		if (window.variables.mainSlider.classList.contains('main-slider--nojs')) {
			window.variables.mainSlider.classList.remove('main-slider--nojs');
		}
	}

	var mainSliderPosition = 0;

	function mainSliderScroll(needWidthToScroll){
		mainSliderPosition += needWidthToScroll;
		if (mainSliderPosition > 0) {
			mainSliderPosition = -(mainSliderPages.length + 1) * 100;
		}
		else if (mainSliderPosition < -(mainSliderPages.length + 1) * 100) {
			mainSliderPosition = 0;
		}
		mainSliderWrapper.style.transform = "translateX("+ mainSliderPosition + "vw)";
	}

	mainSliderPrevBtn.addEventListener('click', function(){
		mainSliderScroll(100);
		console.log(mainSliderPosition);
	});

	mainSliderNextBtn.addEventListener('click', function(){
		mainSliderScroll(-100);
		console.log(mainSliderPosition);
	});

	noScriptMainSlider();
})()
