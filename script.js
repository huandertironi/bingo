const numerosSorteados = [];

const frasesPorNumero = {
  1: "Começou o jogo!",
  11: "Dois magrelos no calçadão",
  22: "Dois patinhos na lagoa",
  33: "Idade de Cristo",
  44: "Quarenta e quatro, o cavalo!",
  51: "Boa ideia!",
  55: "Dois garfos",
  66: "Pernas de galinha",
  69: "Número ousado!",
  75: "Acabou o jogo!"
};

function obterLetra(numero) {
  if (numero <= 15) return "B";
  if (numero <= 30) return "I";
  if (numero <= 45) return "N";
  if (numero <= 60) return "G";
  return "O";
}

function sortearNumero() {
  if (numerosSorteados.length >= 75) {
    alert("Todos os números foram sorteados!");
    return;
  }

  let num;
  do {
    num = Math.floor(Math.random() * 75) + 1;
  } while (numerosSorteados.includes(num));

  numerosSorteados.push(num);
  const letra = obterLetra(num);
  const texto = `${letra} ${num < 10 ? "0" + num : num}`;

  // Atualiza número principal com espaço entre letra e número
  document.getElementById("number").innerText = texto;

  // Atualiza frase
  const frase = frasesPorNumero[num] || "";
  const fraseEl = document.getElementById("frase");
  if (frase) {
    fraseEl.innerText = frase;
    fraseEl.style.display = "block";
  } else {
    fraseEl.style.display = "none";
  }

  // Atualiza lista com número no topo (ordem decrescente)
  const colunaId = `col-${letra.toLowerCase()}`;
  const novaBola = document.createElement("span");
  novaBola.innerText = num < 10 ? "0" + num : num;
  novaBola.classList.add("color");
  const coluna = document.getElementById(colunaId);
  coluna.insertBefore(novaBola, coluna.querySelector(".coluna-header").nextSibling);
}