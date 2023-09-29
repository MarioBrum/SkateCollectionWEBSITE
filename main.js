const catalogo = [
    {   
        id: 1,
        ano: '2009',
        marca: 'Hookups',
        imagem: '20021272_09Q4_MixZZZ_hookups_team_1.jpg',
    },
    {   
        id: 2,
        ano: '2009',
        marca: 'Hookups',
        imagem: '20021273_09Q4_MixZZZ_hookups_team_1.jpg',
    },
    {   
        id: 3,
        ano: '2009',
        marca: 'Creature',
        imagem: '20021274_09Q4_MixZZZ_creature_team_1.jpg',
    },
    {   
        id: 4,
        ano: '2009',
        marca: 'Creature',
        imagem: '20021276_09Q4_MixZZZ_creature_neil_heddings_1.jpg',
    }

];

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid, border-2, e border-gray-500 w-48 my-2" 
    id="card-produto-${produtoCatalogo.id}">
<img 
  src="./img/${produtoCatalogo.imagem}" 
  alt="imagem do skate 1"/>
  <p>${produtoCatalogo.ano}</p>
  <p>${produtoCatalogo.marca}</p>
  <button>Add</button>`

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}
