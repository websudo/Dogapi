import React, { Component } from 'react'
import './Input.css'

export class Input extends Component {
    /*<form onSubmit={this.props.onSubmit}>
                    <label htmlFor="breed-input">Breed : </label>
                    <input type="text" id="breed-input"></input>
                    <input type="submit"></input>
                </form>*/
    render() {
        return (
            <div>
                
                <div class="wrapper">
                <form onSubmit={this.props.onSubmit}>
                    <div class="search-input" onSubmit={this.props.onSubmit}>
                        <a href="" target="_blank" hidden></a>
                        <input type="text" id="breed-input" placeholder="Type breed to search.."></input>
                        
                        <div class="icon" onClick={this.props.onSubmit} type="submit"><i class="fas fa-search"></i></div>
                    </div>
                    </form>
                    </div>
            </div>
        )
    }
}

export default Input
