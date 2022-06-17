function testError(arr, num) {
   try {
      if (!arr || !num) throw new ReferenceError("Envie os dois Parâmetros!");
      if (typeof arr !== "object") throw new TypeError("Envie um Elemento do Tipo Array!");
      if (typeof num !== "number") throw new TypeError("Envie um Elemento do Tipo Number!");
      if (arr.length !== num) throw new RangeError("Tamanho do Array Inválido!");

      return arr;
      }
   catch(e) {
      if (e instanceof ReferenceError) {
         console.log("Este Erro é um ReferenceError!");
         console.log(e.message);
      } else if (e instanceof TypeError) {
         console.log("Este Erro é um TypeError!");
         console.log(e.message);
      } else if (e instanceof RangeError) {
         console.log("Este Erro é um RangeError!");
         console.log(e.message);
      } else {
         console.log("Este Erro é um RangeError!" + e);
      }
      return arr;
   }
}

console.log(testError([1, 2 , 3, 4, 5], 5));