import React from "react";

const Filho = ({nomePai,callbackPai,funcaoSoma})=> {
    const acaoBotao =()=>{
        console.log(funcaoSoma(3,2))
        callbackPai('Filho da Silva')
    }


    return(
        <div>
            <button onClick={acaoBotao}>
                Oi {nomePai}
            </button>
        </div>
    )
}

export default Filho