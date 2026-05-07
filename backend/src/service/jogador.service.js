import { JogadorModel } from "../models/jogador.model.js";
import { ValidationError } from "../errors/validation.error.js";

export class JogadorService {
    static async criarJogador(jogador) {
        if (!jogador.caminho_imagem) {
            throw new ValidationError("A imagem do jogador é obrigatória")
        }

        if (!jogador.caminho_imagem.endsWith(".png")) {
            throw new ValidationError("O formado da imagem precisa ser .png")
        }

        if (!jogador.nome) {
            throw new ValidationError("O nome do jogador é obrigatório")
        }

        if (jogador.nome.length < 3) {
            throw new ValidationError("O nome do jogador não pode ter menos que 3 letras")
        }

        if (!jogador.posicao) {
            throw new ValidationError("A posição do jogador é obrigatória")
        }

        if (!['Goleiro',
            'Lateral-direito',
            'Zagueiro',
            'Lateral-esquerdo',
            'Volante',
            'Meio-campo',
            'Ponta-esquerda',
            'Ponta-direita',
            'Segundo-atacante',
            'Centroavante'].includes(jogador.posicao)) {
            throw new ValidationError("As posições habilitadas são: Goleiro, Lateral-direito, Zagueiro, Lateral-esquerdo, Volante, Meio-campo, Ponta-esquerda, Ponta-direita, Segundo-atacante, Centroavante")
        }

        if (!jogador.categoria) {
            throw new ValidationError("A categoria do jogador precisa ser obrigatória")
        }

        if (!['Profissional', 'Sub-20', 'Sub-17', 'Sub-15', 'Sub-13'].includes(jogador.categoria)) {
            throw new ValidationError("As categorias habilitas são: Profissional, Sub-20, Sub-17, Sub-15, Sub-13")
        }

        if (!jogador.idade) {
            throw new ValidationError("A idade é obrigatória")
        }

        if (jogador.idade <= 0) {
            throw new ValidationError("A idade do jogador não pode ser menor ou igual a zero")
        }

        if (!jogador.nacionalidade) {
            throw new ValidationError("A nacionalidade do jogador precisa ser obrigatória")
        }

        if (!jogador.altura) {
            throw new ValidationError("A altura do jogador precisa ser obrigatória")
        }

        if (!jogador.peso) {
            throw new ValidationError("O peso do jogador precisa ser obrigatório")
        }

        return await JogadorModel.criarJogador(jogador);
    }
};