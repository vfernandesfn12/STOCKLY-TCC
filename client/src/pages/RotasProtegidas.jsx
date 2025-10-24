import Container from "react-bootstrap/Container";
import { Outlet, Navigate } from "react-router-dom";

// Importar as informações do contexto autenticação de usuário
import { AuthContext } from '../contexts/UserContext.jsx'
import { useContext } from "react";
import BarraNavegacao from "../components/BarraNavegacao/BarraNavegacao.jsx";

const RotasProtegidas = () => {
  // //Variável para saber se está logadoou não
  // const estaLogado = true;
  // //Senao tiver joga para tela de login
  // if (!estaLogado) {
  // Pega a variável de usuario nome pra saber se tem algum logado
  const { usuarioNome } = useContext(AuthContext)
  
  if ( usuarioNome === "Visitante"){
    return <Navigate to="/login" />;
  }
  return (
    <div className="App d-flex">
      {/* Barra de navegação fixa na lateral */}
      <div className="positon-fixed top-0 start-0 min-vh-100 bg-danger">
        <BarraNavegacao />
      </div>
      {/* Conteúdo principal dependendo de qual rota está */}
      <div
        className="d-flex flex-column min-vh-100 flex-grow-1 p-2 justify-content-center"
        style={{ marginLeft: "350px" }}
      >
        <Container fluid>
          <h1>Conteúdo Principal</h1>
        </Container>
      </div>
    </div>
  );
};

export default RotasProtegidas
