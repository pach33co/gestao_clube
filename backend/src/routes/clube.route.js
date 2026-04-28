import { Router } from "express";
import { ClubeController } from "../controllers/clube.controller.js";

const router = Router();

router.get('/clubes', ClubeController.listarClube);

router.get('/clubes/:id', ClubeController.listarClubeId);

router.post('/clubes', ClubeController.criarClube);

router.put('/clubes/:id', ClubeController.atualizarClube);

router.delete('/clubes/:id', ClubeController.removerClube);

export { router };