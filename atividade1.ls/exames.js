export class GerenciadorExame {
    constructor(respostas, pesos) {
        this.respostas = respostas;
        this.pesos = pesos;
        this.provas = [];
    }

    /*  nome: "João",
        respostas: {
            q1: "c",
            q2: "d",
            q3: "a",
            q4: "e",
            q5: "b",
        },
        nota: 10 
    */
    adicionar(prova) {
        let nota = 0;
        for (const q in prova.respostas) {
            if (prova.respostas[q] === this.respostas[q]) {
                nota += this.pesos[q];
            }
        }
        // adicionando um novo atributo em prova
        prova.nota = nota; // novo atributo ao objeto
        this.provas.push(prova); // append de um elemento ao array
    }
    media() {
        let somador = 0;
        for (let i = 0; i < this.provas.length; i++) {
            somador += this.provas[i].nota;
        }
        let media = somador / this.provas.length;
        return media.toFixed(2);
    }
    minimo() {
        let menor = this.provas[0].nota;
        for (let i = 0; i < this.provas.length; i++) {
            if (this.provas[i].nota < menor) {
                menor = this.provas[i].nota;
            }
        }
        return menor;
    }
    maximo() {
        let maior = this.provas[0].nota;
        for (let i = 0; i < this.provas.length; i++) {
            if (this.provas[i].nota > maior) {
                maior = this.provas[i].nota;
            }
        }
        return maior;
    }
    maiorQue(limite) {
        let maiores = [];
        for (let i = 0; i < this.provas.length; i++) {
            if (this.provas[i].nota > limite) {
                maiores.push(this.provas[i]);
            }
        }
        return maiores;
    }
    menorQue(limite) {
        let menores = [];
        for (let i = 0; i < this.provas.length; i++) {
            if (this.provas[i].nota < limite) {
                menores.push(this.provas[i]);
            }
        }
        return menores;
    }
}
