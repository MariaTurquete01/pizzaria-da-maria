import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route
}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"

//Browser Router : Utilize com a tag <a> com href -> sempre recarrega toda página 
//HashRouter: Utilize com a tag <link> do react-router-dom ->carrega apenas as partes necessárias d página, RECOMENDADO 

const AppRoutes = () => {

    return (
        <HashRouter>
                 <Routes>
                            <Route
                             path="/"
                             element = {<HomeFuncionario/>}
                         />
                         <Route
                             path="/"
                             element = {<HomeFuncionario/>}
                         />
                         <Route
                             path="/produtos"
                             element = {<ListarProduto/>}
                         />
                 </Routes>
        </HashRouter>
    )
}

export default AppRoutes 