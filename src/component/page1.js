import React, { Component } from 'react';
const msg = document.querySelector('.msg');

class App extends Component {
    state = {
        value: "",
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }


    render() {
        const { value, value2 } = this.state;
        return (
            <form>
                <label>
                    First Name:
                    </label>
                <br />
                <input
                    type='text' onChange={this.myChangeHandler}
                />
                <br />
                <label>
                    Last Name:
                    </label>
                <br />
                <input
                    type='text' onChange={this.myChangeHandler}
                />
                <h4>Favorite movie: {value}</h4>
                <label>
                    <input type="radio"
                        value="avengers"
                        name="value"
                        checked={value === "avengers"}
                        onChange={this.onChange} />
                        Avengers
                </label>
                <br />
                <label>
                    <input type="radio"
                        value="dark knight"
                        name="value"
                        checked={value === "dark knight"}
                        onChange={this.onChange} />
                        Dark Knight
                </label>
                <br />
                <label>
                    <input type="radio"
                        value="tenet"
                        name="value"
                        checked={value === "tenet"}
                        onChange={this.onChange} />
                        Tenet
                </label>
                <br />
                <button type="submit">
                    Done</button>

            </form>

        )

    }


}

export default App;