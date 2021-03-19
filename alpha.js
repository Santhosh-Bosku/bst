window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 10){
        document.documentElement.requestFullscreen()
    }else{
        document.documentElement.webkitExitFullscrenn()
    }
}