export async function listarClubes() {
    const response = await fetch('http://localhost:3000/clubes')
    const data = await response.json()
    
    return data
};