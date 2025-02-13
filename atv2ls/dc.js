// Tu entendeu pq eu subdividi tudo

/* 
Eu dividi em: 
1. Pegar os dados
2. Verificar os dados
3. Colocar os dados

*/

// Pegar os dados
async function fetchData(cep) {
    let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados = await retorno.json();

    // {
    //   "erro": true
    // }
    // nes
    if (dados.erro) {
        return null;
    }
    return dados;
}
// ai a gente vai ter que exibir um elemento html e nao um console.logtipo usando aquela aspas trocada? como assim
`

`;
/* 
é que os parametros do .addEventListener são: str(tipo do evento) e callback(funcao que sera executada)

*/

/* 
Isso aqui é uma funcao anonima

() => {}

quando você declara ali a funcao anonima
esse event é passado automaticamente pelo addEventListener.
Ai você pode usar esse parametro na sua funcao

por exemplo...

quero pegar o valor do input

sempre que o usuario digita algo no input, ele dispara um evento
e passa o evento para a funcao
que é o callback
e executa essa funcao

*/

/* 
retorna bool
*/

// Validar os dados
function validarCep(cep) {
    if (/[^0-9]/.test(cep)) {
        console.log("Digite apenas números");
        return false;
    }
    if (cep.length !== 8) {
        console.log("CEP inválido!");
        return false;
    }
    return true;
}

// Colocar os dados
function preencherCampos(dados) {
    document.getElementById("street").value = dados.logradouro;
    document.getElementById("neighborhood").value = dados.bairro;
    document.getElementById("city").value = dados.localidade;
    document.getElementById("state").value = dados.uf;
}

// Colocar os dados, porém de vdd  ele tando tudo junto deix
// Sim, principalmente nas coisas assicronas pq tem muito await e os caramba
// Também dificulta pra deixar as coisas claras
// No teu codigo tem duas funcoes com nomes muito parecidos olha
let timeout;
document.getElementById("cep").addEventListener("input", (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
        const cep = event.target.value;
        const cepError = document.getElementById("cepError");

        // Se for valido entra aqui
        if (validarCep(cep)) {
            const dados = await fetchData(cep);
            // se nao tiver dados (o fetch nao deu certo)(quais chances do fetch dar errado?) ele tira o hidden tbm e exibe o erro
            if (!dados) {
                cepError.classList.remove("hidden");
            // se der tudo certo a gente coloca o hidden pra esconder o erro
            } else {
                cepError.classList.add("hidden");
                preencherCampos(dados);
            }
        // se não for valido ele tira a classe hidden do ceprror (exibindo o erro) 
        } else {
            cepError.classList.remove("hidden");
        } 
    }, 200);KKKKKKKKKKKKKKKKKKKKKKKKKK quase 9/10
    // Esse event.target é de onde vem
    // Value é o valor, pq a gente ta botando no console
    // Ele vem do input e vc quer pegar o valor
    // Que é o cep que a pessoa vai digitar
});
