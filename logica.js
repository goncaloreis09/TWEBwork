const navDesktop = document.getElementById('nav')
const navMobile = document.getElementById('mobile')
const itemsMenuEspecial = document.querySelectorAll(".items-menu-especial")
const body = document.getElementsByName("body")

//constantes da navbar mobile
const closeTrigger = document.querySelector(".closeBurger")
const openTrigger = document.querySelector(".burger")
const mobileMenu = document.querySelector(".hiding-menu")
const drpdwnTriggers = document.querySelectorAll(".dropdown-indicator")


//barra de pesquisa
const opcoes = document.querySelectorAll(".options")


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

