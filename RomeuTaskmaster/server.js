const express = require('express'); // importa o express
const app = express(); // inicializa o app
const PORT = 3000; // define a "porta" onde o server vai rodar

//Nossa função que vai "entender" o que o ususario quer
function processarTarefa(texto) {
    // 1. Convereeter tudo para minusculo para facilitar a busca
    const frase = texto.toLowerCase();

    // 2. Criar um objeto para guardar o que decobrimos
    let tarefaExtraida = {
        titulo: texto, // O titulo original
        data: "Hoje", //Padrão
        alertaClima: false
    };

    //3. Logica simples de busca(o Cerebro inicial)
    if(frase.includes("amanhã")) {
        tarefaExtraida.data = "Amanhã";
        //Removemos a palavra "amanhã" do titulo para ficar limpo
        tarefaExtraida.titulo = texto .replace(/amanhã/gi, ""). trim();
    }
    if (frase.includes("correr")|| frase.includes("lavar")) {
        tarefaExtraida.alertaClima = true;
    }
      if (frase.includes("viagem")) {
        tarefaExtraida.tipo = "especial";
      }
    return statusDaTarefa(tarefaExtraida);
  

}

function statusDaTarefa(obj) {
    console.log("--- Nova tareda Detectada ---");
    console.log('O que fazer: ${obj.titulo}');
    console.log('Quando: ${obj.data}');
    console.log('tipo: ${obj.tipo}');
    console.log('Monitor de clima? ${obj.alertaClima ? "sim": "não"');
    return obj;
}

//Testando a função no console assim que o servidor abrir
processarTarefa("Lavar carro amanhã");
processarTarefa("Estudar programação");


// Nossa primeira rota (o que o usuario vê ao acessar o endereço principal)
app.get('/', (req, res) => {
    res.send('Servidor do RomeuTaskmaster rodando com sucesso!');
});

//faz o servidor "ouvir" as requisições 
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});