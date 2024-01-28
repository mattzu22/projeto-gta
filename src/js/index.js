const listaDeJogos = document.querySelector("#lista-de-jogos");


document.querySelector("#btn-plataforma").addEventListener("click", ()=>{
    listaDeJogos.classList.toggle("ativo");
})