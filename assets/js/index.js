function abrirFormularioDuenoSalon(){
    document.getElementById("formularioDuenhoSalon").style.display="block";
    document.getElementById("formularioIndependiente").style.display="none";
}



function abrirFormularioIndependiente(){
    document.getElementById("formularioIndependiente").style.display="block";
    document.getElementById("formularioDuenhoSalon").style.display="none";
}


/*envio de formulario*/



function envioDatos() {
    var nombre;
    nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("campo nombre esta vacio");
        return false;
    }
    
}

function envioDatos() {
    document.getElementById("enviado").style.display="flex"
    document.getElementById("contenido").style.display="none"
}