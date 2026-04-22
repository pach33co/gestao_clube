import { connection } from "../config/database.js";

export class ClubeModel {
    constructor (id = 0, escudo_clube = "", nome_clube = "", cidade = "", estado = "", pais = "", estadio = "" ) {
        this.id = id;
        this.escudo_clube = escudo_clube;
        this.nome_clube = nome_clube;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.estadio = estadio;
    }

    // Método HTTP GET
    // Listar todos os clubes

    static async listarClube() {
        const [rows] = await connection.execute(
            `SELECT * FROM clubes`
        );
        return rows;
    }

    // Listar Clube por ID

    static async listarClubeId(id) {
        const [rows] = await connection.execute(
            `SELECT * FROM clubes WHERE id = ?`,
            [id]
        );
        return rows[0];
    }

    // Listar Clube por Cidade

    static async listarClubeCidade(cidade) {
        const [rows] = await connection.execute(
            `SELECT * FROM clubes WHERE cidade = ?`,
            [cidade]
        );
        return rows;
    }

    // Listar Clube por Estado

    static async listarClubeEstado(estado) {
        const [rows] = await connection.execute(
            `SELECT * FROM clubes WHERE estado = ?`,
            [estado]
        );
        return rows;
    }

    // Listar Clube por País

    static async listarClubePais(pais) {
        const [rows] = await connection.execute(
        `SELECT * FROM clubes WHERE pais = ?`,
        [pais]
        );
        return rows;
    }

    // Método HTTP POST

    static async criarClube(clube) {
        const [result] = await connection.execute(
            `INSERT INTO clubes
            (escudo_clube,
            nome_clube,
            cidade,
            estado,
            pais,
            estadio)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                clube.escudo_clube,
                clube.nome_clube,
                clube.cidade,
                clube.estado,
                clube.pais,
                clube.estadio,
            ]
        );
        return result.insertId;
    }

    // Método HTTP PUT

    static async atualizarClube(id, clube) {
        const [result] = await connection.execute(
            `UPDATE clubes SET
            escudo_clube = ?,
            nome_clube = ?,
            cidade = ?,
            estado = ?,
            pais = ?,
            estadio = ?
            WHERE id = ?`,
            [
                clube.escudo_clube,
                clube.nome_clube,
                clube.cidade,
                clube.estado,
                clube.pais,
                clube.estadio,
                id
            ]
        );
        return result.affectedRows;
    }

    // Método HTTP DELETE

    static async removerClube(id) {
        const [result] = await connection.execute(
            `DELETE FROM clubes WHERE id = ?`,
            [id]
        );
        return result.affectedRows;
    }

};

