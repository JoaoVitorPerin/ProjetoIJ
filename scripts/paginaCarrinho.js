storage = window.localStorage;
var dadosDoStorage = JSON.parse(storage.getItem('carrinho'));


window.onload = function(){

    montarCarrinho();
}

function montarCarrinho(){

    document.getElementById("produtos-carrinho").innerHTML = "";

    for(var i = 0; i <= 3; i++){

        var conteudo = "";
        conteudo  += '<div class="div-card2">';
        conteudo  += '<div class="div-gift2">';
        conteudo  += '<img src="../img/'+ dadosDoStorage[i][2] +'">';
        conteudo  += '</div>';
        conteudo  += '<div class="div-titulo2">';
        conteudo  += dadosDoStorage[i][1];
        conteudo  += '</div>';
        conteudo  += '<div class="div-comprar">';
        conteudo  += '<button class="button-comprado">COMPRADO</button>';
        conteudo  += '</div>';

        document.getElementById("produtos-carrinho").innerHTML += conteudo;
        }

        
}

