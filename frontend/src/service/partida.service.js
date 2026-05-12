export async function listarPartidas() {
    const response = await fetch('http://localhost:3000/partidas')
    const data = await response.json()
    
    return data
};

export async function listarPartidasPorCampeonato(campeonatoId) {
    const response = await fetch(`http://localhost:3000/partidas?campeonato=${campeonatoId}`)
    const data = await response.json()

    return data
};

