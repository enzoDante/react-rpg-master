import { useEffect, useState } from "react";
import { useId } from "react-id-generator";
import nextId from "react-id-generator"; //lib/nextId
import Personagens from "./components/Personagens";
import { Styledindex } from "./Styledindex";


export default function Home(){
    const [ativa, setAtiva] = useState(false)
    // const [id, setId] = useState(1)
    const [valores, setValores] = useState({
        id: '0',
        nome: "",
        armadura: 0,
        vida: 0,
        deslocamento: 0,
        adicionais: ""
    })
    const [vals, setVals] = useState([])
    // const nome = 'id'
    const setValues = e => {
        // setValores({...valores, [nome]: id})
        setValores({...valores, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        // console.log(ativa)
        // console.log(valores)
        // console.log(vals)
        
    }, [])
    // let id = 0
    // const idsl = useId()
    async function adicionarDado(e){
        e.preventDefault()
        // const nome = "id"
        // setId(id+1)
        // const testid = nextId()
        // setValores({...valores, [nome]: testid})
        // console.log(testid)

        setVals([...vals, valores])
        setValores({
            id: '0',
            nome: "",
            armadura: 0,
            vida: 0,
            deslocamento: 0,
            adicionais: ""
        })
    }

    return(
        <Styledindex>
            <form id="criar">
                <div id="modalaparece" className={ativa ? "virax" : "volta"}>
                    <span  onClick={() => {
                        setAtiva(status => !status)
                    }}>+</span>
                </div>

                <div id="form" className={"form "+(ativa ? "aparece" : "desaparece")}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" onChange={setValues} id="nome" value={valores.nome} />
                    <div id="atributos">
                        <label htmlFor="id">Id:</label>
                        <input type="number" name="id" id="id" onChange={setValues} value={valores.id} />
                        <label htmlFor="armadura">Armadura:</label>
                        <input type="number" name="armadura" onChange={setValues} id="armadura" value={valores.armadura}/>
                        <label htmlFor="vida">Pontos de vida:</label>
                        <input type="number" name="vida" onChange={setValues} id="vida" value={valores.vida} />
                        <label htmlFor="deslocamento">Deslocamento:</label>
                        <input type="number" name="deslocamento" onChange={setValues} id="deslocamento" value={valores.deslocamento} />
                    </div>
                    <div id="adde">
                        <label htmlFor="adicionais" id="labadd">Adicionais:</label>
                        <textarea name="adicionais" onChange={setValues} value={valores.adicionais} id="adicionais" cols="30" rows="10"></textarea>
                    </div>
                    <button onClick={adicionarDado}>Adicionar personagem</button>
                </div>
                

            </form>
            <Personagens valor={vals} />
        </Styledindex>
    )    
}