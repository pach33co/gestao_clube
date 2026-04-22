import { connection } from "../config/database.js";

export class CampeonatoModel {
    constructor (id = 0, nome = "" ) {
        this.id = id;
        this.nome = nome;
    }

    // Método HTTP GET
    // Listar todos os campeonatos

    static async listarCampeonato() {
        const [rows] = await connection.execute(
            `SELECT * FROM campeonatos`
        );
        return rows;
    }

    // Listar Campeonato por ID

    static async listarCampeonatoId(id) {
        const [rows] = await connection.execute(
            `SELECT * FROM campeonatos WHERE id = ?`,
            [id]
        );
        return rows[0];
    }

    // Método HTTP POST

    static async criarCampeonato(campeonato) {
        const [result] = await connection.execute(
            `INSERT INTO campeonatos
            (nome)
            VALUES (?)`,
            [
                campeonato.nome,
            ]
        );
        return result.insertId;
    }

    // Método HTTP PUT

    static async atualizarCampeonato(id, campeonato) {
        const [result] = await connection.execute(
            `UPDATE campeonatos SET
            nome = ?
            WHERE id = ?`,
            [
                campeonato.nome,
                id
            ]
        );
        return result.affectedRows;
    }

    // Método HTTP DELETE

    static async removerCampeonato(id) {
        const [result] = await connection.execute(
            `DELETE FROM campeonatos WHERE id = ?`,
            [id]
        );
        return result.affectedRows;
    }

};