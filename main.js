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
    },
    {   
        id: 5,
        ano: '2009',
        marca: 'Real',
        imagem: '20021277_09Q4_MixZZZ_real_jt_aultz_1.jpg',
    },
    {   
        id: 6,
        ano: '2009',
        marca: 'Real',
        imagem: '20021278_09Q4_MixZZZ_real_ernie_torres_1.jpg',
    },
    {   
        id: 7,
        ano: '2009',
        marca: 'Black Label',
        imagem: '20021280_09Q4_MixZZZ_black_label_chet_childress_1.jpg',
    },
    {   
        id: 8,
        ano: '2009',
        marca: 'Black Label',
        imagem: '20021281_09Q4_MixZZZ_black_label_shuriken_shannon_1.jpg',
    },
    {   
        id: 9,
        ano: '2009',
        marca: 'Plan B',
        imagem: '20021282_09Q4_MixZZZ_plan_b_brian_wenning_1.jpg',
    },
    {   
        id: 10,
        ano: '2009',
        marca: 'Plan B',
        imagem: '20021283_09Q4_MixZZZ_plan_b_jereme_rogers_1.jpg',
    }

];

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid border-2 border-black w-24 m-2" 
    id="card-produto-${produtoCatalogo.id}">
    <img 
    src="./img/${produtoCatalogo.imagem}" 
    alt="imagem do skate 1"/>
    <p>${produtoCatalogo.ano}</p>
    <p>${produtoCatalogo.marca}</p>
    <button>Add</button>
    </div>`

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}
