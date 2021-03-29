
var btnVermelho = document.querySelector("#vermelho");
var btnAzul = document.querySelector("#azul");
var btnVerde = document.querySelector("#verde");

var body = document.querySelector("body");

btnVermelho.addEventListener("click", function () {
  body.className="colors-chance-red";
})

btnAzul.addEventListener("click", function () {
  body.className="colors-chance-azul";
})

btnVerde.addEventListener("click", function () {
  body.className="colors-chance-verde";
})