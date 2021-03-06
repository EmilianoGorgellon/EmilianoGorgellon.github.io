const iconMenu = document.getElementById("icon-menu");
const mainMenu = document.getElementById("main-menu");
const articles = document.querySelectorAll('#proyectos article');
const skills = document.querySelectorAll('#skills i');
const express = document.getElementById("express");
const mongo = document.getElementById("mongodb");
const redux = document.getElementById("redux");
const titleSpan = document.getElementById("title-span");
const headerTitle = document.getElementById("header-title");
headerTitle.textContent = "< Emi ";
titleSpan.textContent = "<FULL STACK DEVELOPER />";
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
// animation scroll navbar
if (window.innerWidth > 768) {
    const allMenuItem = document.querySelectorAll(".menu--item-link");
    window.addEventListener('scroll', () => {
        const windowHeigth = window.scrollY;
        allMenuItem.forEach((element,i) => {
            if (windowHeigth === 0 || windowHeigth > 0 && windowHeigth < 475) {
                i === 0 ? (
                    allMenuItem[i].style.backgroundColor ="#2c2f33",
                    allMenuItem[i].style.transform = "scale(1.1)"
                ) : (
                    allMenuItem[i].style.backgroundColor ="#7289da",
                    allMenuItem[i].style.transform = "scale(1)"
                )
            } else if (windowHeigth > 475 && windowHeigth < 2000) {
                i === 1 ? (
                    allMenuItem[i].style.backgroundColor ="#2c2f33",
                    allMenuItem[i].style.transform = "scale(1.1)"
                ) : (
                    allMenuItem[i].style.backgroundColor ="#7289da",
                    allMenuItem[i].style.transform = "scale(1)"
                )
            } else if (windowHeigth >= 2000 && windowHeigth < 3075) {
                i === 2 ? (
                    allMenuItem[i].style.backgroundColor ="#2c2f33",
                    allMenuItem[i].style.transform = "scale(1.1)"
                ) : (
                    allMenuItem[i].style.backgroundColor ="#7289da",
                    allMenuItem[i].style.transform = "scale(1)"
                )
            } else {
                i === 3 ? (
                    allMenuItem[i].style.backgroundColor = "#2c2f33",
                    allMenuItem[i].style.transform = "scale(1.1)"
                ) : (
                    allMenuItem[i].style.backgroundColor ="#7289da",
                    allMenuItem[i].style.transform = "scale(1)"
                )
            }
        })
    }) 
}


iconMenu.addEventListener('click', () => {
    mainMenu.classList.toggle("menu--show")
})
const descriptionProyect = [
    {"title":"App paises", "description":"Una app de paises ","icon": ["fab fa-react", "fab fa-sass", "fab fa-html5"] , "id":"paises", "iconGithub": "fab fa-github", "page": "fas fa-globe-americas", "linkGithub":"https://github.com/EmilianoGorgellon/app-paises", "linkPage":"https://react-paises-app.herokuapp.com/", "id_index": 1}, 
    {"title":"App Alkemy Hero", "description": "Una app con muchos heroes y villanos.<br/> Email: challenge@alkemy.org <br/> Password: react", "icon": ["fab fa-react", "fab fa-css3-alt", "fab fa-html5"], "id": "alkemy", "iconGithub": "fab fa-github", "page": "fas fa-globe-americas", "linkGithub":"https://github.com/EmilianoGorgellon/alkemyChallenge", "linkPage":"https://alkemy-react-hero.herokuapp.com/", "id_index": 2}, 
    {"title":"Cuenta Regresiva", "description": "Cuenta regresiva hacia mi cumplea??os", "icon": ["fab fa-js-square", "fab fa-css3-alt", "fab fa-html5"], "id": "cuentaRegresiva", "iconGithub": "fab fa-github", "page": "fas fa-globe-americas", "linkGithub":"https://github.com/EmilianoGorgellon/Cuenta-regresiva", "linkPage":"https://emilianogorgellon.github.io/cuenta-regresiva/", "id_index": 3}, 
    {"title": "Juego lagarto spock", "description":"Juego piedra-papel-tijera-lagarto-spock", "icon":["fab fa-react", "fab fa-sass", "fab fa-html5"], "id":"juego", "iconGithub":"fab fa-github", "page":"fas fa-globe-americas", "linkGithub":"https://github.com/EmilianoGorgellon/app-game-lagarto-spock", "linkPage":"https://app-lagarto-spock.herokuapp.com/", "id_index": 4}, 
    {"title":"E-commerce", "description":"E-commerce con buscador, categorias y carrito.", "icon":["fab fa-html5","fab fa-node-js", "fab fa-css3-alt","fab fa-js-square"], "id":"productos", "iconGithub":"fab fa-github", "page":"fas fa-globe-americas", "linkGithub": "https://github.com/EmilianoGorgellon/proyecto-productos", "linkPage": "https://node-proyecto-productos.herokuapp.com/", "id_index": 5}, 
    {"title":"mapa con direccion IP", "description":"Mapa con geolocalizacion del usuario e direccion IP", "icon":["fab fa-html5","fab fa-node-js", "fab fa-css3-alt","fab fa-js-square"], "id":"map", "iconGithub":"fab fa-github", "page":"fas fa-globe-americas", "linkGithub": "https://github.com/EmilianoGorgellon/googleMaps-ip", "linkPage": "https://ip-adress-map.herokuapp.com/", "id_index": 6}
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
    {"id":"mongodb", "text":"MongoDB"},
    {"id":"redux", "text": "Redux"}
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

const verProyectosCelulares = (e) => {
    let index = 0;
    for (datos of descriptionProyect){
        index++;
        let iconos = datos.icon.map((dato) => `<i class="${dato} icon"></i>`);
        let iconosSinComas = iconos.join("");
        if (datos.id_index === index) {
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
        }
    }
}

if (window.innerWidth < 768) {
    (async () => {
        verProyectosCelulares()
    })()
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
                `<h5 class="text-skill-icon" id="deleteExpress">${datos.text}</h5>`
            )
        }
    }   
}
const skillMongo = (e) => {
    for (datos of textSkill) {
        if (e.target.id === datos.id) {
            document.getElementById(`${datos.id}`).insertAdjacentHTML('beforeend', 
                `<h5 class="text-skill-icon" id="deleteMongodb">${datos.text}</h5>`)
        }
    }
}
const skillRedux = (e) => {
    for (datos of textSkill){
        if (e.target.id === datos.id) {
            document.getElementById(`${datos.id}`).insertAdjacentHTML('beforeend', 
            `<h5 class="text-skill-icon" id="deleteRedux">${datos.text}</h5>`)
        }
    }
}
articles.forEach((article) => {
    if (window.innerWidth > 768) {
        article.addEventListener('mouseenter', rellenar)
        article.addEventListener('mouseleave', (e) => document.getElementById(`${e.target.id}`).innerHTML = "");
    }
})

skills.forEach((skill) => {
    skill.addEventListener('mouseenter', skillText)
    skill.addEventListener('mouseleave', (e) => document.getElementById(`${e.target.id}`).innerHTML = "");
})

express.addEventListener('mouseenter', skillExpress)
express.addEventListener('mouseleave', () => document.getElementById(`express`).removeChild(deleteExpress));
mongo.addEventListener('mouseenter', skillMongo);
mongo.addEventListener('mouseleave', () => document.getElementById("mongodb").removeChild(deleteMongodb))
redux.addEventListener('mouseenter', skillRedux);
redux.addEventListener('mouseleave', () => document.getElementById('redux').removeChild(deleteRedux))