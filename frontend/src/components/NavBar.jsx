import { useState, useEffect } from 'react';
import { listarCampeonatos } from '../service/campeonato.service.js';

function NavBar() {
    const [campeonatos, setCampeonatos] = useState([]);

    async function buscarCampeonatos() {
        const data = await listarCampeonatos()
        setCampeonatos(data)
    };

    useEffect(() => {
        buscarCampeonatos()
    }, []);

    return (
        <div>
            {
                campeonatos.map(campeonato => (
                    <div key={campeonato.id}>
                        <p>{campeonato.nome}</p>
                    </div>
                ))
            }
        </div>
    )
};

export default NavBar;