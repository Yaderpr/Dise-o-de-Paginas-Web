// Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera.
// si trabaja 40 horas o menos se le paga 20 por hora si trabaja mas de 40
// se le pagara 20 por cada una de las primeras 40 y 25 por cada hora
//  extra.
let horas = prompt("Ingrese el numero de camisetas que compro: ");
let horasExt = 0;
if(parseInt(horas) > 40) {
    horasExt = parseInt(horas) - 40;
    salario = 40 * 20;
    salario = salario + (horasExt * 25);
} else {
    salario = parseInt(horas) * 20;
}
let regExp = "^[0-9]+$";
if(camiseta.match(regExp) != null) {
    alert("Su salario es " + )
}
