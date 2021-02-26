import React from "react"
import ReactDOM from "react-dom"
import './style.css';


function Emaildata() {
    return (
        <div>
            <body>
                <div class="mail">
                    <h2>Enter email to Validate</h2>
                    <form name="form1" action="#">
                        <ul>
                            <li><input type='text' name='text1' /></li>
                            <li>
                                <div class="msg"></div>
                            </li>
                            <li class="Validate"><input type="submit" name="Validate" value="Validate"
                                onclick="ValidateEmail(document.form1.text1)" /></li>
                            <li> </li>
                        </ul>
                    </form>
                </div>

            </body>
        </div >
    )
}


export default Emaildata