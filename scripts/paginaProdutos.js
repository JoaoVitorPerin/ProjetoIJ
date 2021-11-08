var listaProdutos = [[0, 'STEAM R$10', 'steam10.png', false],[1, 'STEAM R$20', 'steam20.png', false],[2, 'STEAM R$50', 'steam50.png', false],[3, 'STEAM R$100', 'steam100.png', false],[4, 'STEAM R$200', 'steam200.png', false],[5, 'VALORANT R$10', 'valorant10.png', false],[6, 'VALORANT R$20', 'valorant20.png', false],[7, 'VALORANT R$40', 'valorant40.png', false],[8, 'VALORANT R$100', 'valorant100.png', false],[9, 'RIOT POINTS R$50', 'lol50.png', false],[10, 'RIOT POINTS R$100', 'lol100.png', false],[11, 'XBOX R$25', 'xbox25.png', false],[12, 'XBOX R$50', 'xbox50.png', false],[13, 'XBOX R$70', 'xbox70.png', false],[14, 'XBOX R$100', 'xbox100.png', false],[15, 'PSN R$30', 'psn30.png', false],[16, 'PSN R$50', 'psn50.png', false],[17, 'PSN R$100', 'psn100.png', false],[18, 'PSN R$200', 'psn200.png', false]];

var carrinho = [];

window.onload = function(){

    montarCardProdutos();
}

function comprar(id){
    listaProdutos[id][3] = true;
    carrinho.push(listaProdutos[id]);
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
    montarCardProdutos();
}

function montarCardProdutos(){

    document.getElementById("divProdutos").innerHTML = "";

    for(var i = 0; i < listaProdutos.length; i++){

        var conteudo = "";
        conteudo  += '<div class="div-card2">';
        conteudo  += '<div class="div-gift2">';
        conteudo  += '<img src="../img/'+listaProdutos[i][2] +'">';
        conteudo  += '</div>';
        conteudo  += '<div class="div-titulo2">';
        conteudo  += listaProdutos[i][1];
        conteudo  += '</div>';

        if(listaProdutos[i][3] == false){
            conteudo  += '<div class="div-comprar">';
            conteudo  += '<button class="button-comprar" onclick="comprar(' + listaProdutos[i][0] + ')">COMPRAR</button>';
            conteudo  += '</div>';
        }else{
            conteudo  += '<div class="div-comprar">';
            conteudo  += '<button class="button-comprado">COMPRADO</button>';
            conteudo  += '</div>';
        }
        

        document.getElementById("divProdutos").innerHTML += conteudo;
    }


}