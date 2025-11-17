const characterList = document.getElementById("character-list")
const prevPage = document.getElementById("prev-page")
const nextPage = document.getElementById("next-page")
let page = 1
let finalPage = 42

prevPage.addEventListener("click", () => {
    if (page > 1) {
        page -= 1
        console.log(page)
        characterList.innerHTML =''
        traerPersonajes()
    
    }
})

nextPage.addEventListener("click", () => {
    if (page < 42) {
    page += 1;
    console.log(page) 
    characterList.innerHTML =''
    traerPersonajes()
    }   
})

function removeButton (){
    page === 1 ? prevPage.classList.add("disabled") : prevPage.classList.remove("disabled")
    page === 42 ? nextPage.classList.add("disabled") : nextPage.classList.remove("disabled")
}

function traerPersonajes(page) {
let url = "https://rickandmortyapi.com/api/character/?page=" + `${page}`
    fetch(url)
    .then((response) => {
        if(!response.ok) {
            throw new Error (`Error en la petición:${response.status}`)
        } return response.json();
    }).then ((data) =>{
        finalPage = data.info.pages
        console.log(data)
        const character = data.results.map((character) => {
            const template = `<li id="${character.id}">
                <ul>
                        <li id="imagen"><img src="${character.image}" alt="${character.name}"></li>
                    <li id="nombre"><p>Name:</p><p>${character.name}</p></li>
                    <li id="especie"><p>Species:</p><p>${character.species}</p></li>
                </ul>
            </li>`;
            return template
        });
    characterList.innerHTML =character
    removeButton()
    }).catch ((error) => {
    console.error()
    });

}   
traerPersonajes()



