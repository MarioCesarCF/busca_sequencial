//Elementos do HTML utilizados para demonstrar a busca em ação
const btn = document.getElementById('btn');
const result = document.getElementById('result');

//Método usado para gerar um array de 100 algarismos aleatórios de 1 a 100.
function vetorNumerosAleatorios(max) {
  return Math.floor(Math.random() * max + 1);
}

let lista = [];

for (let i = 0; i < 100; i++) {
  lista.push(vetorNumerosAleatorios(100));
}

//Variável criada para armazenar a quantidade de comparações
let contagem = 0;

//Função que executa a busca sequencial com armazenamento de comparações na variável contagem.
function buscaSequencial(lista, item) {
  for (let i = 0; i < lista.length; i++) {
    contagem++;
    if (lista[i] === item) {
      result.innerHTML = `A quantidade de comparações até achar o item foi de ${contagem + 1}`;

      return i;
    }
  }

  result.innerHTML = `A quantidade de comparações até sair da lista foi de ${contagem}`;
  
  return -1;
}

//Botão para testar a busca, altere o número para outro a sua escolha
btn.addEventListener('click', (e) => {
  e.preventDefault();

  buscaSequencial(lista, 1);

  contagem = 0;
})

