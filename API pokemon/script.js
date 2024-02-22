async function test() {

    let contenedor = document.getElementById('container-results')

    for(let i = 1; i <= 151; i++){
        var respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+i);
        var info = await respuesta.json();

        const newDiv = document.createElement('div');
        newDiv.classList.add('poke-container');

        const dynamicImage = document.createElement('img');
        dynamicImage.classList.add('poke-img');

        dynamicImage.src = info.sprites.front_default;

        newDiv.appendChild(dynamicImage);;

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info-container');

        const nameP = document.createElement('p');
        let nameText = document.createTextNode('#' + info.id + ' - ' + info.name);
        nameP.appendChild(nameText);
        infoDiv.appendChild(nameP);

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('imgtype-container');

        info.types.forEach(pokemon => {
        const typeImg = document.createElement('img');
        typeImg.classList.add('type-img');
            if (pokemon.type.name === 'normal'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/0/0f/NormalIC.png/105px-NormalIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'fighting'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/9/9b/FightingIC.png/105px-FightingIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'flying'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/d/dc/FlyingIC.png/105px-FlyingIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'poison'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/8/86/PoisonIC.png/105px-PoisonIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'ground'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/8/87/GroundIC.png/105px-GroundIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'rock'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/e/e6/RockIC.png/105px-RockIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'bug'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/b/bd/BugIC.png/105px-BugIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'ghost'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/c/c3/GhostIC.png/105px-GhostIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'steel'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/SteelIC.png/105px-SteelIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'fire'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/9/9f/FireIC.png/105px-FireIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'water'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/WaterIC.png/105px-WaterIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'grass'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/a/a5/GrassIC.png/105px-GrassIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'electric'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/e/ea/ElectricIC.png/105px-ElectricIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'psychic'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/f/f8/PsychicIC.png/105px-PsychicIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'ice'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/8/86/IceIC.png/105px-IceIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'dragon'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/c/c3/DragonIC.png/105px-DragonIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'dark'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/e/e3/DarkIC.png/105px-DarkIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'fairy'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/3/31/FairyIC.png/105px-FairyIC.png';
                imgDiv.appendChild(typeImg);
            }
            infoDiv.appendChild(imgDiv);
        });
        newDiv.appendChild(infoDiv);  
        
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        newDiv.appendChild(overlay);
        
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerText = 'x';

        const nameModal = document.createElement('p');
        let nameModalText = document.createTextNode('Name: ' + info.name);

        const weightModal = document.createElement('p');
        let weightModalText = document.createTextNode('Weight: ' + info.weight);

        const heightModal = document.createElement('p');
        let heightModalText = document.createTextNode('Height: ' + info.height);

        const typesModalTitle = document.createElement('p');
        let typesModalTitleText = document.createTextNode('Types:');
        const typesModal = document.createElement('ul');
        info.types.forEach(pokemon => {
            const typesModalElem = document.createElement('li');
            typesModalElem.innerText = pokemon.type.name;
            typesModal.appendChild(typesModalElem);
        }
        )

        const statsModalTitle = document.createElement('p');
        let statsModalTitleText = document.createTextNode('Base stats:');
        const statsModal = document.createElement('ul');
        info.stats.forEach(pokemon => {
            const statsModalElem = document.createElement('li');
            statsModalElem.innerText = pokemon.stat.name + ': ' + pokemon.base_stat;
            statsModal.appendChild(statsModalElem);
        }
        )

        nameModal.appendChild(nameModalText);
        weightModal.appendChild(weightModalText);
        heightModal.appendChild(heightModalText);
        typesModalTitle.appendChild(typesModalTitleText);
        statsModalTitle.appendChild(statsModalTitleText);
        
        modalContent.appendChild(closeBtn);

        modalContent.appendChild(nameModal);
        modalContent.appendChild(weightModal);
        modalContent.appendChild(heightModal);
        modalContent.appendChild(typesModalTitle);
        modalContent.appendChild(typesModal);
        modalContent.appendChild(statsModalTitle);
        modalContent.appendChild(statsModal);

        modal.appendChild(modalContent);
        newDiv.appendChild(modal);
        
        contenedor.appendChild(newDiv);

        // Get the modal
        let modalFinal = document.getElementsByClassName("modal")[i-1];

        // Get the button that opens the modal
        let btn = document.getElementsByClassName("overlay")[i-1];
        
        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[i-1];
        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modalFinal.style.display = "block";
            console.log('btn')
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modalFinal.style.display = "none";
            console.log('span')
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modalFinal) {
                modalFinal.style.display = "none";
            }
        }
    }
}

test();

