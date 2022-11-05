function factorial() {
    let factorial = 1;
    let x;
    let n = parseInt(prompt("Ingrese un numero"));
    if (n < 0) {
        alert("EL numero" + " " + n + " " + "no se puede calcular");
    }
    else {
        for (x = 1; x < n; x++) {
            factorial = factorial * x;
        }
        alert("Factorial de " + n + " " + "es: " + factorial);
    }
}
factorial()