// Los datos solicitados en el formulario deben almacenarse en una colección de objetos JSON (no en array global).
// Implementar la funcionalidad de búsqueda o filtrado de los datos, de modo que,
//  si el usuario ingresa un valor en el campo "Filter...", se busque en la colección de objetos JSON aquellos registros que coincidan con el valor introducido (éste puede ser un nombre, apellido o carrera).Si existe una o más coincidencias, el usuario podrá recorrer los registros coincidentes. Si no existe ninguna coincidencia,
// se deberá mostrar el mensaje: "No se encontraron registros que coincidan con el valor de búsqueda".
const arregloGlobal = [];
let indiceActual = 0;
let arregloJSON = [];
console.log(arregloJSON)
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
            arregloJSON.splice(i, 1);
        }
        indiceActual--;
    } else {
        if(document.formulario[0].disabled == true) {
            arregloJSON.splice(i, 1);
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
    let temp = {};
    let elementos = document.formulario;
    if(datosCorrectos(document.formulario)) {
        temp.name = elementos[0].value;
        temp.apellido = elementos[1].value;
        temp.seleccion = elementos[2].selectedIndex;
        temp.rdb1 = elementos[3].checked;
        temp.rdb2 = elementos[4].checked;
        temp.chb = elementos[5].checked; 
        arregloJSON.push(JSON.stringify(temp));
        arregloJSON.forEach(data => console.log(data));
        bloquear();
    } else {
        alert("Datos incompletos!");
    }
}
function inicio() {
    let i = 0, elementos = document.formulario;
    Obj = JSON.parse(arregloJSON[i]);
    elementos[0].value = Obj.name;
    elementos[1].value = Obj.apellido;
    elementos[2].value = Obj.seleccion;
    elementos[3].value = Obj.rdb1;
    elementos[4].value = Obj.rdb2;
    elementos[5].value = Obj.chb;
    indiceActual = i;
    bloquear();
}
function fin() {
    let i = arregloJSON.length-1, elementos = document.formulario;
    Obj = JSON.parse(arregloJSON[i]);
    elementos[0].value = Obj.name;
    elementos[1].value = Obj.apellido;
    elementos[2].value = Obj.seleccion;
    elementos[3].value = Obj.rdb1;
    elementos[4].value = Obj.rdb2;
    elementos[5].value = Obj.chb;
    indiceActual = i;
    bloquear();
}
function atras() {
    if(indiceActual > 0) {
        if(arregloJSON.length == 1) {
            indiceActual = 1;
        }
        let i = indiceActual-1, elementos = document.formulario;
        Obj = JSON.parse(arregloJSON[i]);
        elementos[0].value = Obj.name;
        elementos[1].value = Obj.apellido;
        elementos[2].value = Obj.seleccion;
        elementos[3].value = Obj.rdb1;
        elementos[4].value = Obj.rdb2;
        elementos[5].value = Obj.chb;
        indiceActual--;
    } else {
        alert("No hay elementos atras!");
    }

    bloquear();

}
function sig() {
    if(indiceActual < arregloJSON.length-1) {
        let i = indiceActual+1, elementos = document.formulario;
        Obj = JSON.parse(arregloJSON[i]);
        elementos[0].value = Obj.name;
        elementos[1].value = Obj.apellido;
        elementos[2].value = Obj.seleccion;
        elementos[3].value = Obj.rdb1;
        elementos[4].value = Obj.rdb2;
        elementos[5].value = Obj.chb;
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
function filtrar() {
    let busqueda = parseInt(document.getElementById("buscar").value);
    let i = busqueda, elementos = document.formulario;
    let Obj;
    if(i == NaN) {
        alert("Error elemento no numerico!");
    }
    if(i > arregloJSON.length-1 || i < 0) {
        alert("Error fuera de rango!");
    }
    if(i != NaN && i <= arregloJSON.length-1 && i >= 0) {
        Obj = JSON.parse(arregloJSON[i]);
        elementos[0].value = Obj.name;
        elementos[1].value = Obj.apellido;
        elementos[2].value = Obj.seleccion;
        elementos[3].value = Obj.rdb1;
        elementos[4].value = Obj.rdb2;
        elementos[5].value = Obj.chb;
        indiceActual = i;
        bloquear();
    }
 
}