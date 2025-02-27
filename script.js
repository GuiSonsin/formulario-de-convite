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

function validarTipoArquivo(){
    const inputFile = document.getElementById('photo')
    const errorMessage = document.querySelector('.error')

    if(inputFile.files.length > 0){
        const file = inputFile.files[0]
        const allowType = ["image/jpeg", "image/webp", "image/png"]

        if(!allowType.includes(file.type)){
            errorMessage.style.display = "flex";
            inputFile.value = "";
        }else{
            errorMessage.style.display = "none";
        }
    }
}