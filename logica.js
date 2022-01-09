const navDesktop = document.getElementById('nav')
const navMobile = document.getElementById('mobile')
const itemsMenuEspecial = document.querySelectorAll(".items-menu-especial")
const body = document.getElementById("body")

//constantes da navbar mobile
const closeTrigger = document.querySelector(".closeBurger")
const openTrigger = document.querySelector(".burger")
const mobileMenu = document.querySelector(".hiding-menu")
const drpdwnTriggers = document.querySelectorAll(".dropdown-indicator")


//barra de pesquisa
const opcoes = document.querySelectorAll(".options")
const dadosPesquisa = document.querySelectorAll(".dado-pesquisa")
const localidade = document.querySelector("#dado-localidade")
const btnPesquisar = document.querySelector(".procurar-btn")

//Seletor da galeria
const seletores = document.querySelector(".seletor").children

//contador de histórico
const contadorHist = document.querySelector("#hist-counter")
const painelHist = document.querySelector(".historico-pesquisas")

//Variáveis destinadas à
//Funcionalidade de opções de compra
const opcoesBtn = document.querySelectorAll("#opcoes-btn")
const closeOpcoes = document.querySelector("#close-modal")
const opcoesModal = document.querySelector(".opcoes-modal")
const saveOptions = document.querySelector(".save-options")
const inputAreaUtilMin = document.getElementById("areaUtilMin")
const inputAreaUtilMax = document.getElementById("areaUtilMax")
const idadeImovel = document.querySelector(".idade-opcoes").children
const garagem = document.querySelector(".garagem-opcoes").children
const transportes = document.querySelector(".transportes-opcoes").children
const clearInputs = document.querySelector("#clear-inputs")

//Resultados da pesquisa
const painelResultados = document.querySelector(".resultados-modal")
const closePainelResultados = document.querySelector("#close-modal-resultados")
const erros = document.querySelector(".erros-pesquisa")
const entendiBtn = document.querySelector("#entendi-btn")
const aldeiaCard = document.getElementById("aldeia")
const vilaCard = document.getElementById("vila")
const cidadeCard = document.getElementById("cidade")


//Preços das zonas
const aldeia = 1200 //Zona 1
const vila = 2000 //Zona 2
const cidade = 2500 //Zona 3

//Nomes
const aldeias = ["Favaios", "Sistelo", "Vila da Ponte"]
const vilas = ["Penafiel", "Soure", "Alcobaça"]
const cidades = ["Porto", "Coimbra", "Lisboa"]


//Variável que guarda a posição inicial do scroll para puder saber quando o utilizador está a dar scroll para cima ou para baixo
var posicaoScroll = window.scrollY

window.addEventListener('scroll', ()=>{
    //Quando o utilizador dá scroll ele guarda a posição desse novo scroll numa outra variavel
    var posicaoScrollNova = window.scrollY

    //Compara a posicao do scroll inicial e a nova e a partir daí comparara-as e decide se está a dar scroll para cima ou baixo.
    if(posicaoScroll <= posicaoScrollNova){ //Scroll para baixo
        navDesktop.style.top = "-100px"
        navMobile.style.top="-100px"
    }else{//Scroll para cima
        navDesktop.style.top = "0px"
        navMobile.style.top = "0px"

        if(window.scrollY >= 10){
            navDesktop.classList.add('background-white')
            navDesktop.classList.remove('background-transparente')
            navMobile.classList.add('background-white')
            navMobile.classList.remove('background-transparente')
        }else{
            navDesktop.classList.remove('background-white')
            navDesktop.classList.add('background-transparente')
            navMobile.classList.remove('background-white')
            navMobile.classList.add('background-transparente')
        }
    }

    posicaoScroll = posicaoScrollNova
})


//Loop para abrir e fechar dropdowns no menu mobile
for(let i=0; i<drpdwnTriggers.length;i++){
    drpdwnTriggers[i].addEventListener("click", () => {
        var nmr = drpdwnTriggers[i].id.split("-")
        var drpdwn = document.getElementById(nmr[1])
        drpdwn.classList.toggle("not-show")
    })
}


document.addEventListener("click", (e) => {



    //Abrir e Fechar menu mobile
    if( e.target.matches(".burger") || e.target.matches(".fa-align-left")){
        mobileMenu.classList.remove("hide")
    }else if( e.target.matches(".closeBurger") || e.target.matches(".fa-times") || !e.target.matches(".no-close")){
        mobileMenu.classList.add("hide")
    }
})


