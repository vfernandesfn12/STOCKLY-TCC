// url da API
const url = "http://localhost:5000";

import { useState, useEffect } from "react";

// Lista de departamentos
export function useListaDepartamentos() {
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    async function fetchDepartamentos() {
      try {
        const req = await fetch(`${url}/departamentos`);
        const res = await req.json();
        setDepartamentos(res);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchDepartamentos();
  }, []);

  return departamentos;
}

// Inserir funcionário
export function useInserirFuncionario() {
  const inserirFuncionario = async (data) => {
    try {
      const req = await fetch(`${url}/funcionarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      console.log("Funcionário inserido:", res);
      return res;
    } catch (erro) {
      console.log("Erro ao inserir funcionário:", erro.message);
    }
  };

  return { inserirFuncionario };
}
