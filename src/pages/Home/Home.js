import { useEffect, useState } from "react";
import { Styledindex } from "./Styledindex";


export default function Home(){
    const [ativa, setAtiva] = useState(false)

    useEffect(() => {
        // console.log(ativa)
    }, [ativa])


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
                        <input type="number" name="" id="armadura" />
                        <label htmlFor="vida">Pontos de vida:</label>
                        <input type="number" name="" id="vida" />
                        <label htmlFor="deslocamento">Deslocamento:</label>
                        <input type="number" name="" id="deslocamento" />
                    </div>
                    <div id="adde">
                        <label htmlFor="adicionais" id="labadd">Adicionais:</label>
                        <textarea name="" id="adicionais" cols="30" rows="10"></textarea>
                    </div>
                    <button>Adicionar personagem</button>
                </div>
                

            </form>
            <div id="elementos">

            </div>
        </Styledindex>
    )    
}