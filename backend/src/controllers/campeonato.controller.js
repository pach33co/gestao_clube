import { CampeonatoModel } from "../models/campeonato.model.js";

export class CampeonatoController {
    // Controller -> GET
    static async listarCampeonato(req, res) {
        try {

            const data = await CampeonatoModel.listarCampeonato();
            return res.status(200).json(data)
        
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async listarCampeonatoId(req, res) {
        try {

            const id = req.params.id;
            const data = await CampeonatoModel.listarCampeonatoId(id);
            
            if (data === undefined) {
                return res.status(404).send({ "mensagem": "ID não encontrado" })
            }

            return res.status(200).json(data)
        
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    // Controller - POST
    static async  criarCampeonato(req, res) {
        try {

            const campeonato = req.body;
            const novoCampeonato = await CampeonatoModel.criarCampeonato(campeonato);
            return res.status(201).json(novoCampeonato)
        
        } catch (error) {
            return res.status(500).json({ mensagem: error.message })
        }
    }

    // Controller - PUT
    static async atualizarCampeonato(req, res) {
        try {

            const campeonatoId = req.params.id;
            const data = req.body;
            const atualizarCampeonato = await CampeonatoModel.atualizarCampeonato(campeonatoId, data);
            return res.status(200).json(atualizarCampeonato)
        
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    // Controller - DELETE
    static async removerCampeonato(req, res) {
        try {

            const campeonatoId = req.params.id;
            await CampeonatoModel.removerCampeonato(campeonatoId);
            return res.status(204).send()
        
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

};