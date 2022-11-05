// Realice un programa que permita calcular la suma de los 5 primeros números enteros positivos
//  introducidos por el  usuario, descartando cualquier número negativo o cero que se introduzca.
let n, count, suma = 0;
count = 0;
while(count != 5) {
    n = prompt("Ingrese un numero entero positivo");
    n = parseInt(n);
    if(n > 0) {
        suma += n;
        count++;
    } else {
        alert("Error, el caracter no es un entero postivo")
    }

}
alert("La suma es de los primeros 5 enteros postivos es " + suma);