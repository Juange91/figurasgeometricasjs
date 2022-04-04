function fcirculo() {

    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("Circulo");

}
function frombo() {

    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("Rombo");
}
function frectangulohorizontal() {
    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("RectanguloH");
}
function frectangulovertical() {
    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("RectanguloV");
}
function ffoto() {
    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("Foto");
}
function arriba() {
    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("Arriba");

}
function diagonal() {
    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("Diagonal");
}
function derecha() {
    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("Derecha");


}
function izquierda() {
    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("Izquierda");
}

function bajar() {
    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("Bajar");
}
function reset() {
    var selector = document.getElementById("figura");
    selector.className = ''
    selector.classList.toggle("Reset");

}

function operaciones() {
    var valor1 = Number(document.getElementById("valor1").value);
    var valor2 = Number(document.getElementById("valor2").value);
    var operacion = document.getElementById("operaciones").value;

    switch (operacion) {
        case "+":
            resultado = valor1 + valor2;
            document.getElementById("Respuesta").value = resultado;
            break;

        default:
            break;
        case "-":
            resultado = valor1 - valor2;
            document.getElementById("Respuesta").value = resultado;
            break;
        case "*":
            resultado = valor1 * valor2;
            document.getElementById("Respuesta").value = resultado;
            break;
        case "/":
            resultado = valor1 / valor2;
            document.getElementById("Respuesta").value = resultado;
            break;
    }
}

    function chatActive(){
        var selector = document.getElementById("chat");
        selector.classList.toggle("active");

        var selector2 = document.getElementById("btchat");
        selector2.classList.toggle("active");
    }