//mudar texto dos filtros da barra de pesquisa
for(let j=0; j<opcoes.length; j++){
    for(let i=0; i<opcoes[j].children[0].children.length; i++){
        opcoes[j].children[0].children[i].addEventListener("click", () =>{
            var referencia = "." + opcoes[j].id //saber qual deles mudar o nome
            var filtro = document.querySelector(referencia)
            var txt = opcoes[j].children[0].children[i].innerHTML
            filtro.innerHTML = txt
        })
    }
}

//Mudar de tab na galeria
for(let i=0; i<seletores.length; i++){
    seletores[i].addEventListener("click", () =>{
        seletores[i].classList.add("active-tab")
        for(let j=0; j<seletores.length; j++){
            if(j!=i){
                seletores[j].classList.remove("active-tab")
            }
        }
    })
}


//Abrir Modal das Opções desktop e tablet
opcoesBtn[1].addEventListener("click", () =>{
    opcoesModal.classList.remove("not-show")
    body.classList.add("open-modal")
})

//Abrir Modal das Opções mobile
opcoesBtn[0].addEventListener("click", () =>{
    opcoesModal.classList.remove("not-show")
    body.classList.add("open-modal")
})

//Fechar Modal das Opções
closeOpcoes.addEventListener("click", () =>{
    opcoesModal.classList.add("not-show")
    body.classList.remove("open-modal")
})

// Guardar informações das opções e fechar modal
var areaUtilMin = undefined;
var areaUtilMax = undefined;
var idade = undefined;
var temGaragem = undefined;
var temTransportes = undefined;
saveOptions.addEventListener("click", () =>{

    if(inputAreaUtilMax.value)
        areaUtilMax = inputAreaUtilMax.value
    if(inputAreaUtilMin.value)
        areaUtilMin = inputAreaUtilMin.value
    
    let selecionadoIdade = false
    for(let i=0; i<idadeImovel.length; i++){
        if(idadeImovel[i].classList.contains("opcao-active")){
            let x = idadeImovel[i].id.split("-")[0] //Guardar resposta momentaneamente
            idade = x
            selecionadoIdade = true
        }else{
            if(!selecionadoIdade)
                idade = undefined
        }
    }
    let selecionadoGaragem = false
    for(let i=0; i<garagem.length; i++){
        if(garagem[i].classList.contains("opcao-active")){
            let x = garagem[i].id.split("-")[1] //Guardar resposta momentaneamente
            temGaragem = x
            selecionadoGaragem = true
        }else{
            if(!selecionadoGaragem)
                temGaragem = undefined
        }
    }

    let selecionadoTransportes = false
    for(let i=0; i<transportes.length; i++){
        if(transportes[i].classList.contains("opcao-active")){
            let x = transportes[i].id.split("-")[1] //Guardar resposta momentaneamente
            temTransportes = x
            selecionadoTransportes = true
        }else{
            if(!selecionadoTransportes)
                temTransportes = undefined
        }
    }

    opcoesModal.classList.add("not-show")
    body.classList.remove("open-modal")
})


//Selecionar filtros
for(let k=0; k<3; k++){
    let array
    if(k==0)
        array = idadeImovel
    else if(k == 1)
        array = garagem
    else
        array = transportes

    for(let i=0; i<array.length; i++){
        array[i].addEventListener("click", () => {
            array[i].classList.toggle("opcao-active")
            for(let j=0; j<array.length; j++){
                if(j!=i)
                    array[j].classList.remove("opcao-active")
            }
        })
    }

    //Limpar seleções (filtros)
    clearInputs.addEventListener("click", () =>{
        for(let i=0; i<array.length; i++){
            array[i].classList.remove("opcao-active")
        }

        inputAreaUtilMin.value = null
        inputAreaUtilMax.value = null
    })
}


