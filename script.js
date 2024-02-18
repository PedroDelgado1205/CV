let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        //habilidades
        habilidades[0].classList.add("Dibujo");
        habilidades[1].classList.add("Cocina");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("Programación");
        habilidades[4].classList.add("Diseño");
        //aptitudes
        habilidades[5].classList.add("Resiliencia");
        habilidades[6].classList.add("Tenacidad");
        habilidades[7].classList.add("Competencia");
        habilidades[8].classList.add("Creatividad");
        habilidades[9].classList.add("Adaptabilidad");
        //comocimientos
        habilidades[10].classList.add("Java");
        habilidades[11].classList.add("Python");
        habilidades[12].classList.add("JavaScrip");
        habilidades[13].classList.add("TypeScript");
        habilidades[14].classList.add("Kotlin");
        habilidades[15].classList.add("SQL");
        habilidades[16].classList.add("Pascal");
        habilidades[17].classList.add("VisualBasic");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 