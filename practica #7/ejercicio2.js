let cal1 = prompt("Ingrese su primera calificacion");
let cal2 = prompt("Ingrese su segunda calificacion");
let cal3 = prompt("Ingrese su tercera calificacion");
let regExp = "^[0-9]+$";
if(cal1.match(regExp) || cal2.match(regExp) || cal3.match(regExp)) {
    let promedio = (parseInt(cal1) + parseInt(cal2) + parseInt(cal3)) / 3;
    alert("Nota promedio: "+ promedio);
    if(promedio >= 0 && promedio <= 100) {
        if(promedio > 59) {
            alert("Ha aprobado");
        } else {
            alert("Ha reprobado")
        }
    } else {
        alert("Numero fuera de rango")
    }
} else {
    alert("Caracter invalido!");
}

