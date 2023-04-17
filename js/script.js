function encriptar() {
    /* enlace  mediante document.getElementById("textoEncriptado") a mi documento html, ademas atravez de .value.toLowerCase(); aconvertira las letras mayusculas en minusculas */
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();


    /* igualamos la palabra textoEncriptado a frase el "replace" reemplaza valores en el primer caso reemplaza e por enter.  */

    /* img significa 
    i => tome letras mayusculas y minusculas
    m => tome en cuenta multiples lineas
    g=> tome en cuenta toda la linea u oracion */
    var textoEncriptado = frase.replace(/e/img,"enter")
    var textoEncriptado = textoEncriptado.replace(/i/img,"imes")
    var textoEncriptado = textoEncriptado.replace(/a/img,"ai")
    var textoEncriptado = textoEncriptado.replace(/o/img,"ober")
    var textoEncriptado = textoEncriptado.replace(/u/img,"ufat")

document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
//Cuando le demos click al boton aparecera el boton copiar
document.getElementById("botonCopiar").style.display = "show";
document.getElementById("botonCopiar").style.display = "inherit";

}



function desencriptar() {
    /* enlace  mediante document.getElementById("textoEncriptado") a mi documento html, ademas atravez de .value.toLowerCase(); aconvertira las letras mayusculas en minusculas */
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();


    /* igualamos la palabra textoEncriptado a frase el "replace" reemplaza valores en el primer caso reemplaza e por enter.  */

    /* img significa 
    i => tome letras mayusculas y minusculas
    m => tome en cuenta multiples lineas
    g=> tome en cuenta toda la linea u oracion */
    var textoEncriptado = frase.replace(/enter/img,"e" )
    var textoEncriptado = textoEncriptado.replace(/imes/img,"i")
    var textoEncriptado = textoEncriptado.replace(/ai/img,"a")
    var textoEncriptado = textoEncriptado.replace(/ober/img,"o")
    var textoEncriptado = textoEncriptado.replace(/ufat/img,"u")

document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

}

//funcion para copiar

function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}