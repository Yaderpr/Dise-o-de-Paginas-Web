let num, result;
num = parseInt(prompt("Ingrese un numero: "));
for(let i = 0; i <= 12; i++) {
    result = num * i;
    document.write(num + " x " + i + " = " + result + "<br>");
}