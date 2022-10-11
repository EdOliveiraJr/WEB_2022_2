import React from "react";
import { useState } from "react";

const Questao02 = ()=> {
    const [res, setRes] = useState(0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)   
    
    function soma() {
        setRes(x + y)
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
                        <label htmlFor="">Número 1</label>
                        <input type="number" 
                                className="form-control"
                                onChange={
                                    (event)=>{
                                        setX(event.target.valueAsNumber)
                                    }
                                }
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="">Número 2</label>
                        <input type="number" 
                                className="form-control" 
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
            <button className="btn btn-primary m-2" type="submit"> - </button>
            <button className="btn btn-primary m-2" type="submit"> * </button>
            <button className="btn btn-primary m-2" type="submit"> / </button>
            <div>
                {
                    contab()
                }
            </div>
        
        </div>
        
    )
}

export default Questao02