let negacao = document.getElementById('nao');

let decisao = document.getElementById('decisao');
let localidade = document.getElementById('localidade');
let refeicao = document.getElementById('refeicao');
let data = document.getElementById('data');
let conviteDigital = document.getElementById('conviteDigital');
let infos = document.getElementById('infos');
let modal = document.getElementById('modal');

let fazer = document.getElementById('fazer');
let comer = document.getElementById('comer');
let horario = document.getElementById('horario');

let fechar = document.getElementById("fechar");

fechar.addEventListener("click", function(){
    modal.classList.add("hidden");
})

function aceitarConvite(){
    decisao.classList.add("hidden");
    localidade.classList.remove("hidden");
}

function negarConvite(){
    PopupModal('Erro', 'Algo deu errado, tente novamente');
    //alert('Algo deu errado, tente novamente');
    negacao.classList.add("hidden"); 
}

negacao.addEventListener('mouseover', function(){
    negacao.style.position = "absolute";

    negacao.style.left = Math.random() * (window.innerWidth - negacao.offsetWidth) + "px";
    negacao.style.top = Math.random() * (window.innerHeight - negacao.offsetHeight) + "px";
});

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
    let dataEncontro = document.getElementById("dataEncontro").value;
    if(dataEncontro === ''){
        PopupModal('Erro', 'Data precisa estar preenchida.');
        return
    }
    dataMarcada = tratarDataHora(dataEncontro);

    data.classList.add("hidden");
    conviteDigital.classList.remove("hidden");
    
    horario.textContent = dataMarcada;
    infos.style.display = "flex";
    infos.style.flexDirection = "column";
    infos.style.gap = "1rem";
    infos.style.textAlign = "center";
    infos.style.marginBottom = "2rem";
}

function enviarLembrete(){
    
    comer = comer.textContent;
    fazer = fazer.textContent;
    horario = horario.textContent;

    let mensagem = `%20*Encontro%20marcado!*%20%0A%0A━━━━━━━━━━━━━━%0A%0A🎯%20*O%20que%20vamos%20fazer:*%0A${fazer}%0A%0A🍽️%20*O%20que%20vamos%20comer:*%0A${comer}%0A%0A🚗%20*Quando%20te%20busco:*%0A${horario}%0A%0A━━━━━━━━━━━━━━`;

    let URL = `https://api.whatsapp.com/send?text=${mensagem}`;
    console.log(URL);

    window.open(URL, "_blank");
}

function tratarDataHora(DataMarcada){
    let data = new Date(DataMarcada).toLocaleString(); 

    DataMarcada = data;
    console.log('f dataMarcada: ' + DataMarcada);
    return DataMarcada;
}

function PopupModal(titulo, texto){
    modal.classList.remove("hidden");
    let tituloModal = document.getElementById("titulo-modal");
    let mensagem = document.getElementById("mensagem");
    
    tituloModal.textContent = titulo;
    mensagem.textContent = texto;
}