import React from "react";

const Questao01 = ({children, titulo})=> {
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

export default Questao01 