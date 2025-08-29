async function selectMap(mapas){

    const Haven = document.createElement('Haven')
    Haven.src = 'imgs/Haven.avif'

    try{
        document.getElementById('detalhes').innerHTML="Carregando..."

        await new Promise (resolve => setTimeout(resolve, 2000));

        let msgs = {
            "Haven":"Sova, Yoru, Breach, Omen, Cypher",
            "Icebox":"Viper, Killjoy, Jett, Sova, Sage",
            "Corrode":"Waylay, Vyse, Fade, Omen, Viper",
            "Bind":"Yoru, Fade, Brimstone, Kayo, Cypher"
        };

        let maps = {
            'Haven': Haven
        }
        
        document.createElement('imagens')
        document.getElementById("detalhes").innerHTML=msgs[mapas];
    }
    catch{
        document.getElementById("detalhes").innerHTML = "Erro: " + erro.message;
        console.error("Erro capturado: ", erro);
    }
}