import React from "react";
import {useState} from "react";


const VotaCidades = ()=>{
    const [quixada, setQxd] = useState(0)
    const [limoeiroNort, setLM] = useState(0)
    const [crateus, setCrts ] = useState(0)

    const contaQxd = ()=> {
        setQxd(quixada + 1)
    }

    const contaLM = ()=> {
        setLM(limoeiroNort + 1)
    }

    const contaCrts = ()=> {
        setCrts(crateus + 1)
    }

    // const apurar = ()=> {
    //     if (quixada > limoeiroNort && quixada > crateus)
    
    // }

    return (
        <div>
            <div>
                <h2>Quixada: {quixada}</h2>
                <h2>Limoreiro do Norte: {limoeiroNort}</h2>
                <h2>Crateus: {crateus}</h2>
            </div>
            <div>
                <button onClick={contaQxd}>Votar Quixada</button>
                <button onClick={contaLM}>Votar Limoeiro do Norte</button>
                <button onClick={contaCrts}>Votar Crateus</button>
                <button>Apurar</button>
            </div>
        </div>
    )
}

export default VotaCidades