// Realice un script que pida al usuario dos cadenas de texto empleando dos prompt y muestre un mensaje con las dos cadenas juntas, la primera en mayúscula y la segunda en minúscula.
var txt1, txt2;
txt1 = prompt("Ingrese un texto");
txt2 = prompt("Ingrese otro texto");
alert(txt1.toUpperCase() + " " + txt2.toLocaleLowerCase());