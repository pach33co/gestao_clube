import { useState, useEffect } from 'react';
import { listarJogadorRecente } from '../service/jogador.service.js';
import './Sidebar.css'

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
        <div className="sidebar">
            {
                jogadores.map(jogador => (
                    <div key={jogador.id}>
                        <img src={jogador.caminho_imagem} alt={jogador.nome} />
                        <p>{jogador.nome}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default SideBar;