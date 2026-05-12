import { useState, useEffect } from 'react';
import { listarJogadorRecente } from '../service/jogador.service.js';

function SideBar() {

    const [jogadores, setJogadores] = useState([])

    async function buscarJogadores() {
        const data = await listarJogadorRecente()
        setJogadores(data)
    }

    useEffect(() => {
        buscarJogadores()
    }, [])

    return (
        <div>
            {
                jogadores.map(jogador => (
                    <div key={jogador.id}>
                        <p>{jogador.nome}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default SideBar;