import { catalogo } from "./utilidades";

export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class=" w-24 m-2 text-sm" 
        id="card-produto-${produtoCatalogo.id}">
        <img 
        src="./img/${produtoCatalogo.imagem}" 
        alt="imagem do skate ${produtoCatalogo.id}"
        class="group-hover:scale-110 duration-300"
        />
        <img
        src="./img/notmarked.png"
        alt="nao marcado" 
        class=""
        />
        <p>${produtoCatalogo.ano}</p>
        <p>${produtoCatalogo.marca}</p>
        </div>`
    
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }
}