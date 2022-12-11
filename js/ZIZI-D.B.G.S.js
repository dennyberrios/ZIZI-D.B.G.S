var login="";
var senha="";
function enviar(){
    login=document.getElementById("login").value;
    senha=document.getElementById("senha").value;
    log = String(login);
    password = Number(senha);
    if(log == "adm" && password == 123){
        alert("Seja bem vindo");
        location.replace("./../ZIZI-D.B.G.S.html", "_self");
    }else{
        alert("Login ou Senha incorreto");
        document.querySelector(".alert1").style.border =  '2px solid #DB5A5A';
        document.querySelector(".alert2").style.border =  '2px solid #DB5A5A';
    }
}