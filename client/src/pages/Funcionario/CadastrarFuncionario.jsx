// importando components do bootstrap
import Container from "react-bootstrap/Container";

// Importando o componente de formulário
import FormularioFuncionario from "../../components/FormularioFuncionario/FormularioFuncionario";

const CadastrarFuncionario = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "93vh" }}>
      <Container>
        <h1>Cadastrar Funcionário</h1>
        <FormularioFuncionario page="cadastro" />
      </Container>
    </div>
  );
};

export default CadastrarFuncionario;
