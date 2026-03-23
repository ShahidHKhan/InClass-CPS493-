import express from 'express';
import usersController from './controller/users';

//controller only handels anything with express
//model handles anything with data
//controller should never know about the model, and the model should never know about the controller

const PORT = 3000;
const SERVER = 'localhost'

//MAIN PIPELINE
const app = express();

app.use('/users', usersController);

//ROOT PIPELINE
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get("/suny", (req, res) => {
    res.send("Welcome to SUNY!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${SERVER}:${PORT}`);
});
