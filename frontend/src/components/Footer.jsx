import './Footer.css';
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <div>
                <p className="logoFooter">Club Management</p>
            </div>
            <div>
                <p>Sobre</p>
                <p>Contato</p>
                <p>Outras Informações</p>
            </div>
            <div>
            <FaYoutube size={20} color="#a0a0b0" />
            <FaInstagram size={18} color="#a0a0b0" />
            <FaTiktok size={18} color="#a0a0b0" />
            </div>
        </div>

    )
};

export default Footer;