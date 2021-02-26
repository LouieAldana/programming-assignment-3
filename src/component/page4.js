import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Tabledata() {
    return (
        //only one element allowed
        <div>

            <body>


                <table class="style1">
                    <tr>
                        <td>
                            Name</td>
                        <td>
                            Details</td>
                        <td>
                            Year</td>
                    </tr>
                    <tr>
                        <td>
                            <a
                                href="https://www.sciencenews.org/article/most-ancient-supermassive-black-hole-quasar-bafflingly-big">Black
                        holes</a>
                        </td>
                        <td>
                            The most ancient black hole ever discovered is so big it defies explanation.&nbsp;</td>
                        <td>
                            2021&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.popsci.com/story/science/how-old-is-the-universe/">Universe Age</a>
                        </td>
                        <td>
                            The universe is 13.8 billion years old-here how we know</td>
                        <td>
                            2021&nbsp;</td>
                    </tr>
                </table>




            </body>

        </div >

    )
}

export default Tabledata