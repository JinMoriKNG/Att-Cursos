async function selectMap(mapas){

    let imagensMapa = document.getElementById('ImagemMapa')

    try{
        document.getElementById('detalhes').innerHTML="Carregando..."

        await new Promise (resolve => setTimeout(resolve, 2000));

        let msgs = {
            EDG:"Sova, Kayo, Neon, Omen, Cypher",
            EG:"Viper, Killjoy, Raze, Astra, Skye",
            LOUD:"Jett, Kayo, Killjoy, Omen, Sova",
            ACD:"Viper, Skye, Brimstone, Sage, Raze"
        };

        const nomemaps = String(mapas);
        const chavesmapa = Object.keys(msgs).find(k => k===nomemaps);

        if (chavesmapa === "EDG"){
            imagensMapa.src = '/Mori jin/EdwardChampions.jpg'
            InfoMapa.innerHTML = 'Mapa mais forte - Sunset'
        }
        else if (chavesmapa === 'EG') {
            imagensMapa.src = '/Mori jin/EgChampions.jpg'
            InfoMapa.innerHTML = 'Mapa mais forte - Lotus'
        }
        else if (chavesmapa === 'LOUD') {
            imagensMapa.src = '/Mori jin/LoudChampions.jpg'
            InfoMapa.innerHTML = 'Mapa mais forte - Ascent'
        }
        else if (chavesmapa === 'ACD') {
            imagensMapa.src = '/Mori jin/AcendChampions.jfif'
            InfoMapa.innerHTML = 'Mapa mais forte - Bind'
        };
        
        document.getElementById("detalhes").innerHTML=msgs[mapas];
    }
    catch{
        document.getElementById("detalhes").innerHTML = "Erro: " + erro.message;
        console.error("Erro capturado: ", erro);
    }
}
