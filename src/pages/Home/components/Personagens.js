import { useEffect, useState } from "react";
import { StyledPers } from "./StyledPers";
// import { useId } from "react-id-generator";


export default function Personagens({valor}){
    // const ta = useId(valor.length)
    const [atributos, setAtributos] = useState([])

    const setValues = e => {
        setAtributos({...atributos, [e.target.id]: e.target.value})
    }

    useEffect(() =>{
        // console.log('sepa')
        // console.log(valor.armadura)
        // console.log(valor[0])
        console.log(valor)
        // console.log(valor.length)

        // console.log('separa')
        // console.log(atributos)
    }, [valor])
    return(
        <StyledPers>
            {valor.map((e, id) => {
                // console.log(id)
                setAtributos({...atributos, e})
                return(
                    <div className="item" key={id}>
                        <span>Delete</span>
                        <h1>{e.nome}</h1>
                        
                        <div id="atributos">
                            <label htmlFor={"armadura"+ e.id}>Armadura:</label>
                            <input type="number" name="armadura2" id={"armadura"+ e.id} onChange={setValues} value={e.armadura} />
                            <label htmlFor={"vida"+ e.id}>Pontos de vida:</label>
                            <input type="number" name="vida2" id={"vida"+ e.id} onChange={setValues} value={e.vida} />
                            <label htmlFor={"deslocamento"+e.id}>Deslocamento:</label>
                            <input type="number" name="deslocamento2" id={"deslocamento"+e.id} onChange={setValues} value={e.deslocamento} />
                        </div>
                        <div id="adde">
                            <textarea name={"adicionais"+e.id} id={"adicionais"+e.id} cols="30" rows="10" onChange={setValues} value={e.adicionais}></textarea>
                        </div>
                        
                        <label htmlFor="dano" id="ldano">Vida/dano:</label>
                        <input type="number" name="dano" id="danolevado" />
                        <button>Aplicar dano</button>
                        <button>Aplicar vida</button>
                    </div>
                )
            })}



            <div className="item">
                <span>Delete</span>
                <h1>nome</h1>
                
                <div id="atributos">
                    <label htmlFor="armadura2">Armadura:</label>
                    <input type="number" name="armadura2" id="armadura2" />
                    <label htmlFor="vida2">Pontos de vida:</label>
                    <input type="number" name="vida2" id="vida2" />
                    <label htmlFor="deslocamento2">Deslocamento:</label>
                    <input type="number" name="deslocamento2" id="deslocamento2" />
                </div>
                <div id="adde">
                    <textarea name="adicionais" id="adicionais" cols="30" rows="10"></textarea>
                </div>
                
                <label htmlFor="dano" id="ldano">Vida/dano:</label>
                <input type="number" name="dano" id="danolevado" />
                <button>Aplicar dano</button>
                <button>Aplicar vida</button>
            </div>
            {/* ========================= */}

            <div className="item">
                <span>Delete</span>
                <h1>nome</h1>
                
                <div id="atributos">
                    <label htmlFor="armadura2">Armadura:</label>
                    <input type="number" name="armadura2" id="armadura2" />
                    <label htmlFor="vida2">Pontos de vida:</label>
                    <input type="number" name="vida2" id="vida2" />
                    <label htmlFor="deslocamento2">Deslocamento:</label>
                    <input type="number" name="deslocamento2" id="deslocamento2" />
                </div>
                <div id="adde">
                    <textarea name="adicionais" id="adicionais" cols="30" rows="10"></textarea>
                </div>
                
                <label htmlFor="dano" id="ldano">Vida/dano:</label>
                <input type="number" name="dano" id="danolevado" />
                <button>Aplicar dano</button>
                <button>Aplicar vida</button>
            </div>
            <div className="item">
                <span>Delete</span>
                <h1>nome</h1>
                
                <div id="atributos">
                    <label htmlFor="armadura2">Armadura:</label>
                    <input type="number" name="armadura2" id="armadura2" />
                    <label htmlFor="vida2">Pontos de vida:</label>
                    <input type="number" name="vida2" id="vida2" />
                    <label htmlFor="deslocamento2">Deslocamento:</label>
                    <input type="number" name="deslocamento2" id="deslocamento2" />
                </div>
                <div id="adde">
                    <textarea name="adicionais" id="adicionais" cols="30" rows="10"></textarea>
                </div>
                
                <label htmlFor="dano" id="ldano">Vida/dano:</label>
                <input type="number" name="dano" id="danolevado" />
                <button>Aplicar dano</button>
                <button>Aplicar vida</button>
            </div>
            
        </StyledPers>
    )
}