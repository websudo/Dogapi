import React, { Component } from 'react'
import './Home.css'
import Image from './Image'

export class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            img : ""
        }
    }


    componentDidMount(){
        if(this.props.homedisp.display === true){
            const home = document.querySelectorAll("#home");
            home[0].setAttribute("class","home")
        }

        fetch("https://dog.ceo/api/breeds/image/random/1")
        .then( res => res.json())
        .then( (data) => {
            console.log(data.message)
            this.setState({ img : data.message})
        })
    }

    


    render() {
    
        return (
            <div id="home" className="home-none">
                <h1>HOME</h1>
                {this.state.img && <Image img ={this.state.img}/>}
            </div>
        )
    }
}

export default Home
