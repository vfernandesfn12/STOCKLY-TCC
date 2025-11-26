// Importação de componentes do React-Bootstrap que serão usados na barra de navegação
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";

// Importa o NavLink do React Router para criar links com navegação SPA (sem recarregar a página)
import { NavLink } from "react-router-dom";

// Importa o useContext para acessar dados globais do contexto de autenticação
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext.jsx"; // contexto de autenticação do usuário

// ===== ÍCONES =====
import { HiUserGroup } from "react-icons/hi"; // Ícone de grupo de usuários (funcionários)
import { FaHandHoldingUsd } from "react-icons/fa"; // Ícone de cliente (mão segurando dinheiro)
import { HiMiniClipboardDocumentList } from "react-icons/hi2"; // Ícone de pedidos (prancheta)
import { FaBoxesStacked } from "react-icons/fa6"; // Ícone de produtos (caixas empilhadas)
import { HiMiniDocumentText } from "react-icons/hi2"; // Ícone de relatórios (documento)
import { RiHome9Fill } from "react-icons/ri"; // Ícone de casa (home)

// ===== CSS e LOGO =====
import styles from "./BarraNavegacao.module.css"; // estilos personalizados da navbar
import logo from "../../../src/assets/logo.png"; // logo da aplicação

import DarkMode from "../DarkMode/DarkMode.jsx"; // Importando DarkMode

// ===== COMPONENTE PRINCIPAL =====
const BarraNavegacao = () => {
  // Pega dados do contexto (nome do usuário e função de logout)
  const { usuarioNome, logout } = useContext(AuthContext);

  // Recupera informações armazenadas no localStorage
  const idAtual = localStorage.getItem("id"); // ID do usuário logado
  const imagemAtual = localStorage.getItem("imagemPerfil"); // URL da imagem do perfil
  const semImagem = "https://cdn-icons-png.flaticon.com/512/17/17004.png"; // imagem padrão

  return (
    // Navbar principal do React-Bootstrap
    // bg="light" → fundo claro | expand="lg" → colapsa em telas pequenas
    <Navbar expand="lg" className={`${styles.navbar} shadow-sm`}>
      {/* Container fluido (ocupa 100% da largura) */}
      <Container fluid className={styles.nav_link_spacing}>
        {/* ==== LOGO + NOME ==== */}
        <Navbar.Brand
          as={NavLink}
          to="/home"
          className="d-flex align-items-center"
        >
          {/* Logo da empresa */}
          <Image
            src={logo}
            alt="Logo da empresa"
            width={45}
            height={45}
            className="me-2" // margem direita
          />
          {/* Nome da marca */}
          <span className="fw-bold fs-4">STOCKLY</span>
        </Navbar.Brand>

        {/* ==== BOTÃO HAMBÚRGUER ==== 
            Aparece em telas pequenas para expandir/recolher o menu */}
        <Navbar.Toggle aria-controls="navbarResponsive" />

        {/* ==== ÁREA DE ITENS DO MENU ==== */}
        <Navbar.Collapse id="navbarResponsive">
          {/* Seção de navegação principal (à esquerda) */}
          <Nav className="me-auto">
            {/* Link para Home */}
            <Nav.Link as={NavLink} to="/home">
              <RiHome9Fill className="me-1" /> {/* Ícone */}
              Home
            </Nav.Link>

            {/* ===== MENU PRODUTOS ===== */}
            <NavDropdown
              title={
                <>
                  <FaBoxesStacked className="me-1" />
                  Produtos
                </>
              }
              id="produtos-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="/produtos">
                Listar
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/produtos/cadastrar">
                Adicionar
              </NavDropdown.Item>
            </NavDropdown>

            {/* ===== MENU CLIENTES ===== */}
            <NavDropdown
              title={
                <>
                  <FaHandHoldingUsd className="me-1" />
                  Clientes
                </>
              }
              id="clientes-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="/clientes">
                Listar
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/clientes/cadastrar">
                Adicionar
              </NavDropdown.Item>
            </NavDropdown>

            {/* ===== MENU FUNCIONÁRIOS ===== */}
            <NavDropdown
              title={
                <>
                  <HiUserGroup className="me-1" />
                  Funcionários
                </>
              }
              id="funcionarios-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="/funcionarios">
                Listar
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/funcionarios/cadastrar">
                Adicionar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* ==== PERFIL DO USUÁRIO ==== */}
          <Nav className="d-flex align-items-center mx-auto">
            {/* Botão de modo escuro (DarkMode) */}
            <div className="me-3" style={{ padding: "15px" }}>
              <DarkMode />
            </div>

            <NavDropdown
              align="end" // abre o menu alinhado à direita
              title={
                <span id="user-dropdown" className="d-flex align-items-center">
                  {/* Mostra imagem de perfil do usuário (ou imagem padrão) */}
                  <Image
                    src={imagemAtual === "null" ? semImagem : imagemAtual}
                    width={50}
                    height={50}
                    roundedCircle // bordas arredondadas
                    className="me-2"
                  />
                  {/* Nome do usuário logado */}
                  {usuarioNome}
                </span>
              }
              id="dropdown-usuario"
            >
              {/* Opção de editar o próprio perfil */}
              <NavDropdown.Item
                as={NavLink}
                to={`/funcionarios/editar/${idAtual}`}
              >
                Editar Perfil
              </NavDropdown.Item>

              {/* Linha divisória */}
              <NavDropdown.Divider />

              {/* Botão de logout */}
              <NavDropdown.Item as={NavLink} to="/login" onClick={logout}>
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Exporta o componente para uso em outras partes da aplicação
export default BarraNavegacao;
