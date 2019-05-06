/* NO SCRIPT */

(function(){
	function noScript(){
		if (window.variables.mainNav.classList.contains('site-menu__navigation--nojs')) {
			window.variables.mainNav.classList.remove('site-menu__navigation--nojs');
		}
		if (window.variables.menuNumber.classList.contains('site-menu__numbers--nojs')) {
			window.variables.menuNumber.classList.remove('site-menu__numbers--nojs')
		}
		if (window.variables.mainSlider.classList.contains('main-slider--nojs')) {
			window.variables.mainSlider.classList.remove('main-slider--nojs');
		}
	}
	noScript();
})()
