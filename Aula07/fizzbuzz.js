let fizzBuzz = (a, b, c, d, e) => {
    let textToPrint = "";
    for (i=1; i<=100; i++) {
        if (i % a == 0 && i % b == 0) {
            textToPrint = c;
        } else if (i % a == 0) {
            textToPrint = d;
        } else if (i % b == 0) {
            textToPrint = e;
        } else {
            textToPrint = i;
        }
        console.log(textToPrint);
    }
}
fizzBuzz(5, 8, "Multiplo de ambos", "Multiplo do primeiro parametro", "Multiplo do segundo parametro");
fizzBuzz(5, 8, "FizzBuzz", "Fizz", "Buzz");