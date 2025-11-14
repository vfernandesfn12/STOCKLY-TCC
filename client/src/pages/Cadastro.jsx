//Importações do Bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// CSS e logo
import styles from "./Login.module.css";
import logo from "../assets/logo.png";

// Dark Mode
import DarkMode from "../components/DarkMode/DarkMode.jsx";

// react-hook-form
import { useForm } from "react-hook-form";

// Hooks e estado
import { useState } from "react";

// Navigate
import { useNavigate } from "react-router-dom";

// Hook de criar usuário (ajuste para o nome real do seu hook)
import { useInserirUsuario } from "../hooks/useUsuarios";

const Cadastro = () => {
  // Animação da parte azul
  const [animacao, setAnimacao] = useState(false);

  // Alert de erro
  const [alerta, setAlerta] = useState("d-none");

  // Hook de cadastro
  const { cadastrarUsuario } = useInserirUsuario();

  // Navigate
  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Envio correto
  const onSubmit = (data) => {
    const resposta = cadastrarUsuario(data);

    if (resposta === "Usuário cadastrado com sucesso") {
      alert(resposta);
      navigate("/login");
    } else {
      setAlerta("my-3 w-75 mx-auto");
    }
  };

  // Envio com erro
  const onError = (err) => console.log("Erros:", err);

  return (
    <div className={styles.pageWrapper}>

      {/* Dark Mode */}
      <div className={styles.darkmodeWrapper}>
        <DarkMode />
      </div>

      <div className={styles.loginCard}>

        {/* LADO AZUL */}
        <div className={`${styles.leftBox} ${animacao ? styles.animateOutLeft : styles.animateInLeft}`}>
          <img src={logo} alt="" className={styles.logo} />
          <p>Já possui conta?</p>

          <button
            className={styles.registerBtn}
            onClick={() => {
              setAnimacao(true);
              setTimeout(() => navigate("/login"), 500);
            }}
          >
            Fazer Login
          </button>
        </div>

        {/* LADO DO FORM */}
        <div className={styles.rightBox}>
          <h2 className={styles.title}>Cadastro</h2>

          <Form onSubmit={handleSubmit(onSubmit, onError)}>

            {/* Nome */}
            <FloatingLabel controlId="inputNome" label="Nome" className="mb-4">
              <Form.Control
                type="text"
                {...register("nome", { required: "O nome é obrigatório" })}
              />
              {errors.nome && (
                <p className={styles.error}>{errors.nome.message}</p>
              )}
            </FloatingLabel>

            {/* Email */}
            <FloatingLabel controlId="inputEmail" label="Email" className="mb-4">
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

            {/* Senha */}
            <FloatingLabel controlId="inputSenha" label="Senha" className="mb-4">
              <Form.Control
                type="password"
                {...register("senha", {
                  required: "A senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "A senha deve ter pelo menos 6 caracteres",
                  },
                })}
              />
              {errors.senha && (
                <p className={styles.error}>{errors.senha.message}</p>
              )}
            </FloatingLabel>

            {/* Confirmar senha */}
            <FloatingLabel
              controlId="inputConfirmar"
              label="Confirmar senha"
              className="mb-4"
            >
              <Form.Control
                type="password"
                {...register("confirmar", {
                  required: "Confirme sua senha",
                })}
              />
              {errors.confirmar && (
                <p className={styles.error}>{errors.confirmar.message}</p>
              )}
            </FloatingLabel>

            <Button type="submit" className={styles.btnLogin}>
              Criar Conta
            </Button>

            <Alert variant="danger" className={alerta}>
              Erro ao cadastrar usuário
            </Alert>

          </Form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
