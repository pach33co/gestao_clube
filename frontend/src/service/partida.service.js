export async function listarPartidas() {
    const response = await fetch('http://localhost:3000/partidas')
    const data = await response.json()
    
    return data
}