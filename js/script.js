var burger = document.querySelector('.site-menu__burger');
var mainNav = document.querySelector('.site-menu__navigation');

function noScript(){
	mainNav.classList.remove('site-menu__navigation--nojs');
	// сделать проверку
}
noScript();


burger.addEventListener('click', openCloseMenu);
function openCloseMenu(){
	mainNav.classList.toggle('site-menu__navigation--opened');
	console.log('sfsaf');
}
