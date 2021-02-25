import React, { Component } from 'react';
import Itab from './indtab';


class Tablist extends Component {

    render() {
        console.log("id is " + this.props.activetab)

        return (

            this.props.tabs.map((tab) =>
                <Itab out={tab} activetab={this.props.activetab} ctab={this.props.ctab} />
            )
        )


    }
}
export default Tablist;