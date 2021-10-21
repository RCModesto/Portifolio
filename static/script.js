//document.addEventListener('contextmenu', event => event.preventDefault());

//Bloquear imagens
$('img').bind('contextmenu', function (e) {
    return false;
});



/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list") ?
        menuMobile.classList.replace("bi-list", "bi-x") :
        menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});

/* Fecha o menu quando clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});

// Animar todos os itens na tela que tiverem meu atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();

if (item.length) {
    window.addEventListener("scroll", () => {
        animeScroll();
    })
}

// Se scroll passar em cima do botão mostrar uma mensagem 

$(document).on('scroll', function () {
    console.clear();   
    if ($(this).scrollTop() >= $('#ini-btn-habil').position().top && $(this).scrollTop() <= $('#fim-btn-habil').position().top) {        
        function myFunction(){
            alert("Eu sou um alert!");
        }
    };
});

// Ativar carregamento no botão de enviar formulário para

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", () => {
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none"
})

// Tira a mensagem de sucesso depois de 5 segundos

setTimeout(() => {
    document.querySelector('#alerta').style.display = 'none';
}, 5000);

//Barra de Progresso 
  
    $(".circle_percent").each(function () {
        var $this = $(this),
        $dataV = $this.data("percent"),
        $dataDeg = $dataV * 3.6,
        $round = $this.find(".round_per");
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
    $this.prop('Counter', 0).animate({ Counter: $dataV }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now) + "%");
        }
    });
    if ($dataV >= 51) {       
        $round.css("transform", "rotate(" + 360 + "deg)");
        setTimeout(function () {
            $this.addClass("percent_more");
        }, 1000);
        setTimeout(function () {
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        }, 1000);
    }
});

const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
};

checkBoxes();

window.addEventListener("scroll", checkBoxes);