(function(){

	/* NEWS-PAGINATOR */

	let pages = document.querySelectorAll('.section-news__page');
	let paginationButtons = document.querySelectorAll('.section-news__pagination-button');
	let news = document.querySelectorAll('.section-news__new');


	for (let i = 0; i < news.length; i++) {
		news[i].children[0].removeAttribute('href');
	}

	for (let i = 0; i < paginationButtons.length; i++) {
		paginationButtons[i].addEventListener('click', function(event){
			event.preventDefault();
			buttonClick(i);
			showPage(i);
			scrollToTop();
		})
	}

	function buttonClick(item){
		paginationButtons.forEach(function(item, index){
			item.classList.remove('section-news__pagination-button--active');
		})
		paginationButtons[item].classList.add('section-news__pagination-button--active');
	}

	function showPage(item){
		pages.forEach(function(item, index){
			item.classList.remove('section-news__page--active');
		})
		pages[item].classList.add('section-news__page--active');
	}

	function scrollToTop(){
		window.scrollTo(0,0);
	}







})();
