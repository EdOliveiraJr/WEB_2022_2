import { useState, useEffect } from "react";
import axios from 'axios';


const Questao04 = ()=>{
    const [paises, setPaises] = useState([])
    //let pais = ''

    useEffect(
        ()=> {
            axios.get('https://restcountries.com/v2/region/africa?fields=name,population')
            .then(
                (response)=>{
                    setPaises(response.data)
                    console.log(response)
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

    const paisMais = ()=> {
        let pp = 0
        let pn = ''
        paises.forEach(element => {
            if(element.population > pp){
                pp = element.population
                pn = element.name
            }
        });
        return 'Pais mais populoso da Africa: ' + pn + ' - ' + pp + ' habitantes'
        
    }
    

    return(
        <div>
            <h3>
                {
                    paisMais()
                }
            </h3>
            
        </div>
    )
}

   

export default Questao04