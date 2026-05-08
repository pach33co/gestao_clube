import { useState, useEffect } from 'react';
import { listarPartidas } from '../service/partida.service.js';

function Home() {
    const [partidas, setPartidas] = useState([]);

    async function buscarPartidas() {
        const data = await listarPartidas()
        setPartidas(data)
    };

    useEffect(() => {
        buscarPartidas()
    }, []);

    return (
        <div>
        {
            partidas.map(partida => (
                <div key={partida.id}>
                    <p>{partida.nome_clubeA}</p>
                    <p>{partida.gols_clubeA} x {partida.gols_clubeB}</p>
                    <p>{partida.nome_clubeB}</p>
                    <p>{partida.estadio}</p>
                    <p>{partida.horario}</p>
                </div>
            ))
        }
        </div>

    )

};

export default Home;

