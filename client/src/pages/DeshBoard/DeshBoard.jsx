import { useListaProdutos } from "../../hooks/UseProdutos";
import "./DeshBoard.css";

const DeshBoard = () => {
  const produtos = useListaProdutos();

  const totalEntradas = produtos.reduce((acc, p) => acc + (p.entrada || 0), 0);
  const totalSaidas = produtos.reduce((acc, p) => acc + (p.saida || 0), 0);
  const baixoEstoque = produtos.filter(p => (p.estoque || 0) <= 5).length;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>📊 Painel de Controle</h2>
      </header>

      {/* CARDS */}
      <div className="cards">
        <div className="card card-entrada">
          <h3>Entradas</h3>
          <p>{totalEntradas}</p>
        </div>

        <div className="card card-saida">
          <h3>Saídas</h3>
          <p>{totalSaidas}</p>
        </div>

        <div className="card card-alert">
          <h3>Baixo Estoque</h3>
          <p>{baixoEstoque}</p>
        </div>
      </div>

      {/* TABELA */}
      <div className="table-container">
        <h3>Produtos</h3>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Estoque</th>
              <th>Entrada</th>
              <th>Saída</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => (
              <tr
                key={p.id || p.nome} 
                className={(p.estoque || 0) <= 5 ? "baixo-estoque" : ""}
              >
                <td>{p.nome}</td>
                <td>{p.estoque}</td>
                <td>{p.entrada}</td>
                <td>{p.saida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeshBoard;
