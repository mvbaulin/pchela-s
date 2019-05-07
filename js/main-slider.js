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

	var mainSliderPosition = 0;

	function mainSliderScroll(needWidthToScroll){
		mainSliderPosition += needWidthToScroll;
		if (mainSliderPosition > 0) {
			mainSliderPosition = -(mainSliderPages.length * 100) + 100;
		}
		else if (mainSliderPosition < -(mainSliderPages.length * 100) + 100) {
			mainSliderPosition = 0;
		}
		mainSliderWrapper.style.transform = "translateX("+ mainSliderPosition + "vw)";
	}

	mainSliderPrevBtn.addEventListener('click', function(){
		mainSliderScroll(100);
	});

	mainSliderNextBtn.addEventListener('click', function(){
		mainSliderScroll(-100);
	});



	mainSliderDots.forEach(function(item, index, array){
		item.classList.remove('main-slider__dot--active');
		console.log(item);
		item.addEventListener('click', function(){
			item.classList.add('main-slider__dot--active');
			console.log(item);
		});
	});















	noScriptMainSlider();
})()
