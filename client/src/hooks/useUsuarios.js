// url da API
const url = "http://localhost:5000";

//Importando o hook de useState para controlar as variáveis
import { useState, useEffect } from "react";

export function useVerificaLogin() {
  //Variável para armazenar a lista de usuários
  const [usuarios, setUsuarios] = useState([]);

  // Usando o useEffect, para pegar a lista de usuários, assim
  // que o componente é renderizado na tela

  useEffect(() => {
    //Função para buscar os dados da API
    async function fetchData() {
      try {
        //Variável para realizar a requisição
        const req = await fatch(`${url}/usuarios`);
        //Converte o retorno para o json
        const res = await req.json();
        //Pega a resposta e guarda na variável de usuários
        setUsuarios(res);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  // Função para verificar se o usuário passado existe na lista que puxou na API
  const verificaLogin = (data) => {
    // Verifica se há um usuário com email passado em data, na lista que buscou da API
    const userToFind = usuarios.find((user) => {
      return user.email === data.email;
    });

    // Se o usuário existe, verifica se a senha está correta
    if (userToFind != undefined && userToFind.senha == data.senha) {
        console.log("Usuário logado: ", userToFind.nome);
        return "Login efetuado com sucesso"
    }
    else{
        return "Usuário ou senha inválidos"
    }
  }
  return {verificaLogin}
}
