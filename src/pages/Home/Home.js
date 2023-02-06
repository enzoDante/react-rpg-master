import axios from "axios";
// import Axios from "axios";
import { useEffect, useState } from "react";
// import { useId } from "react-id-generator";
// import nextId from "react-id-generator"; //lib/nextId
import Personagens from "./components/Personagens";
import { Styledindex } from "./Styledindex";


export default function Home(){
    const [ativa, setAtiva] = useState(false)
    const [mudar, setMudar] = useState(false)
    // const [id, setId] = useState(1)
    const [valores, setValores] = useState({
        id: '0',
        nome: "",
        armadura: 0,
        vida: 0,
        deslocamento: 0,
        adicionais: ""
    })
    // const [vals, setVals] = useState([])
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
    

    async function adicionarDado(e){
        e.preventDefault()
        const headers = {
            'Content-Type': 'application/json'
        }

        const data = new FormData()
        data.append('nome', valores.nome)
        data.append('armadura', valores.armadura)
        data.append('vida', valores.vida)
        data.append('deslocamento', valores.deslocamento)
        data.append('adicionais', valores.adicionais)

        axios.post("http://localhost/praticas-php/BACKEND-outros/react-rpg-master/cadastro.php", data, {
            headers: headers //ou headers: {'Content-Type': 'application/json'}
        }).then((e) => {
            console.log('teste separa')
            console.log(e)
        })
        //======================================================
        // Axios({
        //     method: "POST",
        //     url: "http://localhost/praticas-php/BACKEND-outros/react-rpg-master/cadastro.php", 
        //     headers: { 'Content-Type': 'application/json' },
        //     data: {
        //         valores
        //     }
        // }).then((e) => {
        //     console.log('teste separa')
        //     console.log(e)
        // })
        //======================================================
        // setVals([...vals, valores])
        setValores({
            id: '0',
            nome: "",
            armadura: 0,
            vida: 0,
            deslocamento: 0,
            adicionais: ""
        })
        setMudar(status => !status)
    }

    return(
        <Styledindex>
            <form id="criar" method="post">
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
            <Personagens valo={mudar} /> {/* valor={vals} */}
        </Styledindex>
    )    
}