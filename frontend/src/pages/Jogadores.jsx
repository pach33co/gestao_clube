import { useState, useEffect } from 'react';
import { listarJogadores } from '../service/jogador.service.js';
import './Jogadores.css';

function Jogadores() {
    const [jogadores, setJogadores] = useState([]);

    async function buscarJogadores() {
        const data = await listarJogadores()
        setJogadores(data)
    }

    useEffect(() => {
        buscarJogadores()
    }, []);

    return (
        <div className="jogadores">
            {
                jogadores.map(jogador => (
                    <div className="jogador-card" key={jogador.id}>
                        <img src={jogador.caminho_imagem} alt={jogador.nome}/>
                        <p>{jogador.nome}</p>
                        <p>{jogador.posicao}</p>
                        <p>{jogador.categoria}</p>
                        <p>{jogador.idade}</p>
                        <p>{jogador.nacionalidade}</p>
                        <p>{jogador.altura}</p>
                        <p>{jogador.peso}</p>
                        </div>
                ))
            }
        </div>
    )
};

export default Jogadores;