const buscadorPokemon = (query) => {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon/'+query

    let contenedor = document.getElementById('container-results')
    
    fetch(API_URL)
    .then(respuesta => respuesta.json())
    .then(info => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('poke-container');

        const dynamicImage = document.createElement('img');
        dynamicImage.classList.add('poke-img');

        dynamicImage.src = info.sprites.front_default;

        newDiv.appendChild(dynamicImage);

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info-container');

        const nameP = document.createElement('p');
        let nameText = document.createTextNode('#' + info.id + ' - ' + info.name);
        nameP.appendChild(nameText);
        infoDiv.appendChild(nameP);

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('imgtype-container');

        info.types.forEach(pokemon => {
            const typeImg = document.createElement('img');
            typeImg.classList.add('type-img');
            if (pokemon.type.name === 'normal'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/0/0f/NormalIC.png/105px-NormalIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'fighting'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/9/9b/FightingIC.png/105px-FightingIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'flying'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/d/dc/FlyingIC.png/105px-FlyingIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'poison'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/8/86/PoisonIC.png/105px-PoisonIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'ground'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/8/87/GroundIC.png/105px-GroundIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'rock'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/e/e6/RockIC.png/105px-RockIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'bug'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/b/bd/BugIC.png/105px-BugIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'ghost'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/c/c3/GhostIC.png/105px-GhostIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'steel'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/SteelIC.png/105px-SteelIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'fire'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/9/9f/FireIC.png/105px-FireIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'water'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/WaterIC.png/105px-WaterIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'grass'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/a/a5/GrassIC.png/105px-GrassIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'electric'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/e/ea/ElectricIC.png/105px-ElectricIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'psychic'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/f/f8/PsychicIC.png/105px-PsychicIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'ice'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/8/86/IceIC.png/105px-IceIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'dragon'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/c/c3/DragonIC.png/105px-DragonIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'dark'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/e/e3/DarkIC.png/105px-DarkIC.png';
                imgDiv.appendChild(typeImg);
            } else if (pokemon.type.name === 'fairy'){
                typeImg.src = 'https://archives.bulbagarden.net/media/upload/thumb/3/31/FairyIC.png/105px-FairyIC.png';
                imgDiv.appendChild(typeImg);
            }
            infoDiv.appendChild(imgDiv);
        });
        newDiv.appendChild(infoDiv);  

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.setAttribute('id', 'myBtn');
        newDiv.appendChild(overlay);
        
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', 'myModal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerText = 'x';

        const nameModal = document.createElement('p');
        let nameModalText = document.createTextNode('Name: ' + info.name);

        const weightModal = document.createElement('p');
        let weightModalText = document.createTextNode('Weight: ' + info.weight);

        const heightModal = document.createElement('p');
        let heightModalText = document.createTextNode('Height: ' + info.height);

        const typesModalTitle = document.createElement('p');
        let typesModalTitleText = document.createTextNode('Types:');
        const typesModal = document.createElement('ul');
        info.types.forEach(pokemon => {
            const typesModalElem = document.createElement('li');
            typesModalElem.innerText = pokemon.type.name;
            typesModal.appendChild(typesModalElem);
        }
        )

        const statsModalTitle = document.createElement('p');
        let statsModalTitleText = document.createTextNode('Base stats:');
        const statsModal = document.createElement('ul');
        info.stats.forEach(pokemon => {
            const statsModalElem = document.createElement('li');
            statsModalElem.innerText = pokemon.stat.name + ': ' + pokemon.base_stat;
            statsModal.appendChild(statsModalElem);
        }
        )

        nameModal.appendChild(nameModalText);
        weightModal.appendChild(weightModalText);
        heightModal.appendChild(heightModalText);
        typesModalTitle.appendChild(typesModalTitleText);
        statsModalTitle.appendChild(statsModalTitleText);
        
        modalContent.appendChild(closeBtn);

        modalContent.appendChild(nameModal);
        modalContent.appendChild(weightModal);
        modalContent.appendChild(heightModal);
        modalContent.appendChild(typesModalTitle);
        modalContent.appendChild(typesModal);
        modalContent.appendChild(statsModalTitle);
        modalContent.appendChild(statsModal);

        modal.appendChild(modalContent);
        newDiv.appendChild(modal);
        
        contenedor.appendChild(newDiv);

        let modalFinal = document.getElementById("myModal");
    
        // Get the button that opens the modal
        let btn = document.getElementById("myBtn");
    
        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];
    
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modalFinal.style.display = "block";
        }
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modalFinal.style.display = "none";
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modalFinal) {
                modalFinal.style.display = "none";
            }
        }
    })
}

// Añadir evento a nuestro botón Search
let searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
    // Obtener texto del input de búsqueda
    let querySearch = document.querySelector('#query').value
    // Definimos el contenedor par realizar cambios en el HTML
    const contenedor = document.querySelector('#container-results') 
    contenedor.innerHTML = '';
    // Mandamos llamar la función buscadorPaises() con el query obtenido de el input
    buscadorPokemon(querySearch)
})