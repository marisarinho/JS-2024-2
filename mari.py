prova = {
    "nome": "Davi",
    "respostas": {
        "q1": 'a',
        "q2": 'b',
        "q3": 'c',
        "q4": 'd',
        "q5": 'e'
    }
}

gabarito = {
    "q1": 'a',
    "q2": 'b',
    "q3": 'c',
    "q4": 'd',
    "q5": 'e'
}

pesos = {
    "q1": 1,
    "q2": 1,
    "q3": 2,
    "q4": 1,
    "q5": 4
}

def adicionar(prova):
    cont = 0
    for i in prova["respostas"]:
        if (prova['respostas'][i]) == (gabarito[i]):
            cont+=(pesos[i])
    print(cont)

adicionar(prova)   
