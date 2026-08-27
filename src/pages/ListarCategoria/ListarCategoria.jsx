import CredentialUser from "../../components/CredentialUser";
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";

const ListarCategoria = () => {

  return(
    <div className="conatiner">
      <MenuFuncionario/>
      <CredentialUser title="Listar de Categorias"/>
      <p>Listar Categorias do Produto</p>
    </div>
  )
}

export default ListarCategoria;