import 'dotenv/config';
import express from "express";
import { router as clubeRouter } from "./src/routes/clube.route.js";
import { router as jogadorRouter } from "./src/routes/jogador.route.js";
import { router as campeonatoRouter } from "./src/routes/campeonato.route.js";
import { router as partidaRouter } from "./src/routes/partida.route.js";
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-type", "Authorization"]
    })
);

app.use(express.json());
app.use(clubeRouter, jogadorRouter, campeonatoRouter, partidaRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});

