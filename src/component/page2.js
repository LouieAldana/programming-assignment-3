import React from "react"
import './style.css';




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
                    <img src={img1.default} alt="piglet" />
                    <img src={img2.default} alt="lake" />
                    <img src={img5.default} alt="river" />
                    <img src={img3.default} alt="giraffe" />
                    <img src={img4.default} alt="drops" />
                    <img src={img6.default} alt="lightning" />
                </div>

            </body>

        </div>
    )
}


export default Imagedata
