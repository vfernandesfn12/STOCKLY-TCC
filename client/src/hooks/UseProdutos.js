// url da API
const url = "http://localhost:5000";

//Importando o hook de useState para controlar as variáveis
import { useState, useEffect, use } from "react";

// CRUD PRODUTOS

// C
export function useInserirProduto(){
    // Recebe os dados do produto vindo do formulário, faz uma requisição para a API, para inserção do produto utilizando o método POST 
    const inserirProduto = async (data) => {
        const req = await fetch(`${url}/produtos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }) 
        const res = await req.json()
        console.log("Produto inserido:", res);

        // Retorna o produto inserido
        return res     
    }
    
    return { inserirProduto }
}