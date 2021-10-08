import React, { Component } from 'react'
import './Random.css'

export class Random extends Component {
    render() {
        return (
            <div id="button">
                <button type="button" className="btn btn-dark" onClick={this.props.onButtonClick}>Random</button>
            </div>
        )
    }
}

export default Random
