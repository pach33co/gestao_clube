import { connection } from "../config/database.js";

export class PartidaModel {
    constructor (id = 0, campeonatoId = 0, clubeA = "", gols_clubeA = 0, clubeB = "", gols_clubeB = 0, estadio = "", horario = null) {
        this.id = id;
        this.campeonatoId = campeonatoId;
        this.clubeA = clubeA;
        this.gols_clubeA = gols_clubeA;
        this.clubeB = clubeB;
        this.gols_clubeB = gols_clubeB;
        this.estadio = estadio;
        this.horario = horario;
    }

    // Método HTTP GET
    // Listar todas as partidas

    static async listarPartidas() {
        const [rows] = await connection.execute(
            `SELECT * FROM partidas`
        );
        return rows;
    }

    // Listar Partida por ID

    static async listarPartidaId(id) {
        const [rows] = await connection.execute(
            `SELECT * FROM partidas WHERE id = ?`,
            [id]
        );
        return rows[0];
    }

    // Listar Partida por Campeonato

    static async listarPartidaCampeonato(campeonatoId) {
        const [rows] = await connection.execute(
            `SELECT * FROM partidas WHERE campeonatoId = ?`,
            [campeonatoId]
        );
        return rows;
    }

    // Método HTTP POST

    static async criarPartida(partida) {
        const [result] = await connection.execute(
            `INSERT INTO partidas
            (campeonatoId,
            clubeA,
            gols_clubeA,
            clubeB,
            gols_clubeB,
            estadio,
            horario)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                partida.campeonatoId,
                partida.clubeA,
                partida.gols_clubeA,
                partida.clubeB,
                partida.gols_clubeB,
                partida.estadio,
                partida.horario,
            ]
        );
        return result.insertId;
    }

    // Método HTTP PUT

    static async atualizarPartida(id, partida) {
        const [result] = await connection.execute(
            `UPDATE partidas SET
            campeonatoId = ?,
            clubeA = ?,
            gols_clubeA = ?,
            clubeB = ?,
            gols_clubeB = ?,
            estadio = ?,
            horario = ?
            WHERE id = ?`,
            [
                partida.campeonatoId,
                partida.clubeA,
                partida.gols_clubeA,
                partida.clubeB,
                partida.gols_clubeB,
                partida.estadio,
                partida.horario,
                id
            ]
        );
        return result.affectedRows;
    }

    // Método HTTP DELETE

    static async removerPartida(id) {
        const [result] = await connection.execute(
            `DELETE FROM partidas WHERE id = ?`,
            [id]
        );
        return result.affectedRows;
    }

};