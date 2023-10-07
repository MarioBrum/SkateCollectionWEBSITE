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

function adicionarColecao(){
    const cartaoProdutoColecao = `<article>
    <img 
      src="./img/20021272_09Q4_MixZZZ_hookups_team_1.jpg"
      alt="Skate 1 Hookups"
      class="h-70 rounded-md"
    />
    <div>
      <p class="text-slate-200 text-xs">2009</p>
      <p class="text-slate-50 text-sm ">Hookups</p>
    </div>
  </article>`

    const containerProdutosColecao = document.getElementById("produtos-colecao");

    containerProdutosColecao.innerHTML += cartaoProdutoColecao;
}