import { useState } from 'react';
import Home from './pages/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import SideBar from './components/Sidebar.jsx';
import './App.css'

function App() {

  const [campeonatoSelecionado, setCampeonatoSelecionado] = useState(null)

  return (
    <div>

        <NavBar onSelecionarCampeonato={setCampeonatoSelecionado} />

      <div className="conteudoPrincipal">

        <Home campeonato={campeonatoSelecionado} />
        <SideBar />

      </div>

      <Footer />

    </div>
  )
}

export default App;
