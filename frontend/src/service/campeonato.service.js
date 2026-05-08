export async function listarCampeonatos() {
    const response = await fetch('http://localhost:3000/campeonatos')
    const data = await response.json()
    
    return data
}