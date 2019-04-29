var burger = document.querySelector('.site-menu__burger');
var mainNav = document.querySelector('.site-menu__navigation');
var mainNavItem = document.querySelector('.site-menu__list-item');
var menuBar = document.querySelector('.site-menu');
var menuNumber = document.querySelector('.site-menu__numbers ');
var numbersButton = document.querySelector('.site-menu__number-button');
var numbersArea = document.querySelector('.site-menu__number-list ');

function noScript(){
	if (mainNav.classList.contains('site-menu__navigation--nojs')) {
		mainNav.classList.remove('site-menu__navigation--nojs');
	}
	if (mainSlider.classList.contains('main-slider--nojs')) {
		mainSlider.classList.remove('main-slider--nojs');
	}
	if (menuNumber.classList.contains('site-menu__numbers--nojs')) {
		menuNumber.classList.remove('site-menu__numbers--nojs')
	}
}







window.addEventListener('scroll', menuFixing);
window.addEventListener('gesturechange', menuFixing);


function menuFixing(){
	var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
	var needHeight = menuBar.clientHeight;
	if (scrollHeight > 0) {
		menuBar.classList.add('site-menu--fixed');
		mainSlider.style.marginTop = needHeight + 'px';
	}
	else if (scrollHeight === 0) {
		menuBar.classList.remove('site-menu--fixed');
		mainSlider.style.marginTop = 0;
	}
}


/* NAVIGATION */

numbersButton.addEventListener('click', showHideNumbers);
function showHideNumbers() {
	numbersButton.classList.toggle('site-menu__number-button--active');
	numbersArea.classList.toggle('site-menu__number-list--active');
}


burger.addEventListener('click', openCloseMenu);
function openCloseMenu(){
	mainNav.classList.toggle('site-menu__navigation--opened');
}


if (mainNavItem.classList.contains('site-menu__list-item--active')) {
	mainNavItem.children[0].removeAttribute('href');
}


/*  MAIN-SLIDER*/

var mainSlider = document.querySelector('.main-slider');
var mainSliderPages = document.querySelectorAll('.main-slider__slider-page');
var mainSliderWindow = document.querySelector('.main-slider__pages')
var mainSliderPrevBtn = document.querySelector('.main-slider__btn--prev');
var mainSliderNextBtn = document.querySelector('.main-slider__btn--next');

var mainSliderPosition = 0;


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








/* CALCULATOR-BUTTONS*/

var calculatorArea = document.querySelector('.calculator');
var calculatorButton = document.querySelectorAll('.calculator__checkbox');
var calculatorHiddenAreas = document.querySelectorAll('.calculator__list--hidden');
var calculatorResultBox = document.querySelector('.calculator__result-wrapper');
var calculatorResult = document.querySelector('.calculator__result');


for (var i = 0; i < calculatorHiddenAreas.length; i++) {
	calculatorHiddenAreas[i];
}

for (let i = 0; i < calculatorButton.length; i++) {
	calculatorButton[i].addEventListener('change', function(){
		if (calculatorButton[i].checked) {
			calculatorHiddenAreas[i].classList.remove('calculator__list--hidden');
			console.log('checked button' + i);
		} else {
			calculatorHiddenAreas[i].classList.add('calculator__list--hidden');
			console.log('unchecked button' + i);
		}
	});
}

window.addEventListener('scroll', function(){
	if (calculatorArea.getBoundingClientRect().top - menuBar.clientHeight  <= calculatorArea.offsetHeight && calculatorArea.getBoundingClientRect().bottom  >= 0) {
		calculatorResultBox.classList.add('calculator__result-wrapper--showed');
	} else {
		calculatorResultBox.classList.remove('calculator__result-wrapper--showed');
	}
	// console.log(calculatorArea.getBoundingClientRect().top);
})



var loaders = document.querySelector('#calculator__loaders').value;

calculatorResult.textContent = '';

function calculatePrice(loadersCount, loadersTime, assemblersCount, assemblersTime, distance){
	console.log(loader.option[1]);
}

















// /*  CAR-SLIDER*/
//
// var carSliderPage = document.querySelectorAll('.calculator-slider__slider-page');
// var prevCarBtn = document.querySelector('.calculator-slider__btn--prev');
// var nextCarBtn = document.querySelector('.calculator-slider__btn--next');
//
// function carScroll(){
// 	console.log('sfaf');
// }
//
// prevCarBtn.addEventListener('click', carScroll);




noScript();
