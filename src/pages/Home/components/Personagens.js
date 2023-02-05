import { useEffect } from "react";
import { StyledPers } from "./StyledPers";


export default function Personagens({valor}){

    useEffect(() =>{
        // console.log('sepa')
        // console.log(valor.armadura)
        // console.log(valor[0])
        console.log(valor)
    }, [valor])
    let i = 0
    return(
        <StyledPers>
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





            {valor.map((e) => {
                console.log('saa')
                console.log(e)
                i++
                return(
                    <div key={i}>
                        <p>{e.nome}</p>
                    </div>
                )
            })}
            
        </StyledPers>
    )
}