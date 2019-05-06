/* NO SCRIPT */

(function(){
	function noScript(){
		if (mainNav.classList.contains('site-menu__navigation--nojs')) {
			mainNav.classList.remove('site-menu__navigation--nojs');
		}
		if (menuNumber.classList.contains('site-menu__numbers--nojs')) {
			menuNumber.classList.remove('site-menu__numbers--nojs')
		}
		if (mainSlider.classList.contains('main-slider--nojs')) {
			mainSlider.classList.remove('main-slider--nojs');
		}
	}
})()
