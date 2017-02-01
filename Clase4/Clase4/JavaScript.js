function cuadro(num1) {
    document.getElementById("1").innerHTML = 'El area del Circulo es ' + parseInt(num1) * parseInt(num1);
}
function rectangulo(num1, num2) {
    document.getElementById("2").innerHTML = 'El area del Rectangulo es ' + parseInt(num1) * parseInt(num2);
}
function triangulo(num1, num2) {
    document.getElementById("3").innerHTML = 'El area del Triangulo es ' + (parseInt(num1) * parseInt(num2)) / 2;
}
function rombo(num1, num2) {
    document.getElementById("4").innerHTML = 'El area del Rombo es ' + (parseInt(num1) * parseInt(num2)) / 2;
}
function paralelo(num1, num2) {
    document.getElementById("5").innerHTML = 'El area del Paralelogramo es ' + parseInt(num1) * parseInt(num2);
}
function circulo(num1, num2, num3) {
    document.getElementById("6").innerHTML = 'El area del Circulo es ' + (parseInt(num1) * parseInt(num1)) * 3.14;
}