import React from "react"
import ReactDOM from "react-dom"
import './style.css';



const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

function Imagedata() {
    var img1 = require('./piglet.img')
    var img2 = require('./lake.img')
    var img3 = require('./river.img')
    var img4 = require('./giraffe.img')
    var img5 = require('./drops.img')
    var img6 = require('./lightning.img')
    return (

        <div>

            <body>

                <div className="grid">
                    <img src={img1.default} />
                    <img src={img2.default} />
                    <img src={img5.default} />
                    <img src={img3.default} />
                    <img src={img4.default} />
                    <img src={img6.default} />
                </div>

            </body>

        </div>
    )
}

export default Imagedata