// Realice un script que pida al usuario dos números empleando dos prompt y muestre en pantalla el resultado de elevar el primer número a la potencia del segundo.
var n1, n2, suma, division, multiplicacion, resta;
// n1 = parseInt(prompt("Ingrese un numero"));
// n2 = parseInt(prompt("Ingrese otro numero"));
n1 = prompt("Ingrese un numero");
n2 = prompt("Ingrese otro numero");
let regExp = "^[0-9]+$";
if(n1.match(regExp) && n2.match(regExp) != null) {
suma = parseInt(n1) + parseInt(n2);
resta = n1 - n2;
multiplicacion = n1 * n2;
if(n1 == 0 || n2 == 0) {
    division = 0;
} else {
    division = n1 / n2;
}

alert("Suma: " + suma + "\n" + "Resta: " + resta + "\n" + "Multiplicacion: " + multiplicacion + "\n" + "Division: " + division);
} else {
    alert("Ingrese valores numericos!");
}