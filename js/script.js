const projet = [
    {
        "titre":"Kasa",
        "image":"Kasa.webp",
		"description":"Kasa est un site de location immobilière, D'après une maquette j'ai du rélaliser entièrement la partie Front-end en utilisant react et react router",
        "github":"https://github.com/BST-tsb/kasa"

    },
    {
        "titre":"Argent Bank",
        "image":"Argent.webp",
		"description":"Argent bank est un site de gestion de transaction, a l'aide d'un swaggers et d'une maquette j'ai crée le site en grace a react et react router ainsi que redux toolkit",
        "github":"https://github.com/BST-tsb/my-app"

    },
    {
        "titre":"Portfolio Sophie Bluel",
        "image":"Sophie.webp",
		"description":"Pour le portfolio de sophie bluel j'ai modfier la partie front-end du site pour la rendre dynamique et j'ai ajouté un site de connexion ainsi qu'un système d'ajout et de suppresion de photo à l'aide de html/css et javascript",
        "github":"https://github.com/BST-tsb/sophiebluel"

    },
    {
        "titre":"OhMyFood",
        "image":"OhMyFood.webp",
		"description":"Oh My Food est une réalisation en mobil first, il permet de voir différents restaurants et menus. Les langages utilisés sont HTML/SASS",
        "github":"https://github.com/BST-tsb/ohMyfood",
        "site":"https://bst-tsb.github.io/ohMyfood/"

    },
    {
        "titre":"Bookie",
        "image":"Bookie.webp",
		"description":"Bookie est un site de location de logement, j'ai rélalisé ce site responsive from scratch en utilisant HTML/CSS",
        "github":"https://github.com/BST-tsb/bookie",
        "site":"https://bst-tsb.github.io/bookie/"

    },
    {
        "titre":"Portfolio Nina Carducci",
        "image":"Nina.webp",
		"description":"Pour ce projet j'avais pour mission d'améliorer le score ligthouse du site en améliorant le seo, les performance et l'accessibilité",
        "github":"https://github.com/BST-tsb/ninacarducci",
        "site":"https://bst-tsb.github.io/ninacarducci/"

    }
    
]

const contProject = document.querySelector('.cont-proj')

const generateProject = () => {
    contProject.innerHTML = '' ;
    for(let i = 0; i < projet.length; i++) {
        index = i + 1
        if(projet[i].site) {
            contProject.innerHTML += `
        <div class="projet reveal-${index}">
        <h3>${projet[i].titre}</h3>
        <div class="image-proj">
            <img src="images/${projet[i].image}">
        </div>
        <div class="cont-desc">
            <p>${projet[i].description}</p>
            <div class="btn-proj">
                <a href="${projet[i].github}" class="animated-link" target="_blank">Github</a>
                <a href="${projet[i].site}" class="animated-link" target="_blank">Voir le site</a>
            </div>
        </div>
    </div>
        ` ;
        }
        else {
            contProject.innerHTML += `
            <div class="projet reveal-${index}">
            <h3>${projet[i].titre}</h3>
            <div class="image-proj">
                <img src="images/${projet[i].image}">
            </div>
            <div class="cont-desc">
                <p>${projet[i].description}</p>
                <div class="btn-proj">
                    <a href="${projet[i].github}" class="animated-link" target="_blank">Github</a>
                </div>
            </div>
        </div>
            ` ;
        }
        
}
}
generateProject()



const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio 
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
        
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
})

