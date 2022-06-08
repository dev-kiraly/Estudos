let count = 0;
let cor = document.getElementById('currentNumber');
cor.style.color = 'Black';
const CURRENT_NUMBER = document.getElementById('currentNumber');




function increment2() {
	count++;
  	count++;
	alertaMaiorQue10();
	CURRENT_NUMBER.innerHTML = count;
	color ();
}

function increment1() {
	count++;
	alertaMaiorQue10();
	CURRENT_NUMBER.innerHTML = count;
	color ();
}

function decrement1() {
	count--;
	alertaMenorQueMenos10();
	CURRENT_NUMBER.innerHTML = count;
	color ();
}

function decrement2() {
	count--;
  	count--;
	alertaMenorQueMenos10();
	CURRENT_NUMBER.innerHTML = count;
	color ();
}

function color() {
	if (count == 0) {
		cor.style.color = 'Black';
	} 
	if (count > 0) {
		cor.style.color = 'Green';
	}
	if (count < 0) {
		cor.style.color = 'Red';
	}
}

function alertaMaiorQue10() {
	if(count > 10) {
		alert("Cuidado! O Contador não aguenta mais que 10!")
	}
}

function alertaMenorQueMenos10() {
	if(count < -10) {
		alert("Cuidado! O Contador não aguenta menos que 10!")
	}
}