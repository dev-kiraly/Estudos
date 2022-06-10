let count = 0;
let cor = document.getElementById('currentNumber');
cor.style.color = 'Black';
const CURRENT_NUMBER = document.getElementById('currentNumber');


function decrement2() {
	if(count <= -9) {
		alert("Cuidado! O Contador não aguenta menos que -10!")
	} else {
		count--;
		count--;
		CURRENT_NUMBER.innerHTML = count;
		color ();
	}
}

function decrement1() {
	if(count <= -10) {
		alert("Cuidado! O Contador não aguenta menos que -10!")
	} else {
		count--;
		CURRENT_NUMBER.innerHTML = count;
		color ();
	}
}

function increment1() {
	if(count >= 10) {
		alert("Cuidado! O Contador não aguenta  mais que 10!")
	} else {
		count++;
		CURRENT_NUMBER.innerHTML = count;
		color ();
	}
}

function increment2() {
	if(count >= 9) {
		alert("Cuidado! O Contador não aguenta mais que 10!")
	} else {
		count++;
		count++;
		CURRENT_NUMBER.innerHTML = count;
		color ();
	}
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
