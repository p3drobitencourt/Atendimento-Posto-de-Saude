class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataHoraEntrada = new Date(); 
        this.dataHoraSaida = null; 
    }

    tempoNaFila() {
        const diff = (this.dataHoraSaida || new Date()) - this.dataHoraEntrada;
        return Math.floor(diff / 1000);
    }
}
