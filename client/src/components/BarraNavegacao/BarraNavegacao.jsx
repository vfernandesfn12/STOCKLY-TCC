// Importando o css da barra de navegação
import styles from "./BarraNavegacao.module.css";

// Importar os componentes do bootstrap
import { Nav, Navbar, NavDropdown, Image, Accordion } from "react-bootstrap";

// Importando os links do router
import { NavLink } from "react-router-dom";

// Importar as informações do contexto autenticação de usuário
import { AuthContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";

// Importanto os icones
import {
  BsBoxes,
  BsBuilding,
  BsBuildingAdd,
  BsBuildingGear,
  BsHouse,
  BsPeople,
  BsPersonAdd,
  BsPersonGear,
  BsPlusCircle,
  BsShop,
  BsSpeedometer,
  BsTable,
  BsViewStacked,
} from "react-icons/bs";

const BarraNavegacao = () => {
  // importar o nome de usuario logado e funcao logout
  const { usuarioNome, logout } = useContext(AuthContext);

  // Guarda o id do usuário atual
  const idAtual = localStorage.getItem("id");

  // Guarda a imagem do usuário atual
  const imagemAtual = localStorage.getItem("imagemPerfil");

  // Imagem padrão
  const semImagem = "https://cdn-icons-png.flaticon.com/512/17/17004.png";
  
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 max-vh-100"
      style={{ width: "250px" }}
    >
      {/* Logo da empresa */}
      <Navbar.Brand as={NavLink} to="/home" className="text-white mb-3">
        <BsShop className="fs-1" />
        <span className="fs-2 ms-2" >C&G Solutions</span>
      </Navbar.Brand>

      {/* Opções de menu */}
      <Nav className="flex-column mb-auto">
        {/* Opção home */}
        <Nav.Link as={NavLink} to="/home" className="text-white px-2">
          <BsHouse className="fs-4" />
          <span className="fs-5 ms-2">Home</span>
        </Nav.Link>    

        {/* Criando o arcordeon */}
        <Accordion flush className="flex-column mb-auto" alwaysOpen>
          {/* Páginas produtos */}
          <Accordion.Item eventKey="0" className="bg-dark text-white">
            <Accordion.Header className={styles.accordionHeader}>
              <BsBoxes className="fs-4" />
              <span className="ms-2 fs-5 fs-5"> Produtos </span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos"
                  className="text-white ps-4"
                >
                  <BsViewStacked className="fs-5" />
                  <span className="ms-2 fs-5 fs-5"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos/cadastrar"
                  className="text-white ps-4"
                >
                  <BsPlusCircle className="fs-5" />
                  <span className="ms-2 fs-5 fs-5"> Adicionar </span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
          {/* fim produtos */}

          {/* Páginas cliente */}
          <Accordion.Item eventKey="1" className="bg-dark text-white" >
            <Accordion.Header className={styles.accordionHeader}>
              <BsPeople className="fs-4" />
              <span className="ms-2 fs-5 fs-5"> Clientes </span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/clientes"
                  className="text-white ps-4"
                >
                  <BsPersonGear className="fs-5" />
                  <span className="ms-2 fs-5"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/clientes/cadastrar"
                  className="text-white ps-4"
                >
                  <BsPersonAdd className="fs-5" />
                  <span className="ms-2 fs-5"> Adicionar </span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
          {/* fim cliente */}

          {/* Páginas funcionarios */}
          <Accordion.Item eventKey="2" className="bg-dark text-white">
            <Accordion.Header className={styles.accordionHeader}>
              <BsBuilding className="fs-4" />
              <span className="ms-2 fs-5"> Funcionários </span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/funcionarios"
                  className="text-white ps-4"
                >
                  <BsBuildingAdd className="fs-5" />
                  <span className="ms-2 fs-5"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/funcionarios/cadastrar"
                  className="text-white ps-4"
                >
                  <BsBuildingAdd className="fs-5" />
                  <span className="ms-2 fs-5"> Adicionar </span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
          {/* fim funcionarios */}

          
          {/* Páginas Pedidos */}
          <Accordion.Item eventKey="3" className="bg-dark text-white">
            <Accordion.Header className={styles.accordionHeader}>
              <BsTable className="fs-4" />
              <span className="ms-2 fs-5"> Pedidos </span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/pedidos"
                  className="text-white ps-4"
                >
                  <BsTable className="fs-5" />
                  <span className="ms-2 fs-5"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/pedidos/cadastrar"
                  className="text-white ps-4"
                >
                  <BsTable className="fs-5" />
                  <span className="ms-2 fs-5"> Adicionar </span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
          {/* fim funcionarios */}
        </Accordion>

         {/* Opção Relatórios */}
        <Nav.Link as={NavLink} to="/relatorios" className="text-white px-2">
          <BsSpeedometer className="fs-4" />
          <span className="fs-5 ms-2 fs-5">Relatórios</span>
        </Nav.Link>
      </Nav>

      <hr className=" border-secondary"/>

      {/* Visualizar foto e nome do perfil, e opções */}
      <Nav className=" dropdown pb-4">
        <NavDropdown
          title={
            <span className="text-white align-items-center">
              <Image 
                src={imagemAtual == "null" ? semImagem : imagemAtual}
                width={66}
                height={66}
                roundedCircle
                className="me-2"
              />
              {usuarioNome}
            </span> 
          }
          menuVariant="dark">
          {/* Opção de editar o perfil */}
          <NavDropdown.Item as={NavLink} to={`/funcionarios/editar/${idAtual}`}>
            Editar
          </NavDropdown.Item>

          {/* Voltar pra tela de login */}
          <NavDropdown.Item as={NavLink} to="/login" onClick={logout}>
            Sair
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
};

export default BarraNavegacao;