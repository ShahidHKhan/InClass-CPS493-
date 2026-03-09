import express from 'express';

const PORT = 3000;
const SERVER = 'localhost'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get("/suny", (req, res) => {
    res.send("Welcome to SUNY!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${SERVER}:${PORT}`);
});
