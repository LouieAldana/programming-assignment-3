import { Component, React } from 'react';
import './style.css';

class Emaildata extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(inputText) {
        this.setState({
            email: inputText.target.value
        });
    }

    handleSubmit(inputText) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.state.email !== '') {
            if (this.state.email.match(mailformat)) {
                this.setState({
                    message: "Email successfully recorded."
                })
            } else {
                this.setState({
                    message: "Invalid email address."
                })
            }

        }
        inputText.preventDefault();
    }


    render() {
        return (
            <div class="mail">
                <h2>Enter email to Validate</h2>
                <form name="email" onSubmit={this.handleSubmit}>
                    <input type='text' name='input' value={this.state.email} onChange={this.handleChange} />
                    <br />
                    <input type='submit' value='Submit' />
                    <p id="submitMsg">{this.state.message}</p>
                </form>
            </div>
        );
    }
}
export default Emaildata;