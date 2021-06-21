const app = require('express')();

app.get('/', (req, res) => {
    res.json({ message: 'Olá, Docker 🐳!'})
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App rodando em http://localhost:${port}`));