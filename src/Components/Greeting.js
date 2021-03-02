import React from 'react'
import './Greeting.css'
export const Greeting = ({home}) => {

    function handleClick (e){
        const greet = document.getElementById("greet");
        console.log(greet);
        greet.setAttribute("class" ,"display")
        home()
    }
    
    return (
        <div id = "greet"  onClick={handleClick} >
            <img src="https://cdn1.bbcode0.com/uploads/2021/3/2/7963221ee3bd525dbbe73fdaf6dbbbff-full.png" border="0"/>
            <h1 >" PET ME "</h1>
        </div>
    )
}

export default Greeting;