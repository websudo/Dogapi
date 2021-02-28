import React, { Component } from 'react'

export class Image extends Component {
    render() {
        console.log(this.props.img)
        return (
            <div>
                { <img src={this.props.img} alt="no picture" height="500px" ></img> || <h1>Loading</h1>}
            </div>
        )
    }
}

export default Image
