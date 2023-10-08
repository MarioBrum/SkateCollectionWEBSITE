import { catalogo } from "./utilidades";
import { adicionarColecao } from "./menuColecao";

export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class=" w-24 m-2 text-sm" 
        id="card-produto-${produtoCatalogo.id}">
        <img 
        src="./img/${produtoCatalogo.imagem}" 
        alt="imagem do skate ${produtoCatalogo.id}"
        class="group-hover:scale-110 duration-300"
        />
        <button id="adicionar-${produtoCatalogo.id}">
            <img
            src="./img/notmarked.png"
            alt="nao marcado" 
            class=""
            />
        <button/>
        <p>${produtoCatalogo.ano}</p>
        <p>${produtoCatalogo.marca}</p>
        </div>`
    
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }

    for( const produtoCatalogo of catalogo){
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click',() => adicionarColecao(produtoCatalogo.id));
    }
}

export function pictureChange(idProduto)
    {
        const produto = catalogo.find((p) => p.id === idProduto);
        document.getElementById(`adicionar-${produto.id}`).src="./img/marked.png";
    }