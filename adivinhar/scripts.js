var jogoAtivo = true;
const numeroSecreto = Math.floor(Math.random() * 1001);

function adivinharNumero() {
    
    if (!jogoAtivo) {
        return; // Se o jogo não estiver ativo, não executa a função
    }
    
    var chute = parseInt(document.getElementById("chute").value);
    var resultado = document.getElementById("resultado");

    if (chute === numeroSecreto) {
        resultado.innerText = "Parabéns, você acertou o número secreto!";
        jogoAtivo = false; // Define o jogo como inativo, impedindo novas tentativas
    } else if (chute > numeroSecreto) {
        resultado.innerText = "Errou... o número secreto é menor!";
    } else if (chute < numeroSecreto) {
        resultado.innerText = "Errou... o número secreto é maior!";
    }
}
