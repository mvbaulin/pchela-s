(function(){

	/* NEWS-PAGINATOR */

	let pages = document.querySelectorAll('.section-news__page');
	let paginationButtons = document.querySelectorAll('.section-news__pagination-button');


	// showPage(pages[0]);

	for (let i = 0; i < paginationButtons.length; i++) {
		paginationButtons[i].addEventListener('click', function(event){
			event.preventDefault();
			showPage(pages[i]);
		})
	}

	function showPage(pageIndex){
		pages.forEach(function(pageIndex){
			pages.forEach((pageIndex) => pageIndex.classList.remove('section-news__page--active'));
			pageIndex.classList.add('section-news__page--active');
		})
	}





})();
