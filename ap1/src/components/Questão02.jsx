import React from "react";
import { useState } from "react";

const Questao02 = ()=> {
    const [res, setRes] = useState(0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)   
    
    function soma() {
        setRes( parseInt(x) + parseInt(y))
    }

    function subtracao() {
        setRes( parseInt(x) - parseInt(y))
    }

    function multiplicacao() {
        setRes( parseInt(x) * parseInt(y))    
    }

    function divisao() {
        setRes( parseFloat(x) / parseFloat(y))
    }
    
    const contab = ()=> {
        return (
            <h3>Resultado: {res} </h3>
        )
    }

    return (
        <div className="m-4">
            <form className="form-group" action="">
                <div className="row">
                    <div className="col">
                        <input type="number" 
                                className="form-control"
                                placeholder="Número 1"
                                onChange={
                                    (event)=>{
                                        setX(event.target.valueAsNumber)
                                    }
                                }
                        />
                    </div>
                    <div className="col">
                        <input type="number" 
                                className="form-control"
                                placeholder="Número 2"
                                onChange={
                                    (event)=>{
                                        setY(event.target.valueAsNumber)
                                    }
                                }
                        />
                    </div>
                </div>                
            </form>

            <button className="btn btn-primary m-2" type="submit" onClick={soma}> + </button>
            <button className="btn btn-primary m-2" type="submit" onClick={subtracao}> - </button>
            <button className="btn btn-primary m-2" type="submit" onClick={multiplicacao}> * </button>
            <button className="btn btn-primary m-2" type="submit" onClick={divisao}> / </button>
            <div>
                {
                    contab()
                }
            </div>
        
        </div>
        
    )
}

export default Questao02