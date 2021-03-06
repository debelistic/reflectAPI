import express from "express";
import dotenv from "dotenv";
import "babel-polyfill";
import ReflectionWithDB from "./usingDB/controllers/Reflection"
import ReflectionWithJsObject from "./usingJSObjects/controllers/Reflection";

dotenv.config();
const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("You're on port " + port);    
});