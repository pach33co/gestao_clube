import { connection } from "../config/database.js";
import { PosicaoJogador } from "../enum/posicao.js";
import { Categoria } from "../enum/categoria.js";

export class JogadorModel {
    constructor (id = 0, clubeId = 0, caminho_imagem = "", nome = "", posicao = PosicaoJogador.CENTROAVANTE, categoria = Categoria.PROFISSIONAL, idade = 0, nacionalidade = "", altura = 0, peso = 0 ) {
        this.id = id;
        this.clubeId = clubeId;
        this.caminho_imagem = caminho_imagem;
        this.nome = nome;
        this.posicao = posicao;
        this.categoria = categoria;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;
    }

    // Método HTTP GET
    // Listar todos os jogadores

    static async listarJogador() {
        const [rows] = await connection.execute(
            `SELECT * FROM jogadores`
        );
        return rows;
    }

    // Listar Jogador por ID

    static async listarJogadorId(id) {
        const [rows] = await connection.execute(
            `SELECT * FROM jogadores WHERE id = ?`,
            [id]
        );
        return rows[0];
    }

    // Listar Jogador por Posição

    static async listarJogadorPosicao(posicao) {
        const [rows] = await connection.execute(
            `SELECT * FROM jogadores WHERE posicao = ?`,
            [posicao]
        );
        return rows;
    }

    // Listar Jogador por Categoria

    static async listarJogadorCategoria(categoria) {
        const [rows] = await connection.execute(
            `SELECT * FROM jogadores WHERE categoria = ?`,
            [categoria]
        );
        return rows;
    }

    // Método HTTP POST

    static async criarJogador(jogador) {
        const [result] = await connection.execute(
            `INSERT INTO jogadores
            (clubeId,
            caminho_imagem,
            nome,
            posicao,
            categoria,
            idade,
            nacionalidade,
            altura,
            peso)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                jogador.clubeId,
                jogador.caminho_imagem,
                jogador.nome,
                jogador.posicao,
                jogador.categoria,
                jogador.idade,
                jogador.nacionalidade,
                jogador.altura,
                jogador.peso,
            ]
        );
        return result.insertId;
    }

    // Método HTTP PUT

    static async atualizarJogador(id, jogador) {
        const [result] = await connection.execute(
            `UPDATE jogadores SET
            caminho_imagem = ?,
            nome = ?,
            posicao = ?,
            categoria = ?,
            idade = ?,
            nacionalidade = ?,
            altura = ?,
            peso = ?
            WHERE id = ?`,
            [
                jogador.caminho_imagem,
                jogador.nome,
                jogador.posicao,
                jogador.categoria,
                jogador.idade,
                jogador.nacionalidade,
                jogador.altura,
                jogador.peso,
                id
            ]
        );
        return result.affectedRows;
    }

    // Método HTTP DELETE

    static async removerJogador(id) {
        const [result] = await connection.execute(
            `DELETE FROM jogadores WHERE id = ?`,
            [id]
        );
        return result.affectedRows;
    }

};