import React from "react";

const Questao01B = ()=> {
let disciplinas = ['Qualidade de Software','Desenvolviemento de Software para Web', 'Arquitetura de Software']
    return disciplinas.map(
        (element, index)=> (
            <p>Disciplina {index + 1}: <strong>{element}</strong> </p>
        )
    )
}
export default Questao01B