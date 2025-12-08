/*SISTEMA DO JOGO — AGENTE X*/

let fase = 1;
const totalFases = 5;
let respostas = {
  1: "ENIGMA QUEBRADA",
  2: "ATAQUE AO AMANHECER EM NORMANDIA",
  3: "REFORCOS DEVEM PROTEGER OS COMBOIOS NO ATLANTICO NORTE",
  4: "REQUEREMOS REFORCO DE ESCOLTA NAS PROXIMAS 12 HORAS",
  5: "PROVAVEL ACAO DE WOLF PACK NA REGIAO"
};

function log(msg) {
  const logBox = document.getElementById("log");
  logBox.innerHTML += "<br>" + msg;
  logBox.scrollTop = logBox.scrollHeight;
}

function briefing(msg) {
  document.getElementById("brief").innerHTML = msg;
}

function carregarFase() {
  document.getElementById("progress").innerText = `Fase atual: ${fase} / ${totalFases}`;

  if (fase === 1) {
    briefing("Fase 1 — Use o alfabeto de substituição para decifrar a expressão escondida na aba 'História: Segunda Guerra'.");
  }
  else if (fase === 2) {
    briefing("Fase 2 — Vá até a aba 'Frente Ocidental' e encontre a mensagem cifrada que descreve um plano de ataque. Decifre e reporte aqui.");
  }
  else if (fase === 3) {
    briefing("Fase 3 — Na aba 'Batalha do Atlântico', há uma mensagem longa sobre comboios e reforços. Use o alfabeto personalizado para revelá-la.");
  }
  else if (fase === 4) {
    briefing("Fase 4 — Leia o 'Diário de Campo' e encontre a primeira frase cifrada no meio do texto. Decifre o pedido de reforços e registre no Terminal do Agente.");
  }
  else if (fase === 5) {
    briefing("Fase 5 — Ainda no 'Diário de Campo', há uma segunda linha em código que menciona um 'WOLF PACK'. Use o alfabeto de substituição para revelar a mensagem completa.");
  }
}

function verificarResposta() {
  let resposta = document.getElementById("playerInput").value.toUpperCase();
  document.getElementById("playerInput").value = "";

  if (resposta === respostas[fase]) {
    log("✔ Resposta correta!");
    fase++;

    if (fase > totalFases) {
      briefing("MISSÃO CONCLUÍDA, AGENTE X.");
      log("Todas as mensagens foram decifradas usando o alfabeto personalizado.");
      return;
    }

    carregarFase();
  } else {
    log("✖ Resposta incorreta. Tente novamente.");
  }
}

document.getElementById("submitBtn").addEventListener("click", verificarResposta);
document.getElementById("playerInput").addEventListener("keydown", e => {
  if (e.key === "Enter") verificarResposta();
});

document.getElementById("startBtn").addEventListener("click", () => {
  fase = 1;
  log("--- Missão reiniciada ---");
  carregarFase();
});

// Carrega a primeira fase ao iniciar
carregarFase();
