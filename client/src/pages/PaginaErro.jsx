import Button from "react-bootstrap/Button";
//Importação do navigate pra transitar entre páginas
import { useNavigate } from "react-router-dom";
const PaginaErro = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center d-flex min-vh-100 flex-column justify-content-center align-items-center">
      <h2>Essa página no existe</h2>
      <Button
        variant="warning"
        onClick={() => {git
          navigate("/home");
        }}
      >
        Voltar para home{" "}
      </Button>
    </div>
  );
};

export default PaginaErro;
