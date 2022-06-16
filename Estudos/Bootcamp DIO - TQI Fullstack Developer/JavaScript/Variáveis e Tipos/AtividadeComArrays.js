let newArray = [];

function trocaPares(array) {
   if (array.length == 0) {
      console.log("-1");
   } else {
      for (let i = 0; i < array.length; i++) {
         array[i] % 2 == 0 ? newArray.push(0) : newArray.push(array[i]);
      }
      console.log(newArray);
   }
}

function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);

let primeiroArray = [1,2,3,4,5,6,7,8,9,55];
trocaPares(primeiroArray);