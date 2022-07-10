function numerosPrimos(limite) {
    for (let num = 1; num <= limite; num++) {
        let ehPrimo = true;

        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor == 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            console.log(num);
        }
    }
}

numerosPrimos(150);