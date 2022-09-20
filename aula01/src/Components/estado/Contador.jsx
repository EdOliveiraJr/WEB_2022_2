import React from "react";
import {useState} from "react";

const Contador = ()=> {
    const [contador,setContador] = useState(0)
    const [sena,setSena] =useState(false)
    // let contador = 0

    const contar = ()=> {
        // contador++
        setContador(contador + 1)
    }

    const modificarSena = ()=> {
        setSena(!sena)
    }

    const renderizarSena = ()=> {
        if(sena){
            return(
                <div>
                    <br />
                    <img src="https://avatars.githubusercontent.com/u/4747652?v=4" alt="" />

                </div>
                
            )
        }
        return null
    }

    return(
        <div>
            <h2> Contador {contador}</h2>
            <button onClick={contar}>Acrescentar</button>
            <button onClick={modificarSena}>Sena</button>
            {
                renderizarSena()
            }
        </div>
    )
}

export default Contador
