/*
npm init -y
npm install express
*/
const express = require('express');
const app = express();
const port = 3000;

app.get('/info', (req, res) => {
    res.json({ "Instancia": "Maquian 2 - API 2",
    "Curso": "Seminario de Sistemas 1",
    "Grupo": "Grupo 12" });
});

app.get('/check', (req, res) => {
    res.status(200).send('OK');
});

// Se corre con node main.js
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});
