const characterList = document.getElementById("character-list")
const prevPage = document.getElementById("prev-page")
const nextPage = document.getElementById("next-page")
let page = 1

prevPage.addEventListener("click", () => {
    if (page > 1) {
        page -= 1
        console.log(page)
        characterList.innerHTML =''
        traerPersonajes(page)
    
    }
})

nextPage.addEventListener("click", () => {
    if (page < 42) {
    page += 1;
    console.log(page)
    characterList.innerHTML =''
    traerPersonajes(page)
    }   
})

function traerPersonajes(page) {
let url = "https://rickandmortyapi.com/api/character/?page=" + `${page}`
    fetch(url)
    .then((response) => {
        if(!response.ok) {
            throw new Error ("No se ha podido llevar a cabo la solicitud")
        }
        return response.json();
    }).then ((data) =>{
        console.log(data)
        data.results.forEach((character) => {
            characterList.innerHTML += `<li id="${character.id}">
                <ul>
                        <li id="imagen"><img src="${character.image}" alt="${character.name}"></li>
                    <li id="nombre"><p>Name:</p><p>${character.name}</p></li>
                    <li id="especie"><p>Species:</p><p>${character.species}</p></li>
                </ul>
            </li>`;
        });
    }).catch ((error) => {
    console.error()
    });
}
traerPersonajes()



