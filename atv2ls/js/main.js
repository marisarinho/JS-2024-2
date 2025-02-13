async function fetchData(cep) {
    let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados = await retorno.json();

    // {
    //   "erro": true
    // }
    if (dados.erro) {
        return null;
    }
    return dados;
}

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

function preencherCampos(dados) {
    document.getElementById("street").value = dados.logradouro;
    document.getElementById("neighborhood").value = dados.bairro;
    document.getElementById("city").value = dados.localidade;
    document.getElementById("state").value = dados.uf;
}

let timeout;
document.getElementById("cep").addEventListener("input", (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
        const cep = event.target.value;
        const cepError = document.getElementById("cepError");

        if (validarCep(cep)) {
            const dados = await fetchData(cep);
        
            if (!dados) {
                cepError.classList.remove("hidden");

            } else {
                cepError.classList.add("hidden");
                preencherCampos(dados);
            }

        } else {
            cepError.classList.remove("hidden");
        } 
    }, 200);
});
