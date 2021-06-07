window.onscroll = function scrolledTwo()
{
    if(window.scrollY >= 50)
    {
        document.querySelector('.search h1').classList.add("display-none");
        document.querySelector('.search').classList.add("bg-change");
        document.querySelector('.search input').classList.add("margin-zero");

    }
    else if(window.scrollY < 50)
    {
        document.querySelector('.search h1').classList.remove("display-none");
        document.querySelector('.search').classList.remove("bg-change");
        document.querySelector('.search input').classList.remove("margin-zero");

    }
}
