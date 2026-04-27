import { PartidaModel } from "../models/partida.model.js";

export class PartidaController {
    // Controller - GET
    static async listarPartida(req, res) {
        try {

            if (req.query.campeonato) {
                const campeonato = req.query.campeonato;
                const data = await PartidaModel.listarPartidaCampeonato(campeonato);
                return res.status(200).json(data)

            } else {
                const data = await PartidaModel.listarPartidas();
                return res.status(200).json(data)
            }

        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async listarPartidaId(req, res) {
        try {

            const id = req.params.id;
            const data = await PartidaModel.listarPartidaId(id);

            if (data === undefined) {
                return res.status(404).send({ "mensagem": "ID não encontrado" })
            }

            return res.status(200).json(data)

        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    // Controller - POST
    static async criarPartida(req, res) {
        try {

            const partida = req.body;
            const novaPartida = await PartidaModel.criarPartida(partida);
            return res.status(201).json(novaPartida)

        } catch (error) {
            return res.status(500).json({ mensagem: error.message })
        }
    }

    // Controller - PUT
    static async atualizarPartida(req, res) {
        try {

            const partidaId = req.params.id;
            const data = req.body;
            const atualizarPartida = await PartidaModel.atualizarPartida(partidaId, data);
            return res.status(200).json(atualizarPartida)

        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    // Controller - DELETE
    static async removerPartida(req, res) {
        try {

            const partidaId = req.params.id;
            await PartidaModel.removerPartida(partidaId);
            return res.status(204).send()

        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

};