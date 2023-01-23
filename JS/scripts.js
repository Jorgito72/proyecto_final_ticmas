
// funcion para mostrar articulo de experiencia
document.getElementById("experiencia").addEventListener("click", function(){
    document.getElementById('art_experiencia').style.display="block";
    document.getElementById('art_skills').style.display="none";
    document.getElementById('art_proyectos').style.display="none";
    document.getElementById('art_contact').style.display="none";
    document.getElementById('contenedor_central').style.display="none";
    });

// funcion para mostrar articulo de skills

 document.getElementById("skills").addEventListener("click", function(){
        document.getElementById('art_skills').style.display="flex";
        document.getElementById('art_experiencia').style.display="none"
        document.getElementById('art_contact').style.display="none";
        document.getElementById('art_proyectos').style.display="none";
        document.getElementById('contenedor_central').style.display="none";
        });

 // funcion para mostrar articulo de creaciones

 document.getElementById("proyectos").addEventListener("click", function(){
    document.getElementById('art_proyectos').style.display="block";
    document.getElementById('art_experiencia').style.display="none"
    document.getElementById('art_contact').style.display="none";
    document.getElementById('art_skills').style.display="none";
    document.getElementById('contenedor_central').style.display="none";
    });

// funcion para mostrar articulo de contacto

document.getElementById("contact").addEventListener("click", function(){
    document.getElementById('art_contact').style.display="block";
    document.getElementById('art_experiencia').style.display="none"
    document.getElementById('art_proyectos').style.display="none";
    document.getElementById('art_skills').style.display="none";
    document.getElementById('contenedor_central').style.display="none";
    });    

 // funcion para mostrar articulo de contacto

document.getElementById("header").addEventListener("click", function(){
    document.getElementById('art_contact').style.display="none";
    document.getElementById('art_experiencia').style.display="none"
    document.getElementById('art_proyectos').style.display="none";
    document.getElementById('art_skills').style.display="none";
    document.getElementById('contenedor_central').style.display="block";
    });       