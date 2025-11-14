const characterList = document.getElementById("character-list")

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
        if(!response.ok) {
            throw new Error ("No se ha podido llevar a cabo la solicitud")
        }
        return response.json();
    }).then ((data) =>{
        data.results.forEach((character) => {
            characterList.innerHTML += `<li id="${character.id}">
                <ul>
                    <li id="imagen"><img src="${character.image}" alt="${character.name}"></li>
                    <li id="nombre"><p><b>Name:</b>${character.name}</p></li>
                    <li id="especie"><p><b>Species:</b>${character.species}</p></li>
                </ul>
            </li>`;
        });
    }).catch ((error) => {
    console.error()
    });