function converterMoeda() {
    var moedaSelecionada = document.getElementById("moeda").value;
    var valorInformado = parseFloat(document.getElementById("valor").value);

    var cotacao;

    switch (moedaSelecionada) {
        case "dolar":
            cotacao = 5.32; // Cotação do Dólar
            break;
        case "euro":
            cotacao = 6.20; // Cotação do Euro
            break;
        case "cripto":
            cotacao = 32000; // Cotação de uma Criptomoeda fictícia
            break;
        default:
            alert("Moeda não reconhecida");
            return;
    }

    var valorConvertido = (valorInformado * cotacao).toFixed(2);
    document.getElementById("resultado").innerText = "Valor convertido: R$" + valorConvertido + " (" + moedaSelecionada + "  moeda inicial)";
}