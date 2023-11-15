const form = document.getElementById('form-disciplina')
let linhas = ''
const imgAprovado = '<img src="./images/aprovado.png"/>'
const imgReprovado = '<img src="./images/reprovado.png"/>'
const aprovado = '<span class="resultado aprovado">Aprovado</span>'
const reprovado = '<span class="resultado reprovado">Reprovado</span>'
const disciplinas = []
const notas = []
const notaMinima = parseFloat(prompt("Qual a nota minima para ser aprovado?"))

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinhas()
    atualizaTable()
    atualizaMedia()
})

function adicionaLinhas() {
    const inputDisciplina = document.getElementById('nome-disciplina')
    const inputNota = document.getElementById('nota-disciplina')

    if(disciplinas.includes(inputDisciplina.value)) {
        alert(`A Disciplina ${inputDisciplina.value} já foi adicionada!!!`)
    } else {
        disciplinas.push(inputDisciplina.value)
        notas.push(parseFloat(inputNota.value))
        let linha = '<tr>'
        linha += `<td>${inputDisciplina.value}</td>`
        linha += `<td>${inputNota.value}</td>`
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
        linhas += linha
    }
    
    inputDisciplina.value = ''
    inputNota.value = ''
}

function atualizaTable() {
    const bodyTable = document.querySelector('tbody')
    bodyTable.innerHTML = linhas
}

function calculaMedia() {
    let soma = 0
    
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    return soma / notas.length
}

function atualizaMedia() {
    const media = calculaMedia()

    document.getElementById('media-final-valor').innerHTML = media.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = media >= notaMinima ? aprovado : reprovado
}