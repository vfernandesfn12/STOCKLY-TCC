import { useState } from "react";

// Importação dos componentes do bootstrap

// Importanto o hook de produtos
import { useListaProdutos } from "../../hooks/useProdutos";

import CardProduto from "../../components/CardProduto/CardProduto";

const VerProdutos = () => {
  // Lista de produtos
  const produtos = useListaProdutos();

  return (
    <div>
      <h1> VerProdutos </h1>

      <div className=" d-flex col-12 gap-3 mt-3 justify-content-evenly flex-wrap">
        {/* Gerar cards dos produtos */}
        {produtos.length > 0 ? (
          produtos.map((prod) => (
            <CardProduto
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              descricao={prod.descricao}
              precoVenda={prod.precoVenda}
              categoria={prod.categoria}
              marca={prod.marca}
              tamanho={prod.tamanho}
              medida={prod.medida}
              imagemUrl={prod.imagemUrl}
            />
          ))
        ) : (
          <p> Nenhum produto cadastrado </p>
        )}
      </div>
    </div>
  );
};

export default VerProdutos;
