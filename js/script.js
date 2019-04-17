var burger = document.querySelector('.site-menu__burger');
var mainNav = document.querySelector('.site-menu__navigation');

function noScript(){
	mainNav.classList.remove('site-menu__navigation--nojs');
}
noScript();


burger.addEventListener('click', openCloseMenu);
function openCloseMenu(){
	if (mainNav.classList.contains('site-menu__navigation--closed')){
		mainNav.classList.remove('site-menu__navigation--closed');
		mainNav.classList.add('site-menu__navigation--opened');
	} else {
		mainNav.classList.add('site-menu__navigation--closed')
	}
}
