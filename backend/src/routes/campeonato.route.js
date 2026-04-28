import { Router } from "express";
import { CampeonatoController } from "../controllers/campeonato.controller.js";

const router = Router();

router.get('/campeonatos', CampeonatoController.listarCampeonato);

router.get('/campeonatos/:id', CampeonatoController.listarCampeonatoId);

router.post('/campeonatos', CampeonatoController.criarCampeonato);

router.put('/campeonatos/:id', CampeonatoController.atualizarCampeonato);

router.delete('/campeonatos/:id', CampeonatoController.removerCampeonato);

export { router };