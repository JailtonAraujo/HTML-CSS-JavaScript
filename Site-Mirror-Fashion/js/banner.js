var banners = ["img/destaque-home.png", "img/destaque-home-2.png","img/centro-distribuicao.png"];
var bannerAtual = 0;
var quant_img = banners.length;

function trocaBanner() {

    document.querySelector('.banner-destaque img').src = banners[bannerAtual];

    if(bannerAtual >= (quant_img-1)){
        bannerAtual = 0;
    }else{
        bannerAtual = bannerAtual + 1;
    }
}
//setInterval(trocaBanner, 4000);


var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function(){

    if(controle.className == 'pause'){
        clearInterval(timer);
        controle.className = 'play';
        controle.textContent = 'play';
    }else{
        timer = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
        controle.textContent = 'pause'
    }
    return false;
};