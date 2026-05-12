import { useState } from 'react';
import Home from './pages/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import SideBar from './components/Sidebar.jsx';

function App() {

  const [campeonatoSelecionado, setCampeonatoSelecionado] = useState(null)

  return (
    <div>
    <NavBar onSelecionarCampeonato={setCampeonatoSelecionado} />
    <Home campeonato={campeonatoSelecionado} />
    <SideBar />
    <Footer />
    </div>
  )
}

export default App;
