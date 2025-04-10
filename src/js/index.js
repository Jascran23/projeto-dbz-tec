//quando clicar no botão do personagem, marcar 
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");


//inserir a classe o nome selecionado
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        //verificar se existe a classe selecionado e remover a seleção dele
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

//quando clicar no botão, mostrar as informações do personagem

