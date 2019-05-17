(function(){

	/* NAVIGATION OPEN-CLOSE*/

	let burger = document.querySelector('.site-menu__burger')
	let numbersButton = document.querySelector('.site-menu__number-button')
	let numbersArea = document.querySelector('.site-menu__number-list ')

	let logo = document.querySelector('.logo')
	let main = document.querySelector('main')

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

	/* REMOVE HREF */

	let menuLinks = document.querySelectorAll('.site-menu__list-item');

	menuLinks.forEach(function(item){
		if (item.classList.contains('site-menu__list-item--active')) {
			item.children[0].removeAttribute('href');
		}
	})

	/* NAVIGATION-FIX */

	window.addEventListener('scroll', menuFixing);
	window.addEventListener('gesturechange', menuFixing);

	function menuFixing(){
		let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
		let needHeight = window.variables.menuBar.clientHeight;
		if (scrollHeight > 0) {
			window.variables.menuBar.classList.add('site-menu--fixed');
			main.style.marginTop = needHeight + 'px';
		}
		else if (scrollHeight === 0) {
			window.variables.menuBar.classList.remove('site-menu--fixed');
			main.style.marginTop = 0;
		}
	}

	/* SCROLL TO CONTACTS */

	let contactsButton = document.querySelector('#to-contacts-button');
	let contacsArea = document.querySelector('.main-footer');

	contactsButton.style.cursor = 'pointer';

	contactsButton.addEventListener('click', function(){
		scrollToContacts();
	})

	function scrollToContacts(n){
		let getDistance = contacsArea.offsetTop -window.variables.menuBar.clientHeight;

		let timer = setTimeout(function(){
			scrollToContacts(n);
		}, 1);

		window.addEventListener('wheel', function(){
			clearTimeout(timer);
		})

		document.body.addEventListener('touchmove', function(){
			clearTimeout(timer);
		})

		if (document.documentElement.scrollTop <= getDistance || document.body.scrollTop <= getDistance) {
			document.documentElement.scrollTop += 10;
			document.body.scrollTop += 10;
		}

		if (document.documentElement.scrollTop >= getDistance || document.body.scrollTop >= getDistance) {
			clearTimeout(timer);
		}
	}
	
	noScriptSiteMenu();
})()
