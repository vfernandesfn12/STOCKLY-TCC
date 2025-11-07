import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext.jsx";

// Importar todos os ícones
import { BsBoxes } from "react-icons/bs";
import { LiaAtomSolid } from "react-icons/lia";
import { HiUserGroup } from "react-icons/hi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { FaBoxesStacked } from "react-icons/fa6";
import { HiMiniDocumentText } from "react-icons/hi2";
import { RiHome9Fill } from "react-icons/ri";

// Import CSS
import styles from "./BarraNavegacao.module.css";

const BarraNavegacao = () => {
  const { usuarioNome, logout } = useContext(AuthContext);
  const idAtual = localStorage.getItem("id");
  const imagemAtual = localStorage.getItem("imagemPerfil");
  const semImagem = "https://cdn-icons-png.flaticon.com/512/17/17004.png";

  return (
    <div>
      {/* BARRA SUPERIOR */}
      <Navbar bg="light" data-bs-theme="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <LiaAtomSolid className="fs-4" />
            <span className="ms-2">STOCKLY</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className={`me-auto ${styles.nav_link_spacing}`}></Nav>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">
                <RiHome9Fill className="me-1" />
                Home
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/relatorios">
                <HiMiniDocumentText className="me-1" />
                Relatórios
              </Nav.Link>

              {/* Dropdown Produtos */}
              <NavDropdown title={<><FaBoxesStacked className="me-1" />Produtos</>} id="produtos-dropdown">
                <NavDropdown.Item as={NavLink} to="/produtos">
                  Listar
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/produtos/cadastrar">
                  Adicionar
                </NavDropdown.Item>
              </NavDropdown>

              {/* Dropdown Clientes */}
              <NavDropdown title={<><FaHandHoldingUsd className="me-1" />Clientes</>} id="clientes-dropdown">
                <NavDropdown.Item as={NavLink} to="/clientes">
                  Listar
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/clientes/cadastrar">
                  Adicionar
                </NavDropdown.Item>
              </NavDropdown>

              {/* Dropdown Funcionários */}
              <NavDropdown title={<><HiUserGroup className="me-1" />Funcionários</>} id="funcionarios-dropdown">
                <NavDropdown.Item as={NavLink} to="/funcionarios">
                  Listar
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/funcionarios/cadastrar">
                  Adicionar
                </NavDropdown.Item>
              </NavDropdown>

              {/* Dropdown Pedidos */}
              <NavDropdown title={<><HiMiniClipboardDocumentList className="me-1" />Pedidos</>} id="pedidos-dropdown">
                <NavDropdown.Item as={NavLink} to="/pedidos">
                  Listar
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/pedidos/cadastrar">
                  Adicionar
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Perfil do usuário */}
            <Nav>
              <NavDropdown
                title={
                  <span className="d-flex align-items-center">
                    <Image
                      src={imagemAtual === "null" ? semImagem : imagemAtual}
                      width={32}
                      height={32}
                      roundedCircle
                      className="me-2"
                    />
                    {usuarioNome}
                  </span>
                }
                id="user-dropdown"
                align="end"
              >
                <NavDropdown.Item as={NavLink} to={`/funcionarios/editar/${idAtual}`}>
                  Editar Perfil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/login" onClick={logout}>
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNavegacao;