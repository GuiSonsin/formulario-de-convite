function mostrarNomeArquivo(){
    const input = document.getElementById('photo')
    const nomeDisplay = document.getElementById('nome-arquivo')

    if (input.files && input.files.length > 0) {
        const nomeArquivo = input.files[0].name;
        nomeDisplay.textContent = `${nomeArquivo}`;
    } else {
        nomeDisplay.textContent = 'Nenhum arquivo selecionado';
    }
}