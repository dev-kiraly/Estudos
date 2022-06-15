let soma = 0;
let igual = 0;
let momQ10 = "menor que";
let momQ20 = "menor que";

function atividade(num1, num2) {
   a = num1;
   b = num2;

   iguaisOuDiferentes(a, b);
   maiorOuMenorQue10(a, b);
   maiorOuMenorQue20(a, b);

   const PrimeiraParte = "Os Números " + a + " e " + b + igual;
   const SegundaParte = "Sua soma é igual a " + soma + ",";
   const TerceiraParte = " que é " + momQ10 + " 10 e " + momQ20 + " 20.";

   console.log(PrimeiraParte,SegundaParte,TerceiraParte);
}

function iguaisOuDiferentes(a, b) {
   a === b ? igual = " são iguais." : igual = " não são iguais.";
   return(igual);
}

function maiorOuMenorQue10(a, b) {
   soma = a + b;

   if (soma > 10) {
      momQ10 = "maior que";
      return(momQ10);
   } else {
      if (soma < 10) {
         momQ10 = "menor que";
         return(momQ10);
      } else {
         momQ10 = "igual a";
         return(momQ10);
      }
   }
}

function maiorOuMenorQue20(a, b) {
   soma = a + b;

   if (soma > 20) {
      momQ20 = "maior que";
   } else {
      if (soma < 20) {
         momQ20 = "menor que";
      } else {
         momQ20 = "igual a";
      }
   }
}

atividade(5, 5);