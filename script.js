const userMessageText =document.querySelector(".txt_userMensaje");
const encDesMessageText =document.querySelector(".txt_desencriptado");
const btn_copiar =document.querySelector(".btn_copiar");
/*const txtInformativo =document.querySelector(".descripcion_mensajeFaltante");*/
const imagenFaltante =document.querySelector("#imagen");
const descripcionFaltante =document.querySelector(".mensaje_encriptado");

function btnEncriptar(){
    
    const textoEncriptado= encriptar(userMessageText.value);
    if( textoEncriptado!=""){
        encDesMessageText.value= textoEncriptado;
        userMessageText.value="";
        /*encDesMessageText.style.backgroundImage="none";*/
        imagenFaltante.style.visibility="hidden";
        descripcionFaltante.style.visibility="hidden";
        btn_copiar.style.visibility="visible";

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Lo siento',
            text: 'El valor introducido es incorrecto!',
            width: '60%',
            toast: true
          })

    }
    
}
function btnDesencriptar(){
    const textoEncriptado= desencriptar(userMessageText.value);
    if(textoEncriptado!=""){
        encDesMessageText.value= textoEncriptado;
        userMessageText.value="";
        imagenFaltante.style.visibility="hidden";
        descripcionFaltante.style.visibility="hidden";
        btn_copiar.style.visibility="visible";
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Lo siento',
            text: 'El valor introducido es incorrecto!',
            width: '60%',
            toast: true
          })

    }
    
  
}
function btnCopiar(){
    const textoAcopear= encDesMessageText.value;

    if(textoAcopear!=""){
        //userMessageText.value=textoAcopear;
        navigator.clipboard.writeText(textoAcopear)
        .then(() => {
        console.log('Text copied to clipboard');
        })
         .catch(err => {
        console.error('Error in copying text: ', err);
        });
        //encDesMessageText.value= "";
        //imagenFaltante.style.visibility="visible";
        //descripcionFaltante.style.visibility="visible";
        //btn_copiar.style.visibility="hidden";
    }
    
  
}
function encriptar(messageTo){

    let codigo=[["e" , "enter"], ["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    messageTo= messageTo.toLowerCase();

    for(let i=0; i<codigo.length; i++){
        if(messageTo.includes(codigo[i][0])){
            messageTo= messageTo.replaceAll(codigo[i][0], codigo[i][1]);   
        }


    }
    return messageTo;


}


function desencriptar(messageTo){

    let codigo=[["e" , "enter"], ["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    messageTo= messageTo.toLowerCase();

    for(let i=0; i<codigo.length; i++){
        if(messageTo.includes(codigo[i][1])){
            messageTo= messageTo.replaceAll(codigo[i][1], codigo[i][0]);       
        }
    }
    return messageTo;


}

