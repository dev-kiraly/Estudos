var n = [];

for (let i = 0; i < 100; i++) {
   n[i] = i + 1;
}

function fizzBuzz() {
   for (let i = 0; i < 100; i++) {
      if (n[i] % 3 == 0 && n[i] % 5 == 0) {
         n[i] = "FizzBuzz";
      } else if (n[i] % 3 == 0) {
         n[i] = "Fizz";
      } else if (n[i] % 5 == 0) {
         n[i] = "Buzz";
      }
   }
}

fizzBuzz();
console.log(n);