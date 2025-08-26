function MeAjuda() {
    const aviso = document.getElementById("aviso");
    const txt = document.getElementById("mensagem");
    const userCheck = document.getElementById("login").value;
    const passwordCheck = document.getElementById("senha").value;
    const users = [
        {log: "Ice", pass: "227"},
        {log: "Mori", pass: "Jin"},
        {log: "Monrah", pass: "420"}
    ]
    let certo = false;
    const button = document.getElementById("botao");

    for(let i=0; i < users.length; i++){
        if(userCheck === users[i].log && passwordCheck === users[i].pass){
            certo=true;
            button.innerHTML="Enviado";
            aviso.innerHTML="Verificando...";
            setTimeout(()=>{
                txt.innerHTML="Bem-vindo(a), " + users[i].log + "!";
                aviso.innerHTML="Verificado";
                window.location.href ="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
                document.getElementById("usuario").value = "";
                document.getElementById("senha").value = "";
            }, 2000)
        }
    }
    if(!certo){
        button.innerHTML = "Enviado";
        aviso.innerHTML = "Verificando...";
        setTimeout(() => {
            txt.innerHTML="Usuário ou senha incorretos.<br>Tente novamente.";
            aviso.innerHTML = "Verificado";
            document.getElementById("usuario").value = "";
            document.getElementById("senha").value = "";
            button.innerHTML = "Enviar";
        }, 2000);
    }
}