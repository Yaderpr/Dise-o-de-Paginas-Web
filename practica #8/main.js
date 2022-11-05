const arregloGlobal = [];
let indiceActual = 0;
let i = 0;
function nuevo() {
    let elementos = document.formulario;
    for(let i = 0; i < elementos.length; i++) {
        elementos[i].disabled = false;
    }
    cancelar();
}
function bloquear() {
    let elementos = document.formulario;
    for(let i = 0; i < elementos.length; i++) {
        elementos[i].disabled = true;
    }
}
function guardar() {
    if(datosCorrectos(document.formulario)) {
        arregloGlobal[i] = document.formulario;
        bloquear();
        i++;
    } else {
        alert("Datos incompletos!");
    }
}
function inicio() {
    let primero = arregloGlobal[0];
    let mostrar = document.formulario;
}
function atras() {
    let len = arregloGlobal.length;
    for(let i = 0; i < len; i++) {
        alert(arregloGlobal[i][0].value);
    }
}
function cancelar() {
    let elementos = document.formulario;
    for(let i = 0; i < 2; i++) {
        elementos[i].value = "";
    }
    elementos[2].selectedIndex = 0;
    elementos[3].checked = false;
    elementos[4].checked = false;
    elementos[5].checked = false;
}
function datosCorrectos(formulario) {
    let bool = true;
    let seleccion = formulario.carreras;
    let indice = formulario.carreras.selectedIndex;
    if(seleccion.options[indice].value == 0) {
        bool = false;
    }
    let texto1 = formulario.name;
    let texto2 = formulario.apellido;
    if(bool != false && (texto1.value.length == 0 || texto2.value.length == 0)) {
        bool = false;
    }
    let sexo = formulario.sexo;
    let count = 0;
    for (let i = 0; i < sexo.length; i++) {
        if(sexo[i].checked && bool != false) {
            count++;
        }
    }
    if(count == 0) {
        bool = false;
    }
    return bool;
}