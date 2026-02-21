const express = require('express'); // importa o express
const app = express(); // inicializa o app
const PORT = 3000; // define a "porta" onde o server vai rodar

// Nossa primeira rota (o que o usuario vê ao acessar o endereço principal)
app.get('/', (req, res) => {
    res.send('Servidor do RomeuTaskmaster rodando com sucesso!');
});

//faz o servidor "ouvir" as requisições 
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});