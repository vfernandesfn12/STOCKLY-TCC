// Importa a url da api do aquivo .env
const url = import.meta.env.VITE_API_URL;

// Importando os hooks pra controar o states e useEffect
import { useState, useEffect } from "react";

// Cria o hook para listar os Funcionarios, puxando os dados da api
export function useListaFuncionarios() {
  //Lista com Funcionarios
  const [funcionarios, setFuncionarios] = useState([]);

  // UseEffect para puxar os dados assim que o componente é montado
  useEffect(() => {
    // Função pra buscar os dados da API
    async function fetchData() {
      try {
        const req = await fetch(`${url}/usuarios`);
        const funcionarios = await req.json();
        console.log(funcionarios);
        setFuncionarios(funcionarios);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  // Retorna a lista de Funcionarios
  return funcionarios;
}

// Cria o hook para excluir um Funcionario
export function useDeletaFuncionario() {
  // Recebe o id do Funcionario a ser deletado e faz a requisição para a Api
  // com o método DELETE
  const deletarFuncionario = async (idFuncionario) => {
    // mudei aqui
    const req = await fetch(`${url}/usuarios/${idFuncionario}`, {
      method: "DELETE",
    });
    const res = await req.json();
    // Retorna o Funcionario deletado
    return res;
  };
  return { deletarFuncionario };
}

// Cria o hook para inserir um Funcionario
export function useInserirFuncionario() {
  // Recebe os dados do Funcionario e faz a requisição para a API
  // com o método POST
  const inserirFuncionario = async (data) => {
    const req = await fetch(`${url}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("Funcionario inserido:", res);
    // Retorna o Funcionario inserido
    return res;
  };

  return { inserirFuncionario };
}

// Cria o hook para bucar um Funcionario por id
export function useBuscarFuncionarioPorId() {
  // Receb o id do Funcionario e faz a requisição para a api
  // com o método GET
  const buscarFuncionarioPorId = async (idFuncionario) => {
    const req = await fetch(`${url}/usuarios/${idFuncionario}`);
    const res = await req.json();
    console.log("Funcionario encontrado:", res);
    return res;
  };
  return { buscarFuncionarioPorId };
}

// Cria o hook para atualizar um Funcionario
export function useAtualizaFuncionario() {
  // Envia os dados do Funcionarios recebido via data, para o Funcionario específico que recebeu via id Funcionario,
  // e faz a requisição para a ai, com o método PUT
  const atualizaFuncionario = async (data, idFuncionario) => {
    const req = await fetch(`${url}/usuarios/${idFuncionario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("Funcionario atualizado:", res);
    // Retorna o Funcionario atualizado
    return res;
  };
  return { atualizaFuncionario };
}