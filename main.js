const button = document.getElementById("button");
const nome = document.getElementById("nome-contato");
const telefone = document.getElementById("telefone-contato");
const errorContainer = document.getElementById("error");
const errorMessageIncomplete = `Todos os campos devem ser preenchidos.`;
const errorMessageDuplicate = `O contato já foi adicionado.`;

let contatos = ``;
let nomes = [];

function adicionarContato(e) {
  e.preventDefault();

  if (nome.value.trim() === "" || telefone.value.trim() === "") {
    error.classList.remove("display");
    return (error.innerHTML = errorMessageIncomplete);
  } else if (nomes.includes(nome.value.trim())) {
    error.classList.remove("display");
    return (error.innerHTML = errorMessageDuplicate);
  } else {
    error.innerHTML = "";
    error.classList.add("display");
    criarContato();
    atualizarTabela();
  }
}

function criarContato() {
  let contato;
  contato = `<tr>`;
  contato += `<td><div class="icon">${nome.value
    .trim()
    .charAt(0)
    .toUpperCase()}</div></td>`;
  contato += `<td>${nome.value}</td>`;
  contato += `<td>${telefone.value}</td>`;
  contato += `</tr>`;

  contatos += contato;

  nomes.push(nome.value);
}

function atualizarTabela() {
  const tabela = document.querySelector("tbody");
  tabela.innerHTML = contatos;

  nome.value = "";
  telefone.value = "";
}

button.addEventListener("click", adicionarContato);
