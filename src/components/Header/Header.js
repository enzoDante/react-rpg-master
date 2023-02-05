import { StyledHeader } from "../Styles/StyledHeader";

export default function Headers(){

    return(
        <StyledHeader>
            <Logo/>
            <RotasLinks/>
            <div></div>
        </StyledHeader>
    )
}

function Logo(){
    return(
        <div className="logo">
            <img src="favicon.ico" alt="" />
        </div>
    )
}

function RotasLinks(){
    return(
        <div className="links">
            <h2>Ferramenta auxiliar para mestres</h2>
        </div>
    )
}