//Abrir Painel de Resultados
btnPesquisar.addEventListener("click", () =>{
    var tipoImovel = undefined
    var qtdQuartos = undefined
    var preco
    let randomArray = ["Com", "Sem"]

    //Verificar se tem conteúdo válido
    if(dadosPesquisa[2].textContent != "quartos"){
        let qtd = dadosPesquisa[2].textContent.split(" ")[0]
        qtdQuartos = qtd
    }

    //Verificar se tem conteúdo válido
    if(dadosPesquisa[1].textContent != "tipo imóvel")
        tipoImovel = dadosPesquisa[1].textContent


    //Verificar se falta algum campo OBRIGATÓRIO por preencher
    if(tipoImovel == undefined || areaUtilMax == undefined || idade == undefined){
        erros.classList.remove("not-show")
        erros.children[4].innerText = ""
        if(tipoImovel == undefined)
            erros.children[4].innerText += "Tipo de Imóvel, "
        if(areaUtilMax == undefined)
            erros.children[4].innerText += "Área Útil, "
        if(idade == undefined)
            erros.children[4].innerText += "Idade do Imóvel"
    }else{
        erros.classList.add("not-show")
    }

    //Escolher nome random para diferentes zonas
    //Explicação: aldeias[numero-random(0 até ao comprimento do array)]
    let nomeAldeia = aldeias[Math.floor(Math.random() * aldeias.length)] 
    aldeiaCard.children[0].children[0].innerText = nomeAldeia
    
    let nomeVila = vilas[Math.floor(Math.random() * vilas.length)] 
    vilaCard.children[0].children[0].innerText = nomeVila
    
    let nomeCidade = cidades[Math.floor(Math.random() * cidades.length)] 
    cidadeCard.children[0].children[0].innerText = nomeCidade


    for(let i=0; i<3; i++){
        let area
        let idade2 //Vai guardar os valores gerados para a idade
        //Gerar área random se tiver area minima e area máxima
        if(areaUtilMax != undefined && areaUtilMin != undefined){
            //Função utilizada: Math.floor(Math.random() * (max - min)) + min
            //parseInt() passa os valores para inteiros
            area = Math.floor(Math.random() * (parseInt(areaUtilMax) - parseInt(areaUtilMin))) + parseInt(areaUtilMin)
        }else if(areaUtilMax!=undefined){
            //Senão guarda o valor da Área Útil máxima
            area = parseInt(areaUtilMax)
        }

        //Se quartos == undefined então gera nº de quartos random até 6
        //Este valor mantém-se igual para as 3 casas
        if(qtdQuartos == undefined){
            let qtd = Math.floor(Math.random() * 6) + 1
            qtdQuartos = qtd
        }
        //Se o valor for == 4 significa que o utilizador selecionou a opção "4 ou mais"
        //Neste caso, se for confirmado e o loop estiver na sua 1ª execução
        //Decide um valor random entre 4 e 6
        else if(qtdQuartos == 4 && i== 0){
            let qtd = Math.floor(Math.random() * (7 - 4)) + 4
            qtdQuartos = qtd
        }

        //Caso idade == 5, gera um valor entre 0 e 5
        // e guarda o coeficiente de desvalorização
        if(idade == 5){
            coeficienteDesvalorizacao = 1
            idade2 = Math.floor(Math.random() * 5) + 1
        }else if(idade == 10){//Caso idade == 10, gera um valor entre 5 e 10
            coeficienteDesvalorizacao = 0.95
            idade2 = Math.floor(Math.random() * (11-6)) + 6
        }else{//Caso idade == 5, gera um valor entre 10 e 25 (para não ser uma idade absurda)
            coeficienteDesvalorizacao = 0.9
            idade2 = Math.floor(Math.random() * (26-11)) + 11
        }

        //Adicionar coeficiente de Desvalorização das casas relativos a garagem e transportes próximos
        if(temGaragem == "nao")
            coeficienteDesvalorizacao *= 0.95
        
        if(temTransportes == "nao")
            coeficienteDesvalorizacao *= 0.9


        if(i==0){
            card = aldeiaCard
            preco = area * aldeia * coeficienteDesvalorizacao
        }else if(i==1){
            card = vilaCard
            preco = area * vila * coeficienteDesvalorizacao
        }else{
            card = cidadeCard
            preco = area * cidade * coeficienteDesvalorizacao
        }

        card.children[2].innerText = preco + " €"
        card.children[1].children[1].innerHTML = "<i class='fas fa-layer-group'></i> " + area + "m²"
        card.children[1].children[0].innerHTML = "<i class='fas fa-home'></i> " + tipoImovel + ", T" + qtdQuartos + ", " + idade2 + " anos"
   
        
        //Caso o utilizador não tenha decidido se quer ou não Garagem ou Transportes
        //Gera valores random
        if(temGaragem == undefined){
            let x //Variável apenas para auxiliar na estrutura de decisão
            x = randomArray[Math.floor(Math.random() * randomArray.length)]
            if(x == "Com"){
                card.children[1].children[2].children[1].classList.add("com-detail")
                card.children[1].children[2].children[1].classList.remove("sem-detail")
            }else{
                card.children[1].children[2].children[1].classList.remove("com-detail")
                card.children[1].children[2].children[1].classList.add("sem-detail")
            }
            card.children[1].children[2].children[1].innerText = x
        }else{
            if(temGaragem == "sim"){
                card.children[1].children[2].children[1].classList.add("com-detail")
                card.children[1].children[2].children[1].classList.remove("sem-detail")
                card.children[1].children[2].children[1].innerText = "Com"
            }else{
                card.children[1].children[2].children[1].classList.remove("com-detail")
                card.children[1].children[2].children[1].classList.add("sem-detail")
                card.children[1].children[2].children[1].innerText = "Sem"
            }
        }

        if(temTransportes == undefined){
            let x //Variável apenas para auxiliar na estrutura de decisão
            x = randomArray[Math.floor(Math.random() * randomArray.length)]
            if(x == "Com"){
                card.children[1].children[3].children[1].classList.add("com-detail")
                card.children[1].children[3].children[1].classList.remove("sem-detail")
            }else{
                card.children[1].children[3].children[1].classList.remove("com-detail")
                card.children[1].children[3].children[1].classList.add("sem-detail")
            }
            card.children[1].children[3].children[1].innerText = x
        }else{
            if(temTransportes == "sim"){
                card.children[1].children[3].children[1].classList.add("com-detail")
                card.children[1].children[3].children[1].classList.remove("sem-detail")
                card.children[1].children[3].children[1].innerText = "Com"
            }else{
                card.children[1].children[3].children[1].classList.remove("com-detail")
                card.children[1].children[3].children[1].classList.add("sem-detail")
                card.children[1].children[3].children[1].innerText = "Sem"
            }
        }
    }

    //Abrir
    painelResultados.classList.remove("not-show")
    body.classList.add("open-modal")
})

