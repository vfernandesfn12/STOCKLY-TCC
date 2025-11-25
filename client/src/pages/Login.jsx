//Importação dos componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import styles from "./Login.module.css";
import logoBranca from "../assets/logoBranca.png";

// Importando DarkMode
import DarkMode from "../components/DarkMode/DarkMode.jsx";

// importando o hook para verificar o login, vindo do useUsuários
import { useVerificaLogin } from "../hooks/useUsuarios";

// Importando a função useform do pacote hook-form
import { useForm } from "react-hook-form";

//Importando o useState para tratar de variáveis
import { useEffect, useState } from "react";

// importação do Navigate para transitar entre as paginas
import { useNavigate } from "react-router-dom";

// Importar as informações do contexto autenticação de usuário
import { AuthContext } from "../contexts/UserContext.jsx";
import { useContext } from "react";

const Login = () => {
  // Usa as variáveis de contexto do usuário
  const { logout } = useContext(AuthContext);

  //Assim que entrar na página, o localStorage é resetado
  useEffect(() => {
    logout();
  }, []);

  //register = cria um objeto com os valores retirados dos inputs
  //handleSubmit = envia os dados formulário, caso dê erro ou sucesso
  //formState { erros } = objeto que guarda uma lista de erros que aconteceram na tentativa do envio
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Variável classes do Alert
  const [alertaClasse, setAlertaClasse] = useState("d-none");

  //Usando apenas a função verificaLogin, que importei do hook
  const { verificaLogin } = useVerificaLogin();

  //Criando o navigate
  const navigate = useNavigate();

  //Caso o envio dê certo
  // data = objeto com todas as informações preenchidas nos campos do formulário
  const onSubmit = (data) => {
    console.log("Dados enviados:", data);

    //Cria uma variável para armazenar a resposta completa que veio da função
    const resposta = verificaLogin(data);

    //Caso a resposta seja positiva mostra o alerta e leva ele pra home
    if (resposta === "Login efetuado com sucesso") {
      alert(resposta);
      navigate("/home");
    }
    //Se não, avisa o alerta lá
    else {
      setAlertaClasse("my-3 w-75 mx-auto");
    }
  };

  //Caso o envio dê errado
  //errors = objeto com todos os erros do envio
  const onError = (errors) => {
    console.log("Errors:", errors);
  };

  return (
    <div className={styles.pageWrapper}>
      
      {/* Dark Mode — canto superior direito */}
      <div className={styles.darkmodeWrapper}>
        <DarkMode />
      </div>
      <div className={styles.loginCard}>
        {/* LADO AZUL */}
        <div className={styles.leftBox}>
          <img src={logoBranca} className={styles.logo} />
        </div>

        {/* LADO DO FORM */}
        <div className={styles.rightBox}>
          <h2 className={styles.title}>Login</h2>

          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FloatingLabel
              controlId="inputEmail"
              label="Email"
              className="mb-4"
            >
              <Form.Control
                type="email"
                {...register("email", {
                  required: "O email é obrigatório",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </FloatingLabel>

            <FloatingLabel
              controlId="inputSenha"
              label="Password"
              className="mb-4"
            >
              <Form.Control
                type="password"
                {...register("senha", { required: "A senha é obrigatória" })}
              />
              {errors.senha && (
                <p className={styles.error}>{errors.senha.message}</p>
              )}
            </FloatingLabel>

            <Button style={{padding: "20px", fontSize: "25px"}} type="submit" className={styles.btnLogin}>
              Login
            </Button>

            <Alert variant="danger" className={alertaClasse}>
              Usuário ou senha inválidos
            </Alert>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
