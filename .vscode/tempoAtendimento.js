class FilaAtendimento {
    constructor() {
        this.fila = []; 
    }

    incluirPessoa(nome, cpf) {
        const pessoa = new Pessoa(nome, cpf);
        this.fila.push(pessoa);
        return pessoa;
    }

    atenderPessoa() {
        if (this.fila.length === 0) {
            console.log("Não há pessoas na fila.");
            return;
        }

        const pessoaAtendida = this.fila.shift();
        pessoaAtendida.dataHoraSaida = new Date(); 
        const tempoFila = pessoaAtendida.tempoNaFila();
        
        console.log(`Atendendo ${pessoaAtendida.nome}`);
        console.log(`Hora de entrada: ${pessoaAtendida.dataHoraEntrada.toLocaleString()}`);
        console.log(`Hora de saída: ${pessoaAtendida.dataHoraSaida.toLocaleString()}`);
        console.log(`Tempo na fila: ${tempoFila} segundos`);
    }

    verificarFila() {
        if (this.fila.length === 0) {
            console.log("Não há pessoas na fila.");
            return;
        }

        console.log("Pessoas na fila:");
        this.fila.forEach(pessoa => {
            console.log(`- ${pessoa.nome}`);
        });
    }

    buscarPorCPF(cpf) {
        const pessoa = this.fila.find(p => p.cpf === cpf);
        if (pessoa) {
            console.log(`Pessoa encontrada na fila: ${pessoa.nome}`);
        } else {
            console.log(`Pessoa com CPF ${cpf} não encontrada na fila.`);
        }
    }
}
