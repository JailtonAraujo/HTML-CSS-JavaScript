var inputtamanho = document.querySelector('[name=tamanho]');
var outputtamanho = document.querySelector('[name=valortamanho]');

/*Funcão Anônima*/
inputtamanho.oninput = function (){
    outputtamanho.value = inputtamanho.value;
}
