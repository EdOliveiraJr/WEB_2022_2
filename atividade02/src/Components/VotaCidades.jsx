import React from "react";
import { useState } from "react";

const VotaCidades = ()=> {
    const [quixada, setQxd] = useState(0)
    const [limoeiro, setLim] = useState(0)
    const [juazeiro, setJN] = useState(0)
    const [apurado, setAprd] = useState(false)

    const apurar = ()=>{
        setAprd(!apurado)
    }
    
    const contQxd = ()=> {
        return setQxd(quixada + 1)
    }

    const contLim = ()=> {
        return setLim(limoeiro + 1)
    }

    const contJN = ()=> {
        return setJN(juazeiro + 1)
    }

    const contab = ()=> {
        if(apurado){
            if(quixada > limoeiro && quixada > juazeiro)
                return(
                    <h1>Quixadá com {quixada} votos</h1>
                )
            else if(limoeiro > juazeiro)
                return (
                    <h1>Limoeiro do Norte com {limoeiro} votos</h1>
                )
            else
                return (
                    
                    <h1>Juazeiro do Norte com {juazeiro} votos</h1>
                    
                )
        }   
    }

    const reiniciar = ()=>{
        setQxd(0)
        setLim(0)
        setJN(0)
        setAprd(apurado=false)
    }

    return (
        <div>
            <div>
                <h2>Quixadá: {quixada}</h2>
                <h2>Limoreiro do Norte: {limoeiro}</h2>
                <h2>Juazeiro do Norte: {juazeiro}</h2>
            </div>
            <div>
                <div>
                    <button type="button" class="btn btn-primary" onClick={contQxd}>Votar em Quixadá</button>
                </div>
                <div>
                    <button onClick={contLim}>Votar em Limoeiro do Norte</button>
                </div>
                <div>
                    <button onClick={contJN}>Votar em Juazeiro do Norte</button>
                </div>
                <div>
                    <button onClick={apurar}>Apurar</button>
                </div>
                <div>
                    <button onClick={reiniciar}>Reiniciar</button>
                </div>
            </div>
            <div>
                {
                    contab()        
                }
            </div>
        </div>
    )


}

export default VotaCidades