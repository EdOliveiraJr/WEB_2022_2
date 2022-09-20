import React from "react";

function IMC({peso, altura}){

    function calc() {
        return peso/(altura*altura)
    }

    const imc = calc()

    function estado () {
        if(imc < 17)
            return "Muito abaixo do peso"
        else if(imc >= 17 && imc < 18.5)
            return "Abaixo do peso"
        else if(imc >= 18.5 && imc < 25)
            return "Peso Normal"
        else if(imc >= 25 && imc < 30)
            return "Acima do peso"
        else if(imc >= 30 && imc < 35)
            return "Obesidade I"
        else if(imc >= 35 && imc < 40)
            return "Obesidade II (Severa)"
        else
            return "Obesidade III(Morbida)"
        
    
    }

    return(
        <div>
            <div>
                Para o peso {peso} e altura {altura}
            </div>
            <div>
                O se IMC é {imc.toFixed(2)} e seu estado é de {estado()}
            </div>
        </div>

    )
}

export default IMC