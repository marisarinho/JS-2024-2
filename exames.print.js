import { GerenciadorExame } from "./exames.js";

const provas = [
    {
        nome: "Davi",
        respostas: {
            q1: "a",
            q2: "b",
            q3: "c",
            q4: "d",
            q5: "e",
        },
    },
    {
        nome: "Maria",
        respostas: {
            q1: "b",
            q2: "a",
            q3: "d",
            q4: "c",
            q5: "e",
        },
    },
    {
        nome: "João",
        respostas: {
            q1: "c",
            q2: "d",
            q3: "a",
            q4: "e",
            q5: "b",
        },
    },
];

const respostas = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "d",
    q5: "e",
};

const pesos = {
    q1: 1,
    q2: 1,
    q3: 2,
    q4: 1,
    q5: 4,
};

const gerenciadorExame = new GerenciadorExame(respostas, pesos);

for (const prova of provas) {
    gerenciadorExame.adicionar(prova);
}

console.log("Media: ");
console.log(gerenciadorExame.media());
console.log("Minimo: ");
console.log(gerenciadorExame.minimo());
console.log("Máximo: ");
console.log(gerenciadorExame.maximo());
console.log("Maior que 5: ");
console.log(gerenciadorExame.maiorQue(5));
console.log("Menor que 5: ");
console.log(gerenciadorExame.menorQue(5));


// pronto gatinha terminou