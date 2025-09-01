async function selectMap(mapas){

    let imagensMapa = document.getElementById('ImagemMapa')

    try{
        document.getElementById('detalhes').innerHTML="Carregando..."

        await new Promise (resolve => setTimeout(resolve, 2000));

        let msgs = {
            Haven:"Sova, Yoru, Breach, Omen, Cypher",
            Icebox:"Viper, Killjoy, Jett, Sova, Sage",
            Corrode:"Waylay, Vyse, Fade, Omen, Viper",
            Bind:"Yoru, Fade, Brimstone, Kayo, Cypher"
        };

        const nomemaps = String(mapas);
        const chavesmapa = Object.keys(msgs).find(k => k===nomemaps);

        if (chavesmapa === "Haven"){
            imagensMapa.src = '/Mori jin/HavenMapa.png'
        }
        else if (chavesmapa === 'Icebox') {
            imagensMapa.src = '/Mori jin/IceboxMapa.png'
        }
        else if (chavesmapa === 'Corrode') {
            imagensMapa.src = '/Mori jin/CorrodeMapa.png'
        }
        else if (chavesmapa === 'Bind') {
            imagensMapa.src = '/Mori jin/BindMapa.png'
        };
        
        document.getElementById("detalhes").innerHTML=msgs[mapas];
    }
    catch{
        document.getElementById("detalhes").innerHTML = "Erro: " + erro.message;
        console.error("Erro capturado: ", erro);
    }
}
