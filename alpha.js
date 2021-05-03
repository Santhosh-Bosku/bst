const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav ul li a');
const logo = document.querySelector('#logo h1');
logo.style.color="green";
console.log(navLinks)
window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 50){
        // header.classList.add('scrolled')
        header.setAttribute("class","scrolled")
        header.style.backgroundColor="white";
        logo.style
        // navLinks.forEach((link) =>{
        //     link.classList.add('navScrolled')
        // })
        // logo.classList.add('navScrolled')
    }else{
        // header.classList.remove('scrolled')
        header.removeAttribute("class","scrolled")
        // navLinks.forEach((link) =>{
        //     link.classList.remove('navScrolled')
        // })
        // logo.classList.remove('navScrolled')
    }
}