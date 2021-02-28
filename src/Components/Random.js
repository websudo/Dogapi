import React, { Component } from 'react'
import './Random.css'

export class Random extends Component {
    render() {
        return (
            <div id="button">
                <button onClick={this.props.onButtonClick}>Random</button>
            </div>
        )
    }
}

export default Random
