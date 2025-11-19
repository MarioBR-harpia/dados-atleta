class Atleta { // Criação de um Classe atleta com o constructor para inserir os parametros
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() { // Condição if para as categorias, no caso com o parametro this.idade
        if (this.idade >= 9 && this.idade <= 11) return "Infantil";
        if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
        if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
        if (this.idade >= 16 && this.idade <= 30) return "Adulto";
        return "Sem categoria";
    }

    calculaIMC() { //Calculo do IMC  = "Peso/altura ao quadrado"
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notasGerais = this.notas;
        let notasOrganizadas = notasGerais.sort(function(a, b) { 
            return a - b; //Usado para deixar na ordem crescente
        });
        let notasComputadas = notasOrganizadas.slice(1, 4); // elimina a primeira e ultima posiçao
        let somaNotasComputadas = notasComputadas.reduce(function(total, atual) { //Somatorio das notas
            return total + atual;
        }, 0);
        let media = (somaNotasComputadas / notasComputadas.length);
        return media; //media aritmetica das notas
    }
// a partir daqui a funçôes sao criadas para retornar cada this
    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.altura);
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());