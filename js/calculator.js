(function(){

/* CAR-SWITCH */

	let carSliderPages = document.querySelectorAll('.calculator__slider-page');
	let carSliderPrevBtn = document.querySelector('.calculator__slider-button--prev');
	let carSliderNextBtn = document.querySelector('.calculator__slider-button--next');

	let carName = document.querySelector('#car-name');
	let carPassengers = document.querySelector('#car-passengers');
	let carSize = document.querySelector('#car-size');
	let carTonnage = document.querySelector('#car-tonnage');


	cars = [
		['Газель Некст', 6, '4x2x2.15м', '16 кубов', 850],
		['Газель Некст', 2,  '5.2x2.1x2.3', '25 кубов', 1000],
		['Газель Некст', 2, '4.1x2.10x2.3', '18.5 кубов', 1000]
	];

	let carSliderPosition = 0;

	function carSlidersSwitch(direction){
		name = 0;
		passengers = 1;
		size = 2;
		tonnage = 3;
		price = 4;

		carSliderPosition += direction;

		if (carSliderPosition < 0) {
			carSliderPosition = carSliderPages.length - 1;
		}
		else if (carSliderPosition > carSliderPages.length -1) {
			carSliderPosition = 0;
		}

		carSliderPages.forEach(function(item){
			item.classList.remove('calculator__slider-page--active');
			carSliderPages[carSliderPosition].classList.add('calculator__slider-page--active');
		})
		carName.textContent = cars[carSliderPosition][name];
		carPassengers.textContent = cars[carSliderPosition][passengers];
		carSize.textContent = cars[carSliderPosition][size];
		carTonnage.textContent = cars[carSliderPosition][tonnage];
		window.variables.carPrice.textContent = cars[carSliderPosition][price];
	}

	carSliderPrevBtn.addEventListener('click', function(){
		carSlidersSwitch(-1);
		changeTotalPrice();
	})

	carSliderNextBtn.addEventListener('click', function(){
		carSlidersSwitch(1);
		changeTotalPrice();
	})

	carSlidersSwitch(0);

	/* CALCULATOR */

	let calculatorResult = document.querySelector('.calculator__result');
	let distanceInput = document.querySelector('#calculator__distance');
	let carTime = document.querySelector('#calculator__car-time');
	let loaders = document.querySelector('#calculator__loaders');
	let loadersTime = document.querySelector('#calculator__loaders-time');
	let assemblers = document.querySelector('#calculator__assemblers');
	let assemblersTime = document.querySelector('#calculator__assemblers-time');

	let distancePrice = 33,
		loadersPricePerHour = 270,
		assemblersPricePerHour = 450;

	let	totalPrice = 0;

	calculatorResult.addEventListener('input', changeTotalPrice);
	carTime.addEventListener('input', changeTotalPrice);
	distanceInput.addEventListener('input', changeTotalPrice);
	loaders.addEventListener('input', changeTotalPrice);
	loadersTime.addEventListener('input', changeTotalPrice);
	assemblers.addEventListener('input', changeTotalPrice);
	assemblersTime.addEventListener('input', changeTotalPrice);

	function changeTotalPrice(carSum, distance, loadersSum, assemblersSum){
		carSum = carTime.value * parseInt(window.variables.carPrice.textContent, 10);
		distance = distanceInput.value * distancePrice;
		loadersSum = parseInt(loaders.value * loadersTime.value, 10) * loadersPricePerHour;
		assemblersSum = parseInt(assemblers.value * assemblersTime.value, 10) * assemblersPricePerHour;

		totalPrice = carSum + distance + loadersSum + assemblersSum;
		calculatorResult.textContent = totalPrice;
	}

	changeTotalPrice();
})()
