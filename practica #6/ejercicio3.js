//Realice un script que pida al usuario un número empleando un prompt y muestre en pantalla la multiplicación de ese número por un valor aleatorio.
var n1, multiplicacion, random;
n1 = parseInt(prompt("Ingrese un numero"));
random = Math.ceil(Math.random() * 100);
multiplicacion = n1 * random;
alert("El resultado de la multiplicacion con el numero aleatorio(" + random +") es " + multiplicacion);