import { Component } from 'react';
import React from "react"
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
    var img7 = require('./ladybug.img')
    var img8 = require('./mantis.img')
    return (

        <div>

            <body>

                <div className="grid">
                    <img src={img1.default} alt="piglet" />
                    <img src={img2.default} alt="lake" />
                    <img src={img5.default} alt="river" />
                    <img src={img3.default} alt="giraffe" />
                    <img src={img4.default} alt="drops" />
                    <img src={img6.default} alt="lightning" />
                    <img src={img7.default} alt="ladybug" />
                    <img src={img8.default} alt="mantis" />
                </div>

            </body>

        </div>
    )
}


export default Imagedata
