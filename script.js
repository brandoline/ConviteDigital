let decisao = document.getElementById('decisao');
let localidade = document.getElementById('localidade');
let refeicao = document.getElementById('refeicao');
let data = document.getElementById('data');
let conviteDigital = document.getElementById('conviteDigital');

let fazer = document.getElementById('fazer');
let comer = document.getElementById('comer');
let horario = document.getElementById('horario');

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

    fazer.textContent = escolha;
}

function escolherData(escolha){
    refeicao.classList.add("hidden");
    data.classList.remove("hidden");

    comer.textContent = escolha;
}

function marcarEncontro(){
    let dataEncontro = document.getElementById("dataEncontro");
    data.classList.add("hidden");
    conviteDigital.classList.remove("hidden");
    
    dataMarcada = tratarDataHora(dataEncontro.value);
    horario.textContent = dataMarcada;
    conviteDigital.style.display = "flex";
    conviteDigital.style.display.gap = "1rem";
}

function enviarLembrete(){
    alert('Marcado!');
}

function tratarDataHora(DataMarcada){
    let data = new Date(DataMarcada); 

    console.log('data: ' + data);
    
    let dia = data.getDay();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    console.log(ano);

    let hora = data.getHours();
    let minuto = data.getMinutes();

    let dataMarcada = `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    return dataMarcada;
}