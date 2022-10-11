import React from "react";

const Arena = ({children, titulo})=> {
    return(
        <div>
            <h2>{titulo}</h2>
            {
                React.Children.map(
                    children,
                    (element)=> React.cloneElement(element,{titulo})
                )
            }
        </div>
    )
}

export default Arena