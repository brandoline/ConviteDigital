let decisao = document.getElementById('decisao');
let localidade = document.getElementById('localidade');
let refeicao = document.getElementById('refeicao');
let data = document.getElementById('data');
let conviteDigital = document.getElementById('conviteDigital');

function aceitarConvite(){
    decisao.classList.add("hidden");
    localidade.classList.remove("hidden");
}

function negarConvite(){
    let negacao = document.getElementById('nao');
    alert('Algo deu errado, tente novamente');
    negacao.classList.add("hidden"); 
}

function escolherRefeicao(escolha){
    localidade.classList.add("hidden");
    refeicao.classList.remove("hidden");
}

function escolherData(escolha){
    refeicao.classList.add("hidden");
    data.classList.remove("hidden");
}

function marcarEncontro(){
    data.classList.add("hidden");
    conviteDigital.classList.remove("hidden");
}

function enviarLembrete(){
    alert('Marcado!');
}
