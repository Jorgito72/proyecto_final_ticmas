const { style } = require("@angular/animations");

// funcion para mostrar articulo de experiencia
function mostrarArtExperiencia(){
    if(document.getElementById('art_experiencia').style.display="none"){
        document.getElementById('art_experiencia').style.display="block";
    }
}

// funcion para ocultar articulo de experiencia
function ocultarArtExperiencia(){
    if(document.getElementById('art_experiencia').style.display="block"){
        document.getElementById('art_experiencia').style.display="none";
    }
}

// document.getElementById("experiencia").addEventListener("click", function(){
//     document.getElementById('art_experiencia').style.display="block";
//     document.getElementById('art_skills').style.display="none";
//     document.getElementById('art_proyectos').style.display="none";
//     document.getElementById('art_contact').style.display="none";
//     document.getElementById('contenedor_central').style.display="none";
//     });

// funcion para mostrar articulo de skills
function mostrarArtSkills(){
    if(document.getElementById('art_skills').style.display="none"){
        document.getElementById('art_skills').style.display="block";
    }
}

// funcion para ocultar articulo de skills
function ocultarArtSkills(){
    if(document.getElementById('art_skills').style.display="block"){
        document.getElementById('art_skills').style.display="none";
    }
}

//  document.getElementById("skills").addEventListener("click", function(){
//         document.getElementById('art_skills').style.display="flex";
//         document.getElementById('art_experiencia').style.display="none"
//         document.getElementById('art_contact').style.display="none";
//         document.getElementById('art_proyectos').style.display="none";
//         document.getElementById('contenedor_central').style.display="none";
//         });

 // funcion para ocultar articulo de proyectos
 function ocultarArtProyectos(){
    if(document.getElementById('art_proyectos').style.display="block"){
        document.getElementById('art_proyectos').style.display="none";
    }
}

// funcion para mostrar articulo de proyecto
function mostrarArtProyectos(){
    if(document.getElementById('art_proyectos').style.display="none"){
        document.getElementById('art_proyectos').style.display="block";
    }
}

//  document.getElementById("proyectos").addEventListener("click", function(){
//     document.getElementById('art_proyectos').style.display="block";
//     document.getElementById('art_experiencia').style.display="none"
//     document.getElementById('art_contact').style.display="none";
//     document.getElementById('art_skills').style.display="none";
//     document.getElementById('contenedor_central').style.display="none";
//     });

// funcion para mostrar articulo de contacto

// document.getElementById("contact").addEventListener("click", function(){
//     ocultarArtContact();
//     // document.getElementById('art_contact').style.display="block";
//     document.getElementById('art_experiencia').style.display="none"
//     document.getElementById('art_proyectos').style.display="none";
//     document.getElementById('art_skills').style.display="none";
//     document.getElementById('contenedor_central').style.display="none";
//     }); 
    
    

 // funcion para mostrar articulo de contacto
 function mostrarArtContact(){
        if(document.getElementById('art_contact').style.display="none"){
            document.getElementById('art_contact').style.display="block";
        }
    }
// funcion para ocultar articulo de contacto
    function ocultarArtContact(){
        if(document.getElementById('art_contact').style.display="block"){
            document.getElementById('art_contact').style.display="none";
        }
    }

    // funcion para mostrar header
    function mostrarArtCentral(){
        if(document.getElementById('contenedor_central').style.display="none"){
            document.getElementById('contenedor_central').style.display="block";
        }
    }
    
    // funcion para ocultar header
    function ocultarArtCentral(){
        if(document.getElementById('contenedor_central').style.display="block"){
            document.getElementById('contenedor_central').style.display="none";
        }
    }

// document.getElementById("header").addEventListener("click", function(){
//     // ocultarArtContact;
//     document.getElementById('art_contact').style.display="none"
//     document.getElementById('art_experiencia').style.display="none"
//     document.getElementById('art_proyectos').style.display="none";
//     document.getElementById('art_skills').style.display="none";
//     document.getElementById('contenedor_central').style.display="block";
//     });       

   