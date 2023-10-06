function abrirColecao(){
    document.getElementById("colecao").classList.add('right-[0px]');
    document.getElementById("colecao").classList.remove('right-[-360px]');
}

function fecharColecao(){
    document.getElementById("colecao").classList.remove('right-[0px]');
    document.getElementById("colecao").classList.add('right-[-360px]');
}

export function inicializarColecao(){
    const botaoFecharColecao = document.getElementById("fechar-colecao");
    const botaoAbrirColecao = document.getElementById("abrir-colecao");

    botaoFecharColecao.addEventListener("click",fecharColecao);
    botaoAbrirColecao.addEventListener("click",abrirColecao);
}