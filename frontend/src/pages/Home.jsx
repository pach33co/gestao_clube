import { useState, useEffect } from 'react';
import { listarPartidas, listarPartidasPorCampeonato } from '../service/partida.service.js';

function Home({ campeonato }) {
    const [partidas, setPartidas] = useState([]);

    async function buscarPartidas() {
        if (campeonato) {
            const data = await listarPartidasPorCampeonato(campeonato)
            setPartidas(data)
        } else {
            const data = await listarPartidas()
            setPartidas(data)
        }
    };

    useEffect(() => {
        buscarPartidas()
    }, [campeonato]);

    return (
        <div>
            {
                partidas.map(partida => (
                    <div key={partida.id}>
                        <p>{partida.nome_clubeA}</p>
                        <p>{partida.gols_clubeA} x {partida.gols_clubeB}</p>
                        <p>{partida.nome_clubeB}</p>
                        <p>{partida.estadio}</p>
                        <p>{new Date(partida.horario).toLocaleDateString('pt-BR')}</p>
                    </div>
                ))
            }
        </div>

    )

};

export default Home;

