import React from "react";

function Calculadora ({op,x,y}){
    function soma() {
        return x + y
    }

    function subtracao() {
        return x - y
    }

    function multiplicao() {
        return x * y
    }

    function divisao() {
        return x / y
    }

    if(op === "SOMA")
        return (
            <div>
                A soma é {soma()}
            </div>
        )
    else if(op === "SUB")
        return (
            <div>
                A subtração é {subtracao()}
            </div>
        )
    else if(op === "MULT")
        return (
            <div>
                A multiplicacao é {multiplicao()}
            </div>
        )
    else
        return(
            <div>
                A divisão é {divisao()}
            </div>
        )
    
    
}

export default Calculadora

