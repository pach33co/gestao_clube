import { useState, useEffect } from 'react';
import { listarClubes } from '../service/clube.service.js';
import './Clubes.css';

function Clubes() {
    const [clubes, setClubes] = useState([]);

    async function buscarClubes() {
        const data = await listarClubes()
        setClubes(data)
    }

    useEffect(() => {
        buscarClubes()
    }, []);

    return (
        <div className="clubes">
            {
                clubes.map(clube => (
                    <div className="clube-card" key={clube.id}>
                        <img src={clube.escudo_clube} alt={clube.nome_clube} />
                        <p>{clube.nome_clube}</p>
                        <p>{clube.cidade}</p>
                        <p>{clube.estado}</p>
                        <p>{clube.pais}</p>
                        <p>{clube.estadio}</p>
                    </div>
                ))
            }
        </div>
    )

};

export default Clubes;