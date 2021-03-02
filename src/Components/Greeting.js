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
            <img src="pug2.png" />
            <h1 >" PET ME "</h1>
        </div>
    )
}

export default Greeting;