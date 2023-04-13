let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarocultarmenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

