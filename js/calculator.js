

var calculatorResult = document.querySelector('.calculator__result');
var distanceInput = document.querySelector('#calculator__distance');

var loaders = document.querySelector('#calculator__loaders');
var loadersTime = document.querySelector('#calculator__loaders-time');
var assemblers = document.querySelector('#calculator__assemblers');
var assemblersTime = document.querySelector('#calculator__assemblers-time');


let calculatorSelects = document.querySelectorAll('.calculator select');


let distancePrice = 33,
	distanceStartedPrice = 5000,
	loadersPricePerHour = 270,
	assemblersPricePerHour = 450;

let loadersCount = 0,
	loadersTimeCount = 0,
	assemblersCount = 0,
	assemblersTimeCount = 0;

for (let i = 0; i < calculatorSelects.length; i++) {
	calculatorSelects[i].addEventListener('change', function(){
		loadersCount = loaders.options[loaders.selectedIndex].value;
		loadersTimeCount = loadersTime.options[loadersTime.selectedIndex].value;
		assemblersCount = assemblers.options[assemblers.selectedIndex].value;
		assemblersTimeCount = assemblersTime.options[assemblersTime.selectedIndex].value;
		// console.log('loadersCount: ' + loadersCount);
		// console.log('loadersTimeCount: ' + loadersTimeCount);
		// console.log('assemblersCount: ' + assemblersCount);
		// console.log('assemblersTimeCount: ' + assemblersTimeCount);
		calculatePrice();
	})
}


distanceInput.addEventListener('input', calculateDistance);
distanceInput.addEventListener('change', calculatePrice);

let distanceCount;
function calculateDistance(){
	distanceCount = (distanceInput.value * distancePrice) + distanceStartedPrice;
	return distanceCount;
}


let loadersPrice = 0;
function calculateLoaders(){
	loadersPrice = loadersCount * loadersTimeCount * loadersPricePerHour;
	return loadersPrice;
}


let assemblersPrice = 0;
function calculateAssemblers(){
	assemblersPrice = assemblersCount * assemblersTimeCount * assemblersPricePerHour;
	return assemblersPrice;
}


let result = distanceStartedPrice;
calculatorResult.textContent = distanceStartedPrice;
function calculatePrice(){
	result = calculateAssemblers() + calculateLoaders() + calculateDistance();
	calculatorResult.textContent = result;
}
