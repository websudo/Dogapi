import React, { Component } from 'react'

export class Input extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <label for="breed-input">Breed : </label>
                    <input type="text" id="breed-input"></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default Input
