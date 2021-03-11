import { Component, React } from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Zoomdata extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            email: '',
            task: '',
            dateTime: new Date(),
            zoomLink: '',
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
            <div class="container">
                <div>Zoom meeting Manager</div>
                <button>Full Schedule</button>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Add Task</Form.Label>
                        <Form.Control type="text" placeholder="Add Task" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Zoom Link</Form.Label>
                        <Form.Control type="password" placeholder="Zoom link to meeting" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Important" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save Information
                    </Button>
                </Form>
            </div>
        );
    }
}
export default Zoomdata;