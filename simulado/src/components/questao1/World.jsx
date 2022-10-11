import React from "react";

const World = ({titulo, children})=>{
    return(
        <div>
            <h1>{titulo}</h1>
        {
            React.Children.map(
                children,
                (element)=> React.cloneElement(element)
            )
        }
        </div>
    )
}

export default World