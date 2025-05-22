let gen =document.querySelector("#btngen");
let confirmar=document.querySelector("#btnconfirmar");
let enviar =document.querySelector("#enviar");

gen.addEventListener("click",randomString);
confirmar.addEventListener("click",confirmarCaptcha);
enviar.addEventListener("click",enviarMensaje);

let texto= document.getElementById("textcaptcha");
let feedback= document.getElementById("feedbackcaptcha");
let resultado= document.getElementById("resultadocaptcha");

resultado.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
      confirmarCaptcha();
    }
});

let ultimo_captcha="adminadmin";
let humano=false;


function randomString(){
    let alfanum=["a","b","c","d","e","f","g","h","i","j","k","l","m", 
             "n","o","p","q","r","s","t","u","v","w","x","y","z",
             "0","1","2","3","4","5","6","7","8","9"];

    let captcha="";    
    let longitud= Math.floor(Math.random() * 5)+6; //la longitud del captcha es minima de 6
    let nextchar='';

    for(i=0;i<longitud;i++){
        nextchar=alfanum[Math.floor(Math.random() * alfanum.length)];
        captcha+=nextchar;
    }
    ultimo_captcha=captcha;
    texto.innerHTML=captcha;

}


function confirmarCaptcha(){

    if(ultimo_captcha==resultado.value){
        feedback.className="captchacorrecto";
        feedback.innerHTML="Captcha Correcto.";
        humano=true;
        document.getElementById("formcaptcha").className="ocultarcaptcha";

    }
    else{
        feedback.className="captchaincorrecto";
        feedback.innerHTML="Captcha Incorrecto.";
    }
}


function enviarMensaje(){
    if (humano) {//paso el captcha correctamente
        //aca se verificaria los datos para no almacenar mensajes vacios y se mandaria a la DB el input
        console.log("informacion enviada");
    }
    else{
        feedback.className="captchaincorrecto";
        feedback.innerHTML="complete el captcha";
        event.preventDefault();// impide que se refresque la pagina
    }

}