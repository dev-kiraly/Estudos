function verificarPalindromo1(p) {
   let palavra = p;
   let palavLista = palavra.split('');
   let palavListaInvert = palavLista.reverse();
   let palavraInvertida = palavListaInvert.join("");
   if (!p) {
      console.log("Erro! Palavra Inexistente!");
   } else {
      palavra == palavraInvertida ? console.log(palavra + " é um Palíndromo!") : console.log(palavra + " não é um Palíndromo!");
   }
}

function verificarPalindromo2(p) {
   let palavraInvertida = p.split("").reverse().join("");
   if (!p) {
      console.log("Erro! Palavra Inexistente!");
   } else {
      p == palavraInvertida ? console.log(p + " é um Palíndromo!") : console.log(p + " não é um Palíndromo!");
   }
}

function verificarPalindromo3(p) {
   if (!p) {
      console.log("Erro! Palavra Inexistente!");
   } else {
      let palindromo;
         for (let i = 0; i < p.length / 2; i++) {
         if (p[i] !== p.length - 1 - i) {
            palindromo = p + " não é um Palíndromo!"; 
         } else {
            palindromo = p + " é um Palíndromo!"; 
         }
      }
      console.log(palindromo);
   }
}

verificarPalindromo1("");
verificarPalindromo2("");
verificarPalindromo3("");

