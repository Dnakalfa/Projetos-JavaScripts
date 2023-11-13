function converterMoeda() {
    var moedaSelecionada = document.getElementById("moeda").value;
    var valorInformado = parseFloat(document.getElementById("valor").value);

    var cotacao;

    switch (moedaSelecionada) {
        case "dolar":
            cotacao = 4.91; // Cotação do Dólar
            break;
        case "euro":
            cotacao = 5.26; // Cotação do Euro
            break;
        case "cripto":
            cotacao = 181929.01; // Cotação de uma Criptomoeda
            break;
        case "Peso Argentino":
            cotacao = 0.014; // cotação deo peso Argentino
            break;
        default:
            alert("Moeda não reconhecida");
            return;
    }

    var valorConvertido = (valorInformado * cotacao).toFixed(2);
    document.getElementById("resultado").innerText = "Valor convertido: R$" + valorConvertido + " (" + moedaSelecionada + "  moeda inicial)";
}