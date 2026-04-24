import { JogadorModel } from "../models/jogador.model.js";

export class JogadorController {
    // Controller -> GET
    static async listarJogador(req, res) {
        
        try {

            if (req.query.posicao) {
                const posicao = req.query.posicao;
                const data = await JogadorModel.listarJogadorPosicao(posicao);
                return res.status(200).json(data)
            
            } else if (req.query.categoria) {
                const categoria = req.query.categoria;
                const data = await JogadorModel.listarJogadorCategoria(categoria);
                return res.status(200).json(data)
            } else {
                const data = await JogadorModel.listarJogador();
                return res.status(200).json(data)
            }

        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async listarJogadorId(req, res) {
        try {

            const id = req.params.id;
            const data = await JogadorModel.listarJogadorId(id);

            if ( data === undefined ) {
                return res.status(404).send({ "mensagem": "ID não encontrado" })
            }

            return res.status(200).json(data)
        
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    // Controller - POST
    static async criarJogador(req, res) {
        try {

            const jogador = req.body;
            const novoJogador = await JogadorModel.criarJogador(jogador);
            return res.status(201).json(novoJogador)
        
        } catch (error) {
            return res.status(500).json({ mensagem: error.message })
        }
    }

    // Controller -> PUT
    static async atualizarJogador(req, res) {
        try {

            const jogadorId = req.params.id;
            const data = req.body;
            const atualizarJogador = await JogadorModel.atualizarJogador(jogadorId, data);
            return res.status(200).json(atualizarJogador)
        
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
    
    // Controller - DELETE
    static async removerJogador(req, res) {
        try {

            const jogadorId = req.params.id;
            await JogadorModel.removerJogador(jogadorId);
            return res.status(204).send()
        
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

};