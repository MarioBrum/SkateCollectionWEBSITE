import { inicializarColecao } from "./src/menuColecao";

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
    },
    {   
        id: 11,
        ano: '2009',
        marca: 'City Stars',
        imagem: '20021284_09Q4_MixZZZ_citystars_team_1.jpg',
    },
    {   
        id: 12,
        ano: '2009',
        marca: 'City Stars',
        imagem: '20021285_09Q4_MixZZZ_citystars_kareem_campbell_1.jpg',
    },
    {   
        id: 13,
        ano: '2009',
        marca: 'Cliche',
        imagem: '20021286_09Q4_MixZZZ_cliche_team_1.jpg',
    },
    {   
        id: 14,
        ano: '2009',
        marca: 'Cliche',
        imagem: '20021287_09Q4_MixZZZ_cliche_cale_nuske_1.jpg',
    },
    {   
        id: 15,
        ano: '2009',
        marca: 'Flip',
        imagem: '20021288_09Q4_MixZZZ_flip_team_1.jpg',
    },
    {   
        id: 16,
        ano: '2009',
        marca: 'DGK',
        imagem: '20021289_09Q4_MixZZZ_dgk_jack_curtin_1.jpg',
    },
    {   
        id: 17,
        ano: '2009',
        marca: 'DGK',
        imagem: '20021290_09Q4_MixZZZ_dgk_team_1.jpg',
    },
    {   
        id: 18,
        ano: '2009',
        marca: 'Steadham',
        imagem: '20021291_09Q4_MixZZZ_steadham_steve_steadham_1.jpg',
    },
    {   
        id: 19,
        ano: '2009',
        marca: 'World Industries',
        imagem: '20021292_09Q4_MixZZZ_world_industries_team_1.jpg',
    },
    {   
        id: 20,
        ano: '2009',
        marca: 'World Industries',
        imagem: '20021293_09Q4_MixZZZ_world_industries_team_1.jpg',
    },
    {   
        id: 21,
        ano: '2009',
        marca: 'Toy Machine',
        imagem: '20021294_09Q4_MixZZZ_toy_machine_diego_bucchieri_1.jpg',
    },

];

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class=" w-24 m-2 text-sm" 
    id="card-produto-${produtoCatalogo.id}">
    <img 
    src="./img/${produtoCatalogo.imagem}" 
    alt="imagem do skate ${produtoCatalogo.id}"/>
    <img
    src="./img/notmarked.png"
    alt="nao marcado" />
    <p>${produtoCatalogo.ano}</p>
    <p>${produtoCatalogo.marca}</p>
    </div>`

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}

inicializarColecao();