import { Router } from "express";
import { JogadorController } from "../controllers/jogador.controller.js";

const router = Router();

router.get('/jogadores', JogadorController.listarJogador);

router.get('/jogadores/:id', JogadorController.listarJogadorId);

router.post('/jogadores', JogadorController.criarJogador);

router.put('/jogadores/:id', JogadorController.atualizarJogador);

router.delete('/jogadores/:id', JogadorController.removerJogador);

export { router };