import { CampeonatoModel } from "../models/campeonato.model.js";
import { ValidationError } from "../errors/validation.error.js";

export class CampeonatoService {
    static async criarCampeonato(campeonato) {
        if (!campeonato.nome) {
            throw new ValidationError("O nome do campeonato é obrigatório")
        }

        return await CampeonatoModel.criarCampeonato(campeonato);
    }
};

