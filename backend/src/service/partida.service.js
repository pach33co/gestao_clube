import { PartidaModel } from "../models/partida.model.js";
import { ValidationError } from "../errors/validation.error.js";

export class PartidaService {
    static async criarPartida(partida) {
        if (partida.gols_clubeA < 0) {
            throw new ValidationError("O número de gols não pode ser menor que zero")
        }

        if (partida.gols_clubeB < 0) {
            throw new ValidationError("O número de gols não pode ser menor que zero")
        }

        if (!partida.estadio) {
            throw new ValidationError("O nome do estádio é obrigatório")
        }

        if (!partida.horario) {
            throw new ValidationError("A data e horário da partida são obrigatórios")
        }

        return await PartidaModel.criarPartida(partida);
    }
};