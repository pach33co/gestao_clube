import { useState } from 'react';
import Home from './pages/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import SideBar from './components/Sidebar.jsx';
import Clubes from './pages/Clubes.jsx';
import Jogadores from './pages/Jogadores.jsx';
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  const [campeonatoSelecionado, setCampeonatoSelecionado] = useState(null)

  return (
    <div>

      <NavBar onSelecionarCampeonato={setCampeonatoSelecionado} />

      <div className="conteudoPrincipal">

        <Routes>
          <Route path="/" element={<Home campeonato={campeonatoSelecionado} />} />
          <Route path="/clubes" element={<Clubes /> } />
          <Route path="/jogadores" element={<Jogadores />} />
        </Routes>
        
        <SideBar />

      </div>

      <Footer />

    </div>
  )
}

export default App;
