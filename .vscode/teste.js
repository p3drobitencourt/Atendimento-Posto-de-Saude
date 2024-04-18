
const fila = new FilaAtendimento();

function adicionarNaFila() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    if (nome && cpf) {
        fila.incluirPessoa(nome, cpf);
        atualizarListaFila();
        document.getElementById('nome').value = '';
        document.getElementById('cpf').value = '';
    } else {
        alert('Por favor, preencha o nome e o CPF.');
    }
}

function buscarPorCPF() {
    const cpf = prompt('Digite o CPF a ser buscado:');
    if (cpf) {
        fila.buscarPorCPF(cpf);
    }
}

function atenderCliente() {
    fila.atenderPessoa();
    atualizarListaFila();
}

function atualizarListaFila() {
    const listaFila = document.getElementById('listaFila');
    listaFila.innerHTML = ''; // Limpar lista atual

    fila.fila.forEach(pessoa => {
        const li = document.createElement('li');
        li.textContent = `${pessoa.nome} - CPF: ${pessoa.cpf}`;
        listaFila.appendChild(li);
    });
}

document.getElementById('nome').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarNaFila();
    }
});

document.getElementById('cpf').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarNaFila();
    }
});
