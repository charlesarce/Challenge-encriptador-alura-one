

var mje = document.querySelector(".text-area");

//!------------Funcion encriptar con for------------!

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function  encriptar() {

var frase= [];
for(var i = 0; i <mje.value.length; i++) {
    if(mje.value[i]=="e"){
        frase.push("enter");
    }
    if(mje.value[i]=="i"){

        frase.push("imes")
    }
    if(mje.value[i]=="a"){

        frase.push("ai")
    }
    if(mje.value[i]=="o"){

        frase.push("ober")
    }
    if(mje.value[i]=="u"){

        frase.push("ufat")
    }
    else if(mje.value[i]!="e"&&
            mje.value[i]!="i"&&
            mje.value[i]!="a"&&
            mje.value[i]!="o"&&
            mje.value[i]!="u"){
            
        frase.push(mje.value[i])
    }}
  return frase.join("")
}

//!------------Funcion desencriptar con remplace------------!

function desencriptar(){

    document.querySelector(".mensaje-resultado").textContent=(mje.value.replace(/enter/gi,"e").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/imes/gi,"i").replace(/ufat/gi,"u"))

}
//!------------Funcion para cambiar contenido de section------------!
function ocultar() {
    document.querySelector(".munheco").classList.add("ocultar")
    document.querySelector(".contenedor-texto").classList.add("ocultar")
    document.querySelector(".texto-resultado").classList.remove("ocultar")
}

//!------------Funcioes para Botones------------!

function btnEncriptar() {
    ocultar();
    document.querySelector(".text-area").value= document.querySelector(".text-area").value.toLowerCase()
    document.querySelector(".mensaje-resultado").textContent=encriptar();
}
function btnDesencriptar() {
    ocultar();
    desencriptar();
}
function copiar() {
    var inputOculto = document.createElement("input");
    inputOculto.setAttribute("value", document.querySelector(".mensaje-resultado").innerText);
    
    document.body.appendChild(inputOculto);
    inputOculto.select();
    document.execCommand("copy");
    document.body.removeChild(inputOculto);
    document.querySelector(".mensaje-copiado").classList.add("mostrar");
    setTimeout(() => {
        document.querySelector(".mensaje-copiado").classList.remove("mostrar");
    },1300)
 }
function limpiar() {
    document.querySelector(".text-area").value = "";
   document.querySelector(".text-area").focus();
}
var btnLimpiar= document.querySelector(".btn-limpiar");
btnLimpiar.onclick=limpiar;
var btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.onclick= copiar
var buttonEncriptar = document.querySelector("#btn-encriptar");
buttonEncriptar.onclick = btnEncriptar;

var buttonDesencriptar = document.querySelector("#btn-desencriptar");
    buttonDesencriptar.onclick = btnDesencriptar;
