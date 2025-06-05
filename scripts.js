
let saldo = 35.00;
let vipDesbloqueado = false;

function entrar() {
  const nome = document.getElementById("nomeUsuario").value;
  const telefone = document.getElementById("telefoneUsuario").value;

  if (!nome || !telefone) {
    alert("Preencha todos os campos.");
    return;
  }

  document.getElementById("dadosUsuario").innerText = `👤 ${nome} - 📱 ${telefone}`;
  document.getElementById("login").style.display = "none";
  document.getElementById("principal").classList.remove("hidden");
}

function mostrarFormulario() {
  document.getElementById("formularioSaque").classList.remove("hidden");
}

function enviarSaque() {
  if (saldo >= 30) {
    saldo -= 30;
    document.getElementById("saldoFree").innerText = `Saldo Free: R$${saldo.toFixed(2)}`;
    document.getElementById("tituloSaque").innerText = "✅ Saque Concluído!";
    alert("Saque de R$30 realizado com sucesso.");
  } else {
    alert("Saldo insuficiente.");
  }
}

function pedirRecarga() {
  alert("Para desbloquear o saldo VIP, é necessário realizar uma recarga de R$49,90.");
  vipDesbloqueado = true;
  window.location.href = "recarga.html";
}

function convidar() {
  if (vipDesbloqueado) {
    alert("Você é VIP! Compartilhe seu link e ganhe R$5 por indicação.");
  } else {
    alert("Apenas VIPs podem indicar. Faça uma recarga!");
  }
}

function jogoPerguntas() {
  const perguntas = [
    {
      pergunta: "Qual é a capital do Brasil?",
      opcoes: ["São Paulo", "Brasília", "Rio de Janeiro"],
      correta: "Brasília"
    },
    {
      pergunta: "Quanto é 7 x 8?",
      opcoes: ["56", "42", "64"],
      correta: "56"
    },
    {
      pergunta: "Qual planeta é conhecido como Planeta Vermelho?",
      opcoes: ["Marte", "Vênus", "Júpiter"],
      correta: "Marte"
    }
  ];

  const pergunta = perguntas[Math.floor(Math.random() * perguntas.length)];
  const resposta = prompt(`${pergunta.pergunta}

${pergunta.opcoes.join("\n")}`);

  if (resposta === null) return;

  if (resposta.trim().toLowerCase() === pergunta.correta.toLowerCase()) {
    saldo += 2;
    alert("✅ Resposta certa! Você ganhou R$2.");
  } else {
    saldo -= 1;
    alert(`❌ Resposta errada! A correta era: ${pergunta.correta}. Você perdeu R$1.`);
  }

  document.getElementById("saldoFree").innerText = `Saldo Free: R$${saldo.toFixed(2)}`;
}
