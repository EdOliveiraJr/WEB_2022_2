import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

const Questao03 = ()=> {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    

    useEffect(
        ()=>{
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset='+ offset)
            .then(
                (response)=>{
                    setPokemons(response.data.results)
                    console.log(response)
                }
            )
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
        }
        ,
        [offset]
    )

    const listPokemons = ()=> {
        return pokemons.map(
            (element)=>{
                return(
                    <p>{element.name}</p>
                )
            }
        )
    }

    const proximo = ()=> {
        setOffset(offset+10)
    }


    return (
        <div>
            <div>
                {
                    listPokemons()
                }
            </div>
            <div>
                <button className="btn btn-primary" type="submit" onClick={proximo}>Próximo</button>
            </div>
            
            
        </div>
        
    )

}

export default Questao03