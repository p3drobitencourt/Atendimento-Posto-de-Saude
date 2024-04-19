 // Crie uma instância da fila
 let minhaFila = new FilaCircular(5);

 // Função para adicionar um elemento à fila
 function adicionarElemento() {
  const atendimento = new Atendimento(document.getElementById('txtnovoNome').value,document.getElementById('txtnovoCpf').value,obterDataAtual(), obterHoraAtual());

  if (atendimento.nome && atendimento.cpf) {
      if(minhaFila.enqueue(atendimento)) {
      atualizarFila();
      document.getElementById('txtnovoNome').value = '';
      document.getElementById('txtnovoCpf').value = '';

      }else{
        alert("Fila cheia!");
      } 
  } else {
      alert('Por favor, preencha o nome e o CPF.');
  }
 }
//--------------------------------------------------------------------------------------------
 // Função para remover o primeiro elemento da fila
 function removerElemento() {
   if(!minhaFila.isEmpty()){
    mostrarMensagemRemocao(minhaFila.dequeue());
    atualizarFila();
   }else{
     alert("Fila vazia!");
   }
    
 }
 //--------------------------------------------------------------------------------
 function buscarCpf() {
  const cpf = document.getElementById('txtnovoCpf').value;
  let pessoaEncontrada = false;
  if(cpf){
    for (const elemento of minhaFila) {
      if(elemento.cpf === cpf){
        alert("Pessoa encontrada, nome ="+ elemento.nome);
        break;
      }
    }
  
    if (!pessoaEncontrada) {
      alert("Pessoa não encontrada");
   }
  }else{
    alert('Por favor, preencha o CPF.');
  }
  
}
//--------------------------------------------------------------------------------------------
function mostrarMensagemRemocao(pessoaAtendida) {
  const mensagem = document.getElementById('mensagem-remocao');
  mensagem.textContent = `Pessoa atendida: ${pessoaAtendida.nome}; Chegou às ${pessoaAtendida.hora} e está sendo atendida ás ${obterHoraAtual()}, tempo de espera: ${calcularDiferencaHoras(pessoaAtendida.hora,obterHoraAtual())}`
}
//--------------------------------------------------------------------------------------------
 // Função para atualizar a exibição da fila
 function atualizarFila() {
      const lbl = document.getElementById('lblPessoasFila');
      if(minhaFila.isEmpty()){
        lbl.textContent = "Fila vazia!";
      }else if(minhaFila.isFull()){
        lbl.textContent = "Fila cheia!";
      }else{
        lbl.textContent = "Pessoas na fila:";
      }

      const listaFila = document.getElementById('listFila');
      listaFila.innerHTML = ''; // Limpar lista atual
      
      listaFila.innerHTML = minhaFila.toString();
      console.log(minhaFila.toString());


  };

//--------------------------------------------------------------------------------------------
 // funcao data
 function obterDataAtual() {
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque o mês inicia do zero
    let ano = dataAtual.getFullYear();
    // Formata a data como "dd/mm/aaaa"
    let dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
    return dataFormatada;
}
//--------------------------------------------------------------------------------------------
function obterHoraAtual() {
  const data = new Date();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');
  return `${hora}:${minuto}:${segundo}`;
}
//--------------------------------------------------------------------------------------------
function calcularDiferencaHoras(hora1, hora2) {
  const [h1, m1, s1] = hora1.split(':').map(Number);
  const [h2, m2, s2] = hora2.split(':').map(Number);
  
  const diferencaSegundos = (h2 * 3600 + m2 * 60 + s2) - (h1 * 3600 + m1 * 60 + s1);
  
  const horas = Math.floor(diferencaSegundos / 3600);
  const minutos = Math.floor((diferencaSegundos % 3600) / 60);
  const segundos = diferencaSegundos % 60;
  
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
