export async function listarJogadorRecente() {
    const response = await fetch('http://localhost:3000/jogadores/recentes')
    const data = await response.json()
    
    return data
}

export async function listarJogadores() {
    const response = await fetch('http://localhost:3000/jogadores')
    const data = await response.json()
    
    return data
};