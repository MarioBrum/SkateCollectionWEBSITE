import { renderizarCatalogo } from "./cartaoProduto";
import { catalogo } from "./utilidades";

const idsProdutosColecaoAdicionados = {};

function abrirColecao(){
    document.getElementById("colecao").classList.add('right-[0px]');
    document.getElementById("colecao").classList.remove('right-[-360px]');
}

function fecharColecao(){
    document.getElementById("colecao").classList.remove('right-[0px]');
    document.getElementById("colecao").classList.add('right-[-360px]');
}

export function inicializarColecao(){
    const botaoAbrirColecao = document.getElementById("abrir-colecao");  
    const botaoFecharColecao = document.getElementById("fechar-colecao");
    

    botaoAbrirColecao.addEventListener("click",abrirColecao);
    botaoFecharColecao.addEventListener("click",fecharColecao);
    
}

export function adicionarColecao(idProduto){

  if(idProduto in idsProdutosColecaoAdicionados){
    idsProdutosColecaoAdicionados[idProduto] = false;
  }

  idsProdutosColecaoAdicionados[idProduto] = true; //pag 11 slide 4

  const produto = catalogo.find((p) => p.id === idProduto);
  const cartaoProdutoColecao = `<article>
    <img 
      src="./img/${produto.imagem}"
      alt="Colecao: ${produto.id}"
      class="h-70 rounded-md"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-200 text-xs">${produto.ano}</p>
      <p class="text-slate-50 text-sm ">${produto.marca}</p>
    </div>
    <button id="remove-item${produto.id}">
        <img 
        src="./img/marked.png"
        alt="nao marcado" 
        class=""
        /> 
      <button/>
  </article>`
    //pictureChange(idProduto);
    const containerProdutosColecao = document.getElementById("produtos-colecao");

    containerProdutosColecao.innerHTML += cartaoProdutoColecao;
  
}

function removerDaColecao(idProduto){
  delete idsProdutosColecaoAdicionados[idProduto];
  renderizarProdutosColecao();

}