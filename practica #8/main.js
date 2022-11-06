const arregloGlobal = [];
let indiceActual = 0;
function nuevo() {
    let elementos = document.formulario;
    for(let i = 0; i < elementos.length; i++) {
        elementos[i].disabled = false;
    }
    if(!camposVacios(document.formulario)) {
        indiceActual++;
    } else {
        alert("Guarde los datos!");
    }
    limpiar();
}
function eliminar() {
    let i = indiceActual;
    if(indiceActual > 0) {
        if(document.formulario[0].disabled == true) {
            arregloGlobal.splice(i, 1);
        }
        indiceActual--;
    } else {
        if(document.formulario[0].disabled == true) {
            arregloGlobal.splice(i, 1);
        }
        indiceActual = 0;
        nuevo();
    }
    cancelar();
}
function limpiar() {
    let elementos = document.formulario;
    for(let i = 0; i < 2; i++) {
        elementos[i].value = "";
    }
    elementos[2].selectedIndex = 0;
    for(let i = 3; i < 6; i++) {
        elementos[i].checked = false;
    }
}
function bloquear() {
    let elementos = document.formulario;
    for(let i = 0; i < elementos.length; i++) {
        elementos[i].disabled = true;
    }
}
function guardar() {
    let temp = [];
    let elementos = document.formulario;
    if(datosCorrectos(document.formulario)) {
        for(let i = 0; i < 2; i++) {
            temp[i] = elementos[i].value;
        }
        temp[2] = elementos[2].selectedIndex;
        for(let i = 3; i < 6; i++) {
            temp[i] = elementos[i].checked;
        }

        temp.forEach(data => console.log(data));
        arregloGlobal.push(temp);
        bloquear();
    } else {
        alert("Datos incompletos!");
    }
}
function inicio() {
    let i = 0, elementos = document.formulario;
    for(let j = 0; j < 2; j++) {
        elementos[j].value = arregloGlobal[i][j];
    }
    elementos[2].selectedIndex = arregloGlobal[i][2];
    for(let j = 3; j < 6; j++) {
        elementos[j].checked = arregloGlobal[i][j];
    }
    indiceActual = i;
    bloquear();
}
function fin() {
    let i = arregloGlobal.length-1, elementos = document.formulario;
    for(let j = 0; j < 2; j++) {
        elementos[j].value = arregloGlobal[i][j];
    }
    elementos[2].selectedIndex = arregloGlobal[i][2];
    for(let j = 3; j < 6; j++) {
        elementos[j].checked = arregloGlobal[i][j];
    }
    indiceActual = i;
    bloquear();
}
function atras() {
    if(indiceActual > 0) {
        if(arregloGlobal.length == 1) {
            indiceActual = 1;
        }
        let i = indiceActual-1, elementos = document.formulario;
        for(let j = 0; j < 2; j++) {
            elementos[j].value = arregloGlobal[i][j];
        }
        elementos[2].selectedIndex = arregloGlobal[i][2];
        for(let j = 3; j < 6; j++) {
            elementos[j].checked = arregloGlobal[i][j];
        }
        indiceActual--;
    } else {
        alert("No hay elementos atras!");
    }

    bloquear();

}
function sig() {
    if(indiceActual < arregloGlobal.length-1) {
        let i = indiceActual+1, elementos = document.formulario;
        for(let j = 0; j < 2; j++) {
            elementos[j].value = arregloGlobal[i][j];
        }
        elementos[2].selectedIndex = arregloGlobal[i][2];
        for(let j = 3; j < 6; j++) {
            elementos[j].checked = arregloGlobal[i][j];
        }
        indiceActual++;
    } else {
        alert("No hay elementos adelante!");
    }

    bloquear();
}
function cancelar() {
    fin();
    bloquear();
}
function camposVacios(formulario) {
    let elementos = document.formulario;
    let count, bool = false;
    for(let i = 0; i < 2; i++) {
        if(elementos[i].value.length == 0) {
            count++;
        }
    }
    if(elementos[2].selectedIndex == 0) {
        count++;
    }
    for(let i = 3; i < 5; i++) {
        if(elementos[i].checked == false) {
            count++;
        }
    }
    if(count == 0) {
        bool = true;
    }
    return bool;
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