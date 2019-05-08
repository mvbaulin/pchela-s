/* MAIN-SLIDER */

(function(){
	// var mainSlider = document.querySelector('.main-slider'); В ГЛОБАЛЕ
	var mainSliderPages = document.querySelectorAll('.main-slider__slider-page');
	var mainSliderWrapper = document.querySelector('.main-slider__pages');
	var mainSliderPrevBtn = document.querySelector('.main-slider__btn--prev');
	var mainSliderNextBtn = document.querySelector('.main-slider__btn--next');
	var mainSliderDots = document.querySelectorAll('.main-slider__dot');

	function noScriptMainSlider(){
		if (window.variables.mainSlider.classList.contains('main-slider--nojs')) {
			window.variables.mainSlider.classList.remove('main-slider--nojs');
		}
	}

	let mainSliderPosition = 0;
	let currentDot = 0;

	function mainSliderScroll(needWidthToScroll, switchedDot){
		mainSliderPosition += needWidthToScroll;
		currentDot += switchedDot;

		if (mainSliderPosition > 0) {
			mainSliderPosition = -(mainSliderPages.length * 100) + 100;
			currentDot = mainSliderDots.length - 1;
		}
		else if (mainSliderPosition < -(mainSliderPages.length * 100) + 100) {
			mainSliderPosition = 0;
			currentDot = 0;
		}
		mainSliderWrapper.style.transform = "translateX("+ mainSliderPosition + "vw)";
		mainSliderDots.forEach(function(item, index){
			item.classList.remove('main-slider__dot--active');
			mainSliderDots[currentDot].classList.add('main-slider__dot--active');
		})
	}

	mainSliderPrevBtn.addEventListener('click', function(){
		mainSliderScroll(100, -1);
		console.log(currentDot);
	});

	mainSliderNextBtn.addEventListener('click', function(){
		mainSliderScroll(-100, 1);
		console.log(currentDot);
	});

	for (let i = 0; i < mainSliderDots.length; i++) {
		mainSliderDots[i].addEventListener('click', function(){
			currentDot = i;
			mainSliderPosition = -i * 100;

			mainSliderDots.forEach(function(item, index){
				item.classList.remove('main-slider__dot--active');
			})
			mainSliderDots[currentDot].classList.add('main-slider__dot--active');

			mainSliderWrapper.style.transform = "translateX("+ mainSliderPosition + "vw)";
			console.log(currentDot);
		})
	}

	noScriptMainSlider();
})()
