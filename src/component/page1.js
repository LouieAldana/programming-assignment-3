import React from "react"
import ReactDOM from "react-dom"
import './style.css';


function Textdata() {
    return (
        //only one element allowed
        <div>

            <body>
                <button id="back-to-top-btn"><i class="fas fa-angle-double-up"></i></button>

                <div className="grid2">
                    <iframe title="Study Music" src="https://www.youtube.com/embed/4GnVDPD01as" frameBorder="0" allow="accelerometer"></iframe>
                    <iframe title="Ice Age" src="https://www.youtube.com/embed/8dXF7y1QUxU" frameBorder="0" allow="accelerometer"></iframe>
                    <iframe title="Cave Man" src="https://www.youtube.com/embed/QAoqPQFXFqI" frameBorder="0" allow="accelerometer"></iframe>
                    <iframe title="Soothing Rain" src="https://www.youtube.com/embed/1XO0SqsZhHU" frameBorder="0" allow="accelerometer"></iframe>
                </div>


            </body>

        </div >

    )

}

export default Textdata