import { ClubeModel } from "../models/clube.model.js";

export class ClubeController {
    // Controller -> GET
    static async listarClube(req, res) {
        try {
            
            if (req.query.cidade) {
                const cidade = req.query.cidade;
                const data = await ClubeModel.listarClubeCidade(cidade);
                return res.status(200).json(data)
            
            } else if (req.query.estado) {
                const estado = req.query.estado;
                const data = await ClubeModel.listarClubeEstado(estado);
                return res.status(200).json(data)
            
            } else if (req.query.pais) {
                const pais = req.query.pais;
                const data = await ClubeModel.listarClubePais(pais);
                return res.status(200).json(data)
            } else {
                const data = await ClubeModel.listarClube();
                return res.status(200).json(data)
            }

        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async listarClubeId(req, res) {
        try {

            const id = req.params.id;
            const data = await ClubeModel.listarClubeId(id);
            
            if (data === undefined) {
                return res.status(404).send({ "mensagem": "ID não encontrado" })
            }

            return res.status(200).json(data)

        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    // Controller - POST
    static async criarClube(req, res) {
        try {

            const clube = req.body;
            const novoClube = await ClubeModel.criarClube(clube);
            return res.status(201).json(novoClube)
        
        } catch (error) {
            return res.status(500).json({ mensagem: error.message })
        }
    }

    // Controller - PUT
    static async atualizarClube(req, res) {
        try {

            const clubeId = req.params.id;
            const data = req.body;
            const atualizarClube = await ClubeModel.atualizarClube(clubeId, data);
            return res.status(200).json(atualizarClube)

        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    // Controller - DELETE
    static async removerClube(req, res) {
        try {

            const clubeId = req.params.id;
            await ClubeModel.removerClube(clubeId);
            return res.status(204).send()

        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

};

/*

    Pequena explicação sobre o que foi feito nesse arquivo:
    
    static async listarClube(req, res) -> O método recebe sempre o req ( o que chegou ) e o res ( o que vai devolver).
    O static permite chamar sem instanciar a classe.
    O async é porque vai guardar respostas do banco.

    O bloco if/else if/ else -> Verifica se veio algum filtro na URL, por xemplo ?cidade= ou ?estado=.
    Se não veio nada, lista todos.
    É uma forma de ter uma rota só, que se comporta diferente, de acordo com o que o usuário manda.

    try/catch -> O try tenta executar o código.
    Se algo der errado( banco caiu ou query inválida ), o catch caputura o erro e devolve um 500 com a mensagem.

    req.params.id & req.query.cidade -> params é para valores na URL como por exemplo: /clubes/1.
    Query é para filtros como por exemplo: /clubes?cidade=RJ.

*/