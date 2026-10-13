import React from "react";
import Button from "../../ui/Button/Button.jsx";
import "./hero.css"

function Hero(){
    return (
        <div className="hero">
            <h1>Hey there. This is Apurbo!</h1>
            <p>Wanna know more? Click me:</p>
            <Button /> 
        </div>
    );
}

export default Hero;