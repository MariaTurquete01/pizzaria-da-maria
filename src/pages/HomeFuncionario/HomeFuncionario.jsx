import CredentialUser from "../../components/CredentialUser"
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"


const HomeFuncionario = () => {

    return(

        <div className="container"> 
            <MenuFuncionario/>
            <CredentialUser title="Home Page Funcionário"/>
            
            <p>Home Page Funcionário</p>
        </div>
    )
}

export default HomeFuncionario