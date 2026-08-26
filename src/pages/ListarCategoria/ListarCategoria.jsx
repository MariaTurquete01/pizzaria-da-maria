import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";

const ListarCategoria = () => {
  const arrayProdutos = [
    {
      id: 1,
      nome: "Pizza de Calabresa",
      categoria: "Tradicional",
      precoVenda: 54.9,
    },
    {
      id: 2,
      nome: "Pizza de Frango com Catupiry",
      categoria: "Especial",
      precoVenda: 49.9,
    },
    {
      id: 3,
      nome: "Pizza Portuguesa",
      categoria: "Tradicional",
      precoVenda: 52.9,
    },
    {
      id: 4,
      nome: "Pizza Mussarela",
      categoria: "Tradicional",
      precoVenda: 44.9,
    },
    {
      id: 5,
      nome: "Pizza Quatro Queijos",
      categoria: "Especial",
      precoVenda: 53.9,
    },
    {
      id: 6,
      nome: "Pizza Marguerita",
      categoria: "Tradicional",
      precoVenda: 47.9,
    },
    {
      id: 7,
      nome: "Chocolate com Morango",
      categoria: "Doce",
      precoVenda: 69.9,
    },
  ];

  return (
    <div className="container">
      <MenuFuncionario />

      <h3 className="mt-3 mb-3">Lista de Categoria do Produto</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-success">
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            {arrayProdutos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>

                <td>{produto.categoria}</td>

                <td>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(produto.precoVenda)}
                </td>

                <td className="text-center">
                  <button className="btn btn-sm btn-primary me-2">
                    <i className="fas fa-pencil-alt"></i>
                  </button>

                  <button className="btn btn-sm btn-danger">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarCategoria;