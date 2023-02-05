import { useEffect } from "react";
import { StyledPers } from "./StyledPers";


export default function Personagens({valor}){

    useEffect(() =>{
        // console.log('sepa')
        // console.log(valor.armadura)
        // console.log(valor[0])
    }, [valor])
    let i = 0
    return(
        <StyledPers>
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
            <div>

            </div>
        </StyledPers>
    )
}