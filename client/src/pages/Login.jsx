//Importação dos componentes do bootstrap
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import styles from "./Login.module.css";
import logo from "../assets/logo.png"

//Importação dos icone de login
import { BsBoxArrowInRight } from "react-icons/bs";

// importando o hook para verificar o login, vindo do useUsuários
import { useVerificaLogin } from "../hooks/useUsuarios";

// Importando a função useform do pacote hook-form
import { useForm } from "react-hook-form"

const Login = () => {

  //register = cria um objeto com os valores retirados dos inputs
  //handleSubmit = envia os dados formulário, caso dê erro ou sucesso
  //formState { erros } = objeto que guarda uma lista de erros que aconteceram na tentativa do envio
  const { register, handleSubmit, formState: {errors} } = useForm()

  //Caso o envio dê certo
  // data = objeto com todas as informações preenchidas nos campos do formulário
  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    
  }

  //Caso o envio dê errado
  //errors = objeto com todos os erros do envio
  const onError = (errors) => {
    console.log("Errors:", errors);

  };



  return (
    <div className={styles.pagelogin}>
      <Container className="justify-content-center align-content-center min-vh-100">
        {/* Linha para os campos de login e icone */}
        <Row className={styles.rowcss}>
          {/* Coluna com o icone da página */}
          <Col>
            {/* Icone de Login */}
            {/* <BsBoxArrowInRight style={{ fontSize: "500px", color: "white" }} /> */}
            <img src={logo} alt="" width={"600px"} height={"600px"}/>
          </Col>
          {/* Coluna com os campos de login */}
          <Col className="d-flex flex-column">
            <Form style={{ width: "75%", margin: "auto", textAlign: "center" }}>
              {/* Caixinha de email */}
              <FloatingLabel
                controlId="inputEmail"
                label="Email"
                className="mb-5"
              >
                <Form.Control type="email" />
              </FloatingLabel>
              {/* Fim de caixinha de email */}

              {/* Fim de senha */}
              <FloatingLabel
                controlId="inputSenha"
                label="Senha"
                className="mb-5"
              >
                <Form.Control type="password" />
              </FloatingLabel>
              {/* Fim da senha */}

              {/* Botão para envio */}
              <Button
                style={{ backgroundColor: "#344250" }}
                variant="primary"
                type="submit"
                className="mb-5"
                size="lg"
                
              >
                Login
              </Button>

              {/* Alerta, caso aja algum erro */}
              <Alert variant="danger" className="my-3 w-75 mx-auto">
                Usuário ou senha inválidos
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
