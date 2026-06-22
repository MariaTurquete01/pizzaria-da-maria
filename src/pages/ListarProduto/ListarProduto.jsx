import MenuFuncionario from '../MenuFuncionario'

const ListarProduto = () => {

    const arrayProdutos = [
        {
            id: 1,
            nome: "Pizza de Calabresa",
            precoVenda: 54.90,
            descricao: "Pizza de calabresa com cebola e azeitonas sem caroço"
        },        
    
            {
            id: 2,
            nome: "Pizza de Frango com Catupiry",
            precoVenda: 49.90,
            descricao: "Pizza de frango desfiado com Catupiry"
              
            },

            {
            id: 3,
            nome: "Pizza Portuguesa",
            precoVenda: 52.90,
            descricao: "Pizza com presunto, ovos, cebola e ervilha"
              
            },

            {
            id: 4,
            nome: "Pizza Mussarela",
            precoVenda: 44.90,
            descricao: "Pizza tradicional de Mussarela"
            
            },

            {
            id: 5,
            nome: "Pizza Qautro Queijos",
            precoVenda: 53.90,
            descricao: "Pizza com mistura de quatro queijos"       

            },

            {
            id: 6,
            nome: "Pizza Marguerita",
            precoVenda: 47.90,
            descricao: "Pizza de marguerita com tomate e manjericão"
        
            }
        ]

    return (
       
        <div className='container'>
                  <MenuFuncionario/>
        </div>
    )
}

export default ListarProduto