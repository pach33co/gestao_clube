import { useState, useEffect } from 'react';
import { listarCampeonatos } from '../service/campeonato.service.js';
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'
import './NavBar.css';

function NavBar({onSelecionarCampeonato}) {
    const [campeonatos, setCampeonatos] = useState([]);

    async function buscarCampeonatos() {
        const data = await listarCampeonatos()
        setCampeonatos(data)
    };

    useEffect(() => {
        buscarCampeonatos()
    }, []);

return (
    <div className="navbar">
        <p className="logo">Club M</p>
        <div className="navbar-campeonatos">
            {campeonatos.map(campeonato => (
                <p key={campeonato.id} onClick={() => onSelecionarCampeonato(campeonato.id)}>
                    {campeonato.nome}
                </p>
            ))}
        </div>
        <div className="navbar-social">
            <FaYoutube size={20} color="#a0a0b0" />
            <FaInstagram size={18} color="#a0a0b0" />
            <FaTiktok size={18} color="#a0a0b0" />
        </div>
    </div>
)
};

export default NavBar;