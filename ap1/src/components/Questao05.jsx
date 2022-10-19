import { useState, useEffect } from "react";
import axios from 'axios';


const Questao05 = ()=>{
    const [paises, setPaises] = useState([])
    const [param, setParam] = useState('americas')

    const baseUrl = 'https://restcountries.com/v2/region/'
    

    useEffect(
        ()=> {
            axios.get(baseUrl + param +'?fields=name,population')
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
        [param]
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
        return  'O mais populoso das Américas é: ' + pn + ' - ' + pp + ' habitantes'
        
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
        return  'O menos populoso da Asia é: ' + pn + ' - ' + pp + ' habitantes'
        
    }

    const america = ()=>{
        setParam('americas')
    }

    const asia = ()=> {
        setParam('asia')
    }

    const renderiza = ()=>{
        if(param === 'asia')
            return paisMenos()
        else
            return paisMais()
    }

    return(
        <div>
            <h3>
                {
                    renderiza()
                }
            </h3>
            <button className="btn btn-primary m-4" type="submit" onClick={america}>+ Americas</button>
            <button className="btn btn-primary m-4" type="submit" onClick={asia}>- Asia</button>
            
        </div>
    )
}

export default Questao05