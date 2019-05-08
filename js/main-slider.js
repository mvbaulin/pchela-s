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

	function mainSliderScroll(needWidthToScroll){
		mainSliderPosition += needWidthToScroll;

		if (mainSliderPosition > 0) {
			mainSliderPosition = -(mainSliderPages.length * 100) + 100;
			currentDot = mainSliderDots.length;
		}
		else if (mainSliderPosition < -(mainSliderPages.length * 100) + 100) {
			mainSliderPosition = 0;
			currentDot = 0 - 1;// ПОЧЕМУ ТУТ НАДО МИНУСОВАТЬ?
		}
		mainSliderWrapper.style.transform = "translateX("+ mainSliderPosition + "vw)";
	}

	mainSliderPrevBtn.addEventListener('click', function(){
		mainSliderScroll(100);
		currentDot--;
		console.log(currentDot);
	});


	mainSliderNextBtn.addEventListener('click', function(){
		mainSliderScroll(-100);
		currentDot++;
		console.log(currentDot);
	});


	for (let i = 0; i < mainSliderDots.length; i++) {
		mainSliderDots[i].addEventListener('click', function(){
			mainSliderDots.forEach(function addActiveToDot(item, index){
				item.classList.remove('main-slider__dot--active');
			})
			mainSliderDots[i].classList.add('main-slider__dot--active');

			mainSliderPosition = -i * 100;
			currentDot = i;

			mainSliderScroll(0);
			console.log(currentDot);
		})
	}












	noScriptMainSlider();
})()