//Fechar Painel Resultados
closePainelResultados.addEventListener("click", () =>{
    painelResultados.classList.add("not-show")
    body.classList.remove("open-modal")
})

//Fechar Painel Resultados
entendiBtn.addEventListener("click", () =>{
    painelResultados.classList.add("not-show")
    body.classList.remove("open-modal")
})


// const dadosPesquisa = document.querySelectorAll(".dado-pesquisa")
// const localidade = document.querySelector("#dado-localidade")
// const btnPesquisar = document.querySelector(".procurar-btn")

// //Guardar informação de pesquisas anteriores
// localStorage.setItem("numPesquisas", 1) //Guardar quantas pesquisas o utilizador já fez, para ajudar na nomeação
//                                         //do objeto

// btnPesquisar.addEventListener("click", (e)=>{
//     let tipoCompra = dadosPesquisa[0].innerHTML
//     let tipoImovel
//     let nQuartos
//     if(dadosPesquisa[1].innerHTML != "tipo imóvel"){
//         tipoImovel = dadosPesquisa[1].innerHTML
//     } // verificar se tem algum valor válido
//     else{
//         tipoImovel = "Indefenido"
//     }

//     if(dadosPesquisa[2].innerHTML != "quartos"){ // verificar se tem algum valor válido
//         nQuartos = dadosPesquisa[2].innerHTML
//     }else{
//         nQuartos = "Indefenido"
//     }

//     let localidadeValue = localidade.value

//     let pesquisa = {
//             tipoCompra: tipoCompra,
//             tipoImovel: tipoImovel,
//             quartos: nQuartos,
//             localidade: localidadeValue
//     }

//     let pesquisaSerialized = JSON.stringify(pesquisa)

//     let numPesquisa = localStorage.getItem("numPesquisas")
//     console.log(localStorage.getItem("numPesquisas"))
//     let nome = "pesquisa" + numPesquisa


//     localStorage.setItem(nome, pesquisaSerialized)

//     if(localStorage.getItem(nome)){ //verificar se ficou mesmo guardado
//         contadorHist.innerHTML = numPesquisa
//     }


//     for(let i=1; i<=parseInt(numPesquisa); i++){
//         let nome = "pesquisa" + numPesquisa
//         let obj = localStorage.getItem(nome)
//         if(obj){
//             let newDiv = document.createElement("div")
//             newDiv.innerHTML = `<div>
//                     <div>
//                         Tipo<i class="fas fa-euro-sign">:</i><span>${pesquisa.tipoCompra}</span>
//                     </div>
//                     <div>
//                         Imóvel<i class="fas fa-monument">:</i><span>${pesquisa.tipoImovel}</span>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         Quartos<i class="fas fa-home">:</i><span>${pesquisa.quartos}</span>
//                     </div>
//                     <div>
//                         Localidade<i class="fas fa-map-marker-alt">:</i><span>${pesquisa.localidade}</span>
//                     </div>
//                 </div>`

//             newDiv.classList.add("pesquisa")
//             painelHist.append(newDiv)
    
//         }
    
//     }

//     numPesquisa++
//     localStorage.setItem("numPesquisas", numPesquisa)
//     console.log(localStorage.getItem("numPesquisas"))
// })



// let num = localStorage.getItem("numPesquisas")
// num--

