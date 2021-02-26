import React, { Component } from 'react';
import Videodata from './page1';
import Imagedata from './page2';
import Emaildata from './page4';
import './style.css'

class Body extends Component {


    render() {

        var displaycontent = () => {
            var activetab = this.props.activetab;
            if (activetab === 1) {
                return <Videodata />
            } else if (activetab === 2) {
                return <Imagedata />
            } else if (activetab === 3) {
                return <Imagedata />
            } else {
                return <Emaildata />
            }
        }

        return (displaycontent())


    }
}
export default Body;