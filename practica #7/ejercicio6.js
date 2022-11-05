//Hacer un programa que muestre el resultado de la suma de los pares del 0 al 100.
let suma = 0;
for (let i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
        suma += i;
    }
}
alert("La suma de los pares entre el 0 y 100 es " + suma);