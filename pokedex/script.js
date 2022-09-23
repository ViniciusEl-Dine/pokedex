var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    let nome = document.getElementById("name")

    urlForm = urlForm + this.name.value

    urlForm = urlForm.toLocaleLowerCase()

    let resposta = document.getElementById('content')

    let imagem = document.getElementById('imgPokemon')

    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html
            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}