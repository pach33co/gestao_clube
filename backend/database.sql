CREATE DATABASE IF NOT EXISTS gestao_clube
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;  
USE gestao_clube;

CREATE TABLE clubes (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    escudo_clube VARCHAR(255),
    nome_clube VARCHAR(255) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    pais VARCHAR(100) NOT NULL,
    estadio VARCHAR(255) NOT NULL
) AUTO_INCREMENT = 1;

CREATE TABLE jogadores (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	clubeId INT NOT NULL,
    caminho_imagem VARCHAR(255),
	nome VARCHAR(255) NOT NULL,
	posicao ENUM(
	'Goleiro',
    'Lateral-direito',
    'Zagueiro',
    'Lateral-esquerdo',
    'Volante',
    'Meio-campo',
    'Ponta-esquerda',
    'Ponta-direita',
    'Segundo-atacante',
    'Centroavante') NOT NULL,
    categoria ENUM(
    'Profissional',
    'Sub-20',
    'Sub-17',
    'Sub-15',
    'Sub-13'
    ) NOT NULL,
    idade INT NOT NULL,
    nacionalidade VARCHAR(100) NOT NULL,
    altura DECIMAL(3,2) NOT NULL,
    peso DECIMAL(4,2) NOT NULL,
    FOREIGN KEY (clubeId) REFERENCES clubes(id)
) AUTO_INCREMENT = 1;
    
CREATE TABLE campeonatos (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
) AUTO_INCREMENT = 1;

CREATE TABLE partidas (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    campeonatoId INT NOT NULL,
    clubeA INT NOT NULL,
    gols_clubeA INT,
    clubeB INT NOT NULL,
    gols_clubeB INT,
    estadio VARCHAR(255) NOT NULL,
    horario DATETIME NOT NULL,
    FOREIGN KEY (campeonatoId) REFERENCES campeonatos(id),
    FOREIGN KEY (clubeA) REFERENCES clubes(id),
    FOREIGN KEY (clubeB) REFERENCES clubes(id)
) AUTO_INCREMENT = 1;