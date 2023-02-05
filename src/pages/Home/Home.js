import { useEffect, useState } from "react";
import { Styledindex } from "./Styledindex";


export default function Home(){
    const [ativa, setAtiva] = useState(false)
    const [valores, setValores] = useState({
        armadura: 0,
        vida: 0,
        deslocamento: 0,
        adicionais: ""
    })

    const setValues = e => {
        setValores({...valores, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        // console.log(ativa)
        console.log(valores)
    }, [valores])

    function testar(e){
        e.preventDefault()
        console.log('oiiee')
    }

    return(
        <Styledindex>
            <form id="criar">
                <div id="modalaparece" className={ativa ? "virax" : "volta"}>
                    <span  onClick={(e) => {
                        setAtiva(status => !status)
                    }}>+</span>
                </div>

                <div id="form" className={"form "+(ativa ? "aparece" : "desaparece")}>
                    <div id="atributos">
                        <label htmlFor="armadura">Armadura:</label>
                        <input type="number" name="armadura" onChange={setValues} id="armadura" />
                        <label htmlFor="vida">Pontos de vida:</label>
                        <input type="number" name="vida" onChange={setValues} id="vida" />
                        <label htmlFor="deslocamento">Deslocamento:</label>
                        <input type="number" name="deslocamento" onChange={setValues} id="deslocamento" />
                    </div>
                    <div id="adde">
                        <label htmlFor="adicionais" id="labadd">Adicionais:</label>
                        <textarea name="adicionais" onChange={setValues} id="adicionais" cols="30" rows="10"></textarea>
                    </div>
                    <button onClick={testar}>Adicionar personagem</button>
                </div>
                

            </form>
            <div id="elementos">

            </div>
        </Styledindex>
    )    
}