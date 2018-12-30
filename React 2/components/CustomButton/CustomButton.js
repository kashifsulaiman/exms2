import React, { Component } from 'react';
import './Style.css'

class CustomButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return <button className="button">
            {this.props.text}
        </button>
    }
}

export default CustomButton