// Realice un script que pida al usuario dos números empleando dos prompt y muestre en pantalla el resultado de elevar el primer número a la potencia del segundo.
var n1, n2, suma, division, multiplicacion, resta;
n1 = parseInt(prompt("Ingrese un numero"));
n2 = parseInt(prompt("Ingrese otro numero"));
suma = n1 + n2;
resta = n1 - n2;
multiplicacion = n1 * n2;
division = n1 / n2;
alert("Suma: " + suma + "\n" + "Resta: " + resta + "\n" + "Multiplicacion: " + multiplicacion + "\n" + "Division: " + division);