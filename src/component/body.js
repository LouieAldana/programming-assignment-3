import React, { Component } from 'react';
import Textdata from './page1';
import Imagedata from './page2';
import Videodata from './page3';
import Tabledata from './page4';
import Emaildata from './page5';
import Zoomdata from './page6';
import './style.css'

class Body extends Component {


    render() {

        var displaycontent = () => {
            var activetab = this.props.activetab;
            if (activetab === 1) {
                return <Textdata />
            } else if (activetab === 2) {
                return <Imagedata />
            } else if (activetab === 3) {
                return <Videodata />
            } else if (activetab === 4) {
                return <Tabledata />
            } else if (activetab === 5) {
                return <Emaildata />
            } else {
                return <Zoomdata />
            }
        }

        return (displaycontent())


    }
}
export default Body;

