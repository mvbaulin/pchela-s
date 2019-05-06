/* NAVIGATION OPEN-CLOSE*/

(function(){
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


	/* NAVIGATION-FIX */
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
})()
