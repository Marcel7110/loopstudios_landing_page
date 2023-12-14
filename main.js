const data = [
    {
        "title": "Deep Earth",
        "img": "image-deep-earth.jpg"
    },
    {
        "title": "Night Arcade",
        "img": "image-night-arcade.jpg"
    },
    {
        "title": "Soccer Team VR",
        "img": "image-soccer-team.jpg"
    },
    {
        "title": "The Grid",
        "img": "image-grid.jpg"
    },
    {
        "title": "From Up Above VR",
        "img": "image-from-above.jpg"
    },
    {
        "title": "Pocket Borealis",
        "img": "image-pocket-borealis.jpg"
    },
    {
        "title": "The Curiosity",
        "img": "image-curiosity.jpg"
    },
    {
        "title": "Make It Fisheye",
        "img": "image-fisheye.jpg"
    }
]

const box = document.querySelector('#movie-box')
const navbar = document.querySelector('#nav')

function handleMenu(){
    navbar.classList.toggle('nav-open')
}

data.map(item => {
    const newDiv = document.createElement("div")
    const title = document.createElement('h3')
    const background = document.createElement('div')
    const picture = document.createElement('picture')
    const source = document.createElement('source')
    const img = document.createElement('img')

    title.innerText = item.title.toUpperCase()

    newDiv.setAttribute('class','card')
    background.setAttribute('class','background')
    source.setAttribute('media','(max-width: 860px)')
    source.setAttribute('srcset', `./images/mobile/${item.img}`)
    img.setAttribute('src',`./images/desktop/${item.img}`)
    source.setAttribute('alt',`image_${item.title}`)

    picture.appendChild(source)
    picture.appendChild(img)

    newDiv.appendChild(background)
    newDiv.appendChild(picture)
    newDiv.appendChild(title)

    box.appendChild(newDiv)
})