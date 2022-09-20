import React from 'react'

/*const Grupo = ({titulo})=>{
    return(
        <div>
            <h1>{titulo}</h1>
            <Heroi nome='Capitão América' />
            <Heroi nome='Hulk' />
            <Heroi nome='Viúva Negra' />
            <Heroi nome='Homem de Ferro' />
        </div>
    )
}*/

const Grupo = ({children, titulo})=>{
    return(
        <div>
            <h1>{titulo}</h1>
            {
                React.Children.map(
                    children, 
                    (elemento)=> React.cloneElement(elemento,{titulo})
                )
                
            }
        </div>
    )
}
export default Grupo