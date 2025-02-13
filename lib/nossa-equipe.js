//objeto/itens
const adv = [
    {
        id : 1,
        nome : 'Ingrid Miranda Maciel',
        img :  '../imagens/ingrid.png',
        subt : 'Um Caminho de Defesa e Justiça',
        textoO :'Desde criança, sempre fui fascinado pela justiça e pela busca pela verdade. Acompanhar os noticiários e discutir sobre os direitos das pessoas me instigava a entender como a lei moldava a sociedade. Essa paixão me guiou para a graduação em Direito, onde tive a oportunidade de aprofundar meus conhecimentos e desenvolver habilidades essenciais para a advocacia.',
        textoT : 'A advocacia, para mim, vai além de defender os interesses de um cliente. É a chance de fazer a diferença na vida das pessoas, de contribuir para um mundo mais justo e equitativo. Acredito que um bom advogado deve ser não apenas um conhecedor da lei, mas também um defensor dos direitos humanos e um agente de transformação social.'
    },
    {
        id : 2,
        nome : 'Leueli Miranda',
        img :  '../imagens/laueli.png',
        subt : 'Advocacia com Propósito',
        textoO :'Desde a juventude, fui cativado pela ideia de utilizar o Direito como ferramenta para promover a justiça social. A graduação em Direito me proporcionou os conhecimentos técnicos necessários, mas foi a vivência em [mencionar alguma experiência relevante, como estágio em uma ONG ou participação em projetos sociais] que me permitiu compreender a importância de uma atuação engajada e responsável.',
        textoT : 'Ao longo da minha carreira, tive a oportunidade de atuar em diversas áreas do Direito, com ênfase em [sua área de especialização]. Cada caso me permitiu não apenas defender os interesses dos meus clientes, mas também contribuir para a construção de uma sociedade mais justa e igualitária'
    },
    {
        id : 3,
        nome : 'Alberto Jose da Silva',
        img :  '../imagens/alberto jose.jpg',
        subt : 'Advocacia com Propósito',
        textoO :'Advogado especialista em Direito Civil. Com sólida formação jurídica pelo Centro Universitário Campo Limpo Paulista, atuo há anos na área, buscando soluções eficazes e personalizadas para cada cliente. Minha experiência em escritórios de pequeno e grande porte me proporcionou um conhecimento profundo da prática jurídica e a habilidade de lidar com diversas demandas. Sou apaixonado por defender os direitos dos meus clientes e acredito em uma justiça justa e equitativa. Ao longo da minha carreira, tive a oportunidade de atuar em casos complexos, sempre buscando resultados positivos e duradouros.',
        textoT : 'Ao longo da minha carreira, tive a oportunidade de atuar em casos complexos, sempre buscando resultados positivos e duradouros.'
    }
]

//selecionado os objetos
const nomes = document.getElementById('nome')
const subTitle = document.getElementById('sub-title')
const imge = document.getElementById('fotoP')
const texto1 = document.getElementById('texto-1')
const texto2 = document.getElementById('texto-2')

const btnNext = document.getElementById('btn-proximo')
const btnPrev = document.getElementById('btn-anterior')
// selecio o começo item
let inicio = 0 

//  "DOMContentLoaded" serve para a manipulação da pagina fique mais facil eu acho kkk
window.addEventListener('click',function(){
    // criei uma constante e usei o a varialvel inicio para poder acessar os dados da constante
    const item = adv[inicio]
    nomes.textContent = item.nome
    subTitle.textContent = item.subt
    imge.src = item.img
    texto1.textContent = item.textoO
    texto2.textContent = item.textoT
})
// mostra  a pessoa baseado no item 
function mostraradv(pessoas){
    const profissional = adv[pessoas]

    nomes.textContent = profissional.nome
    subTitle.textContent = profissional.subt
    imge.src = profissional.img
    texto1.textContent = profissional.textoO
    texto2.textContent = profissional.textoT

}
//botaão para frente
btnNext.addEventListener('click',function(){
    inicio++
    if (inicio >= adv.length){
        inicio = 0
    }
    mostraradv(inicio)
})
// botão para voltar
btnPrev.addEventListener('click',function(){
    inicio--
    if (inicio = 0){
        inicio = adv.length -1
    }
    mostraradv(inicio)
})