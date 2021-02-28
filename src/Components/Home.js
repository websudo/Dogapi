import React, { Component } from 'react'
import './Home.css'
import Image from './Image'
import Random from './Random'
import Input from './Input'

export class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            img : "",
            breed : "",
            breedlist : [],
            match : "",
            found : false
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
           
            let str = data.message[0].split('/')[4];
            this.setState({ img : data.message, breed : str})
        })

        fetch("https://dog.ceo/api/breeds/list")
        .then( res => res.json())
        .then( (data) => {
            data.message.map((item) => {
                
                let breeditem = this.state.breedlist.concat(item);
                this.setState({ breedlist : breeditem})
            })
        })
       
    }

    onButtonClick = () =>{
        console.log("Button Clicked");
        fetch("https://dog.ceo/api/breeds/image/random/1")
        .then( res => res.json())
        .then( (data) => {
            console.log(data.message)
            let str = data.message[0].split('/')[4];
            this.setState({ img : data.message, breed : str})
        })
        
    }

    onSubmit = (e) =>{
        e.preventDefault();
        let breed = document.querySelector("#breed-input").value
        this.setState({found : false}, ()=>{
            
            this.state.breedlist.map((item) =>{
               
                if(item.match(breed) !== null && this.state.found ===false ){
                    let matcharr = item 
                   
                    this.setState({found : true} , () => {
                        this.setState({match : matcharr}, () => { 
                           
                            fetch(`https://dog.ceo/api/breed/${this.state.match}/images/random`)
                            .then( res => res.json())
                            .then( (data) => {
                                
                                let str = data.message[0].split('/')[4];
                                this.setState({ img : data.message, breed : str , found : true} )
                                document.querySelector("#error").innerHTML = ""
                            })
                           
                            })
                    })
                
                }
    
            })
            if(this.state.found === false){
                document.querySelector("#error").innerHTML = "Result not found"
            }
        })
        /*this.state.breedlist.map((item) =>{
            if(item.match(breed) !== null && !this.state.found){
                let matcharr = item 
                console.log(matcharr)
                this.setState({match : matcharr}, () => { 
                    fetch(`https://dog.ceo/api/breed/${this.state.match}/images/random`)
                    .then( res => res.json())
                    .then( (data) => {
                        console.log(data.message)
                        console.log(this.state.match)
                        let str = data.message[0].split('/')[4];
                        this.setState({ img : data.message, breed : str , found : true})
                        document.querySelector("#error").innerHTML = ""
                    })
                    console.log(this.state.match)})
            }

            if(this.state.found === false){
                document.querySelector("#error").innerHTML = "Result not found"
            }

        })*/
        
        
    }

    render() {
    
        return (
            <div id="home" className="home-none">
                <Input onSubmit={this.onSubmit}/><p id="error"></p>
                <h1>{this.state.breed}</h1>
                {this.state.img && <Image img ={this.state.img}/>}
                <Random onButtonClick = {this.onButtonClick}/>
            </div>
        )
    }
}

export default Home
