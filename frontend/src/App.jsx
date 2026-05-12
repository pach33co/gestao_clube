import { useState } from 'react';
import Home from './pages/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import SideBar from './components/Sidebar.jsx';

function App() {

  const [campeonatoSelecionado, setCampeonatoSelecionado] = useState(null)

  return (
    <div>
    <NavBar />
    <Home campeonato={campeonatoSelecionado} />
    <SideBar onSelecionarCampeonato={setCampeonatoSelecionado}/>
    <Footer />
    </div>
  )
}

export default App;
