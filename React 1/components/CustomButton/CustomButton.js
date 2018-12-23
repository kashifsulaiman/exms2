import React, { Component } from 'react';
import './Style.css'

class CustomButton extends Component {
    render() {
        console.log('this.props.name ==> ', this.props);
        return <button className="button">
            {this.props.text}
        </button>
    }
}

export default CustomButton