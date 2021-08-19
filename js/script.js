const iconMenu = document.getElementById("icon-menu");
const mainMenu = document.getElementById("main-menu");
const articles = document.querySelectorAll('#proyectos article');
const skills = document.querySelectorAll('#skills i');
const express = document.getElementById("express");
const mongo = document.getElementById("mongodb");
const titleSpan = document.getElementById("title-span");
const headerTitle = document.getElementById("header-title");
headerTitle.textContent = "< Emi ";
titleSpan.textContent = "<FRONT END DEVELOPER />";
// scroll Reveal configuration
    window.sr = ScrollReveal()
    const revealAnimation = (name, direction, number) => {
        sr.reveal(name, {
            duration: 3000,
            origin: direction,
            distance: number,
        })
    }
    revealAnimation('.header', 'bottom', '-100px');
    revealAnimation('.profile-img', 'top', '250px');
    revealAnimation('.profile-title', 'top', '250px');
    revealAnimation('.container-proyects', 'left', '1000px');
    revealAnimation('.container--about-me', 'bottom', '500px');

iconMenu.addEventListener('click', () => {
    mainMenu.classList.toggle("menu--show")
})
const descriptionProyect = [
    {"title":"App clima", "description":"Una app del clima","icon": ["fab fa-react", "fab fa-sass", "fab fa-html5"] , "id":"clima", "iconGithub": "fab fa-github", "page": "fas fa-globe-americas", "linkGithub":"https://github.com/EmilianoGorgellon/App-clima", "linkPage":"https://react-app-clima.herokuapp.com/"}, 
    {"title":"App Paises", "description": "Una app con muchos paises y con theme", "icon": ["fab fa-react", "fab fa-sass", "fab fa-html5"], "id": "paises", "iconGithub": "fab fa-github", "page": "fas fa-globe-americas", "linkGithub":"https://github.com/EmilianoGorgellon/app-paises", "linkPage":"https://app-paises.herokuapp.com/"}, 
    {"title":"Cuenta Regresiva", "description": "Cuenta regresiva hacia mi cumpleaños", "icon": ["fab fa-js-square", "fab fa-css3-alt", "fab fa-html5"], "id": "cuentaRegresiva", "iconGithub": "fab fa-github", "page": "fas fa-globe-americas", "linkGithub":"https://github.com/EmilianoGorgellon/Cuenta-regresiva", "linkPage":"https://emilianogorgellon.github.io/cuenta-regresiva/"}, 
    {"title": "Juego lagarto spock", "description":"Juego piedra-papel-tijera-lagarto-spock", "icon":["fab fa-react", "fab fa-sass", "fab fa-html5"], "id":"juego", "iconGithub":"fab fa-github", "page":"fas fa-globe-americas", "linkGithub":"https://github.com/EmilianoGorgellon/app-game-lagarto-spock", "linkPage":"https://app-lagarto-spock.herokuapp.com/"}, 
    {"title":"E-commerce", "description":"E-commerce con buscador, categorias y carrito.", "icon":["fab fa-html5","fab fa-node-js", "fab fa-css3-alt","fab fa-js-square"], "id":"productos", "iconGithub":"fab fa-github", "page":"fas fa-globe-americas", "linkGithub": "https://github.com/EmilianoGorgellon/proyecto-productos", "linkPage": "https://node-proyecto-productos.herokuapp.com/"}, 
    {"title":"mapa con direccion IP", "description":"Mapa con geolocalizacion del usuario e direccion IP", "icon":["fab fa-html5","fab fa-node-js", "fab fa-css3-alt","fab fa-js-square"], "id":"map", "iconGithub":"fab fa-github", "page":"fas fa-globe-americas", "linkGithub": "https://github.com/EmilianoGorgellon/googleMaps-ip", "linkPage": "https://ip-adress-map.herokuapp.com/"}
]
const textSkill = [
    {"id":"html", "text":"HTML5"},
    {"id":"css", "text":"Css3"}, 
    {"id":"js", "text":"JavaScript"}, 
    {"id":"react", "text": "React"}, 
    {"id": "sass", "text": "Sass"},
    {"id":"node", "text":"Node JS"}, 
    {"id":"bootstrap", "text": "Bootstrap"},
    {"id":"github", "text":"Github"},
    {"id":"git", "text":"Git"},
    {"id":"express", "text":"Express.js"}, 
    {"id":"mongodb", "text":"MongoDB"}
]

const rellenar = (e) => {
    for (datos of descriptionProyect){
        let iconos = datos.icon.map((dato) => `<i class="${dato} icon"></i>`);
        let iconosSinComas = iconos.join("");
        if (datos.id === e.target.id) {
            document.getElementById(`${datos.id}`).insertAdjacentHTML('afterbegin', 
                `<div class="container--information-proyect">
                    <h3 class="information--title">${datos.title} </h3>
                    <p class="information--description">${datos.description}</p>
                    <div class="container-icon">
                        ${iconosSinComas}
                    </div>
                    <div class="container--information-links">
                        <a href="${datos.linkGithub}" class="link-github" target="_blank" ><i class="${datos.iconGithub}"></i> Github</a>
                        <a href="${datos.linkPage}" class="link-page" target="_blank" ><i class="${datos.page}"></i> Visitar sitio web</a>
                    </div>
                </div>`)            
            break
        }
    }
}

const skillText = (e) => {
    for (datos of textSkill){
        if (e.target.id === datos.id){
            document.getElementById(`${datos.id}`).insertAdjacentHTML('afterbegin', 
                `<h5 class="text-skill">${datos.text}</h5>`
            )
        }
    }
}
const skillExpress = (e) => {
    for (datos of textSkill){
        if (e.target.id === datos.id){
            document.getElementById(`${datos.id}`).insertAdjacentHTML('beforeend', 
                `<h5 class="text-skill-express" id="deleteExpress">${datos.text}</h5>`
            )
        }
    }   
}
const skillMongo = (e) => {
    for (datos of textSkill) {
        if (e.target.id === datos.id) {
            document.getElementById(`${datos.id}`).insertAdjacentHTML('beforeend', 
                `<h5 class="text-skill-mongodb" id="deleteMongodb">${datos.text}</h5>`)
        }
    }
}
articles.forEach((article) => {
    article.addEventListener('mouseenter', rellenar)
    article.addEventListener('mouseleave', (e) => document.getElementById(`${e.target.id}`).innerHTML = "");

})

skills.forEach((skill) => {
    skill.addEventListener('mouseenter', skillText)
    skill.addEventListener('mouseleave', (e) => document.getElementById(`${e.target.id}`).innerHTML = "");
})

express.addEventListener('mouseenter', skillExpress)
express.addEventListener('mouseleave', () => document.getElementById(`express`).removeChild(deleteExpress));
mongo.addEventListener('mouseenter', skillMongo);
mongo.addEventListener('mouseleave', () => document.getElementById("mongodb").removeChild(deleteMongodb))
