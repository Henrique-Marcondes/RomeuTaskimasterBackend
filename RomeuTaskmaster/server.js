const express = require('express'); 
const app = express(); 
const PORT = 3000; 

function processarTarefa(texto) {
    const frase = texto.toLowerCase();

    let tarefaExtraida = {
        titulo: texto, 
        data: "Hoje", 
        alertaClima: false,
        tipo: "comum"
    };

    if(frase.includes("amanhã")) {
        tarefaExtraida.data = "Amanhã";
        // Corrigido: Removi o espaço extra entre texto e .replace
        tarefaExtraida.titulo = texto.replace(/amanhã/gi, "").trim();
    }

    if (frase.includes("correr") || frase.includes("lavar")) {
        tarefaExtraida.alertaClima = true;
    }

    if (frase.includes("viagem") || frase.includes("viajar")) {
        tarefaExtraida.tipo = "especial";
        console.log("✈️ Destino detectado! RomeuTaskmaster vai monitorar seu trajeto!");
    }

    return statusDaTarefa(tarefaExtraida);
}

function statusDaTarefa(obj) {
    console.log("\n--- Nova Tarefa Detectada ---");
    // CORREÇÃO: Usar ` (crase) em vez de ' (aspas) para o ${} funcionar
    console.log(`O que fazer: ${obj.titulo}`);
    console.log(`Quando: ${obj.data}`);
    console.log(`Tipo: ${obj.tipo}`);
    // CORREÇÃO: Fechamento do ${} e uso de crases
    console.log(`Monitor de clima? ${obj.alertaClima ? "Sim ✅" : "Não ❌"}`);
    return obj;
}

// Testando a função
processarTarefa("Lavar carro amanhã");
processarTarefa("Estudar programação");
processarTarefa("Viagem para o Rio de Janeiro");

app.get('/', (req, res) => {
    res.send('🚀 Servidor do RomeuTaskmaster rodando com sucesso!');
});

app.listen(PORT, () => {
    // CORREÇÃO: Usar crases aqui também para mostrar a porta 3000
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});