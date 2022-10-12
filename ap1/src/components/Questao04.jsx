import { useState, useEffect } from "react";
import axios from 'axios';


const Questao04 = ()=>{
    const [paises, setPaises] = useState([])

    useEffect(
        ()=> {
            axios.get('https://restcountries.com/v2/region/africa?fields=name,population')
            .then(
                (response)=>{
                    setPaises(response.data)
                    let maisPopuloso = 0
                    let pais = ''
                    for (const element in response.data) {
                        if(element.population > maisPopuloso) {
                                maisPopuloso = element.population
                                pais = element.name
                        }
                    }
                    return pais
                }
            )
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
        },
        []
    )

    const listPaises = ()=> {
        
     }


    return(
        <div>
            {
                listPaises()
            }
            
        </div>
    )
}

   

export default Questao04