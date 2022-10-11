import React from "react";

const Hero = ({name, image})=> {
    
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} className="img-thumbnail" alt="" width={"300px"}/>
        </div>
    )
}

export default Hero