// Importando o componente de formulário
import FormularioProduto from "../../components/FormularioProduto/FormularioProduto.jsx";

// Importando o componente do bootstrap
import Container from "react-bootstrap/Container";

const CadastrarProduto = () => {
  return (
    <div>
      <Container>
        <FormularioProduto page="cadastro" />
      </Container>
    </div>
  );
};

export default CadastrarProduto;