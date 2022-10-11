import React from "react";

const Questao01A = ({name, lastName, curso})=> {
    return (
        <div className="m-4">
            Nome: <strong> {name} </strong>  <br /> 
            Sobrenome: <strong>{lastName}</strong> <br /> 
            Curso: <strong>{curso}</strong> <br />
        </div>
    )
}
export default Questao01A