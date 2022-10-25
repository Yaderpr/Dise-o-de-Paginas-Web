// Hacer un programa que dado un numero de camisetas, calcule el total a pagar por la compra.
// si se compran 12 camisas o mas se le hace un descuento del 20% sobre el total de la compra,
// y si son menos un
// descuento del 10%
let camiseta = prompt("Ingrese el numero de camisetas que compro: ");
let regExp = "^[0-9]+$";
let descuento = 0.20;
let precio = 50;

let compratotal = (parseFloat(camiseta) * precio);
if(camiseta.match(regExp) != null) {

    if(camiseta >= 12) {
        compratotal = (parseFloat(camiseta) * precio) - (compratotal * descuento);
        alert("Compra total con con el 20% de descuento es " + compratotal);
    } else{
        compratotal = (parseFloat(camiseta) * precio) - (compratotal * 0.10);
        alert("Compra total con el 10% de descuento es " + compratotal);
    } 
} else {
    alert("caracter invalido!")
}
