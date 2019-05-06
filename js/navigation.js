/* NAVIGATION OPEN-CLOSE*/

(function(){
	// var mainNav = document.querySelector('.site-menu__navigation') В ГЛОБАЛЕ
	// var menuBar = document.querySelector('.site-menu')  В ГЛОБАЛЕ
	// var menuNumber = document.querySelector('.site-menu__numbers') В ГЛОБАЛЕ
	var mainNavItem = document.querySelector('.site-menu__list-item')
	var burger = document.querySelector('.site-menu__burger')
	var numbersButton = document.querySelector('.site-menu__number-button')
	var numbersArea = document.querySelector('.site-menu__number-list ')

	var logo = document.querySelector('.logo')
	var main = document.querySelector('main')


	function noScriptSiteMenu(){
		if (window.variables.mainNav.classList.contains('site-menu__navigation--nojs')) {
			window.variables.mainNav.classList.remove('site-menu__navigation--nojs');
		}
		if (window.variables.menuNumber.classList.contains('site-menu__numbers--nojs')) {
			window.variables.menuNumber.classList.remove('site-menu__numbers--nojs')
		}
	}

	numbersButton.addEventListener('click', showHideNumbers);
	function showHideNumbers() {
		numbersButton.classList.toggle('site-menu__number-button--active');
		numbersArea.classList.toggle('site-menu__number-list--active');
	}


	burger.addEventListener('click', openCloseMenu);
	function openCloseMenu(){
		window.variables.mainNav.classList.toggle('site-menu__navigation--opened');
	}


	if (mainNavItem.classList.contains('site-menu__list-item--active')) {
		mainNavItem.children[0].removeAttribute('href');
		logo.removeAttribute('href');
	}


	/* NAVIGATION-FIX */
	window.addEventListener('scroll', menuFixing);
	window.addEventListener('gesturechange', menuFixing);

	function menuFixing(){
		var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
		var needHeight = window.variables.menuBar.clientHeight;
		if (scrollHeight > 0) {
			window.variables.menuBar.classList.add('site-menu--fixed');
			main.style.marginTop = needHeight + 'px';
		}
		else if (scrollHeight === 0) {
			window.variables.menuBar.classList.remove('site-menu--fixed');
			main.style.marginTop = 0;
		}
	}

	noScriptSiteMenu();
})()
