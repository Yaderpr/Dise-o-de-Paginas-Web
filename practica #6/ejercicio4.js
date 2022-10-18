//Realice un script que pida al usuario dos números empleando dos prompt y muestre en pantalla el resultado de elevar el primer número a la potencia del segundo.
var n1, n2, potencia;
n1 = parseInt(prompt("Ingrese la base"));
n2 = parseInt(prompt("Ingrese el exponente"));
potencia = Math.pow(n1, n2);
alert(n1 + " elevado a la " + n2 + " es " + potencia);