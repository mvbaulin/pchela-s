var burger = document.querySelector('.site-menu__burger');
var mainNav = document.querySelector('.site-menu__navigation');
var mainNavItem = document.querySelector('.site-menu__list-item');
var menuBar = document.querySelector('.site-menu');
var menuNumber = document.querySelector('.site-menu__numbers ');
var numbersButton = document.querySelector('.site-menu__number-button');
var numbersArea = document.querySelector('.site-menu__number-list ');
var logo = document.querySelector('.logo');
var main = document.querySelector('main');

function noScript(){
	if (mainNav.classList.contains('site-menu__navigation--nojs')) {
		mainNav.classList.remove('site-menu__navigation--nojs');
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
		main.style.marginTop = needHeight + 'px';
	}
	else if (scrollHeight === 0) {
		menuBar.classList.remove('site-menu--fixed');
		main.style.marginTop = 0;
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
	logo.removeAttribute('href');
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
