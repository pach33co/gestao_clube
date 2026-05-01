import { ClubeModel } from "../models/clube.model.js";
import { ValidationError } from "../errors/validation.error.js";

export class ClubeService {
    static async criarClube(clube) {
        if (!clube.escudo_clube) {
            throw new ValidationError("A imagem do escudo é obrigatória")
        }

        if (!clube.escudo_clube.endsWith(".png")) {
            throw new ValidationError("O formato da imagem precisa ser .png")
        }

        if (!clube.nome_clube) {
            throw new ValidationError("O nome do clube é obrigatório")
        }

        if (clube.nome_clube.length < 3) {
            throw new ValidationError("O nome do clube não pode ter menos que 3 letras")
        }

        if (!clube.estadio) {
            throw new ValidationError("O nome do estádio é obrigatório")
        }

        if (clube.estadio.length < 5) {
            throw new ValidationError("O nome do estádio não pode ter menos que 5 letras")
        }

        if (!clube.cidade) {
            throw new ValidationError("O nome da cidade é obrigatório")
        }

        if (!clube.estado) {
            throw new ValidationError("O nome do estado é obrigatório")
        }

        if (!clube.pais) {
            throw new ValidationError("O nome do país é obrigatório")
        }

        if (/\d/.test(clube.cidade) || /\d/.test(clube.estado) || /\d/.test(clube.pais)) {
            throw new ValidationError("Cidade, Estado e País não podem ter número")
        }

        return await ClubeModel.criarClube(clube);
    }
};