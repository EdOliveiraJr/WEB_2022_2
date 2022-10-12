import { useState, useEffect } from "react";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";


const Questao05 = ()=>{
    const [paises, setPaises] = useState([])
    const [searchParams, setSerchParams] = useSearchParams()
    const africa = searchParams.get('africa')
    

    useEffect(
        ()=> {
            axios.get('https://restcountries.com/v2/region/'+africa+'?fields=name,population')
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
        [africa]
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
        return  pn + ' - ' + pp
        
    }
    
    const paisMenos = ()=> {
        let pp = 100000000000
        let pn = ''
        paises.forEach(element => {
            if(element.population < pp){
                pp = element.population
                pn = element.name
            }
        });
        return   pn + ' - ' + pp
        
    }

    const america =()=>{
        setSerchParams('america')
    }

    const asia = ()=> {
        setSerchParams('asia')
    }

    return(
        <div>
            <h3>
                {
                    paisMais()
                }
            </h3>
            <h3>
                {
                    paisMenos()
                }
            </h3>
            <button className="btn btn-primary m-4" type="submit" onClick={america}>+ America</button>
            <button className="btn btn-primary m-4" type="submit" onClick={asia}>- Asia</button>
            
        </div>
    )
}

   

export default Questao05