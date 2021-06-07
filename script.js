header = document.querySelector('header');
header = document.querySelector('header');
window.onscroll =function scrolled()
{
    scrolledOne();
    scrolledTwo();
}

function scrolledOne()
{
    if(window.scrollY >= 50)
    {
        document.getElementById('header').classList.add("scrolled");
        document.getElementById('logoh1').classList.add("h1-scrolled");
        document.querySelectorAll('nav a').forEach((link) =>{
            link.classList.add('h1-scrolled')
        })
        document.querySelectorAll('#burger-menu div').forEach((row) =>{
            row.classList.add('bg-black')
        })
    }
    else if(window.scrollY < 50)
    {
        document.getElementById('header').classList.remove("scrolled");
        document.getElementById('logoh1').classList.remove("h1-scrolled");
        document.querySelectorAll('nav a').forEach((link) =>{
            link.classList.remove('h1-scrolled')
        })
        document.querySelectorAll('#burger-menu div').forEach((row) =>{
            row.classList.remove('bg-black')
        })
    }
}



