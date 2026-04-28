import { Router } from "express";
import { PartidaController } from "../controllers/partida.controller.js";

const router = Router();

router.get('/partidas', PartidaController.listarPartida);

router.get('/partidas/:id', PartidaController.listarPartidaId);

router.post('/partidas', PartidaController.criarPartida);

router.put('/partidas/:id', PartidaController.atualizarPartida);

router.delete('/partidas/:id', PartidaController.removerPartida);

export { router };