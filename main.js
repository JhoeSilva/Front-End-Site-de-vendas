//Mudar Estilo do menu de navegação ao rolar o  scrool do mouse//

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// Mostrar e Esconder as perguntas frequentes


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');



        //Mudar Icone de +/-

        const icon = faq.querySelector('.faq__icon i');
        
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else{
            icon.className = "uil uil-plus";
            
        }
    })
})


// Mostrar o Nav__menu 

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


//Fechar o Nav__menu

