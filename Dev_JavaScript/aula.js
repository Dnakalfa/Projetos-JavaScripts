class Pessoa {
    nome;
    peso;
    altura;
    
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso/ Math.pow(this.altura, 2);
    }
    classificarImc(){
        const imc = this.calcularImc();

        if (imc < 18.5){
            return "Abaixo do peso";
        } else if (imc >=18.5 && imc <= 25) {
            return "Peso normal";
        } else if (imc > 25 && imc <= 30) {
            return "Acima do peso";
        } else if (imc > 30 && imc <= 40) {
            return "Obeso";
        } else {
            return "Obesidade Morbida";
        }
    }
    
}

function main(){

    const beto = new Pessoa("Beto", 80, 1.76);
    const carol = new Pessoa("Carol", 80, 1.70);
    const roro = new Pessoa("Roberta", 75, 1.50);
    console.log(beto.classificarImc());
    console.log(carol.classificarImc());
    console.log(roro.classificarImc());

}

main();