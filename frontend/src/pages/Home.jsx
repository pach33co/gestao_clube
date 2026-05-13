import { useState, useEffect } from 'react';
import { listarPartidas, listarPartidasPorCampeonato } from '../service/partida.service.js';
import './Home.css';

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
        <div className="home">
            {
                partidas.map(partida => (
                    <div className="partida-card" key={partida.id}>
                        <img src={partida.escudo_clubeA} alt={partida.nome_clubeA}/>
                        <p>{partida.nome_clubeA}</p>
                        <p className="placar">{partida.gols_clubeA} x {partida.gols_clubeB}</p>
                        <img src={partida.escudo_clubeB} alt={partida.nome_clubeB}/>
                        <p>{partida.nome_clubeB}</p>
                        <div>
                        <p>{partida.estadio}</p>
                        <p>{new Date(partida.horario).toLocaleDateString('pt-BR')}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    )

};

export default Home;

