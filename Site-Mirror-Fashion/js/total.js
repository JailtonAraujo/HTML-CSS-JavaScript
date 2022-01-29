var quantidade = document.querySelector('input#qtd');
var preco = document.querySelector('dd#preco');
var preco_total = document.querySelector('output#total');

quantidade.oninput = function(){
    var quant = quantidade.value;
    var preco_rep = preco.textContent;

    /*RETIRANDO OS ESPAÇOS, CIFRAO E VRIGULA PARA DEIXAR O NUMERO PRONTO PARA SER CALCULADO*/
    preco_rep = preco_rep.replace('R$ ', "");
    preco_rep = preco_rep.replace(',','.');
    preco_rep = Number(preco_rep);

    /*CALCULANDO PREÇO TOTAL DA COMPRA*/
    total = Number(quant)*preco_rep;

    /*RETORNANDO O PREÇO TOTAL PARA O PADRÃO ANTERIOR*/
    total = `R$ ${total.toFixed(2)}`;
    total = total.replace('.', ',');

    /*MOSTRANDO PREÇO TOTAL NO CAMPO EM TEMPO REAL*/
    preco_total.value = total;

}