let cad = prompt();
let regExp = "^[0-9]+$";
if(cad.match(regExp) != null) {
    if(!(cad <= 100)) {
        alert(cad + " es mayor que 100");
    } else {
        alert(cad + " no es mayor que 100") 
    }
} else {
    alert("Los datos ingresados son invalidos");
}



