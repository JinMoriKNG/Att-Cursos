function MeAjuda() {
    const usuarios = [
        {Login:'Mori', Senha:'Fade'},
        {Login:'Ice', Senha: 'Omen'},
        {Login:'Monrrah', Senha: 'Cypher'}  
    ];
    const LoginDigitado = document.getElementById('login').value;
    const SenhaDigitada = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    const aviso = document.getElementById('aviso');
    let encontrado = false;

    for (let i = 0; i < usuarios.length; i++){
        if(LoginDigitado === usuarios[i].Login && SenhaDigitada === usuarios[i].Senha){
            encontrado = true;
            mensagem.innerHTML = 'Bem-vindo, ' + usuarios[i].Login + '!';
        }
    }

    if(!encontrado) {
        mensagem.innerHTML = 'Login ou senha incorretos.';
    }

    setTimeout(() => {
        mensagem.innerHTML = 'Verificação em andamento';
        aviso.innerHTML = 'Verificando...';
    }, 1000);

    document.getElementById('login').value = '';
    document.getElementById('senha').value = '';
}
