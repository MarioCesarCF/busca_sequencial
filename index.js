//Elementos do HTML utilizados para demonstrar a busca em ação
const btnSequencial = document.getElementById("btnSequencial");
const resultSequencial = document.getElementById("resultSequencial");
const btnBinaria = document.getElementById("btnBinaria");
const resultBinaria = document.getElementById("resultBinaria");

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
      resultSequencial.innerHTML = `A quantidade de comparações até achar o item foi de ${
        contagem + 1
      } e o item buscado é ${item}.`;

      return i;
    }
  }

  resultSequencial.innerHTML = `A quantidade de comparações até sair da lista foi de ${contagem} e o item buscado era ${item}.`;

  return -1;
}

//Botão para testar a busca, altere o número para outro a sua escolha
btnSequencial.addEventListener("click", (e) => {
  e.preventDefault();

  buscaSequencial(lista, 5);

  contagem = 0;
});

//Criação de vetor com 100 algarismos e ordenados
let listaOrdenada = lista.sort((a, b) => a - b);

//Função que executa a busca binária com armazenamento de comparações na variável contagem.
function buscaBinaria(lista, item) {
  let inicio = 0;
  let fim = lista.length;
  let meio;

  while (inicio <= fim) {
    contagem++;
    meio = Math.floor((inicio + fim) / 2);

    if (lista[meio] === item) {
      resultBinaria.innerHTML = `A quantidade de comparações até achar o item foi de ${contagem} e o item buscado é ${item}.`;

      return meio;
    } else if (lista[meio] < item) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  resultBinaria.innerHTML = `A quantidade de comparações até sair da lista foi de ${contagem} e o item buscado era ${item}.`;

  return -1;
}

//Botão para testar a busca, altere o número para outro a sua escolha
btnBinaria.addEventListener("click", (e) => {
  e.preventDefault();

  buscaBinaria(listaOrdenada, 5);

  contagem = 0;
});


// OBS: optei por deixar as duas funções em um mesmo código.