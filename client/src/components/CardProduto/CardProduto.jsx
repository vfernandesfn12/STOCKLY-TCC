// Importação dos componentes do bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Importando o link para tranferência de página
import { Link } from "react-router-dom";

// Importanto o hook de produtos
import { useDeletaProduto } from "../../hooks/useProdutos";

const CardProduto = (props) => {
  
  // importar a função de deletar produto
  const { deletarProduto } = useDeletaProduto();

  // Função pra lidar com o delete
  const handleDelete = async () => {
    if (confirm(`Deseja realmente excluir o produto ${props.nome}?`)) {
      try {
        // 1. Deleta o produto
        await deletarProduto(props.id);

        alert(`Produto ${props.nome} deletado com sucesso!`);

        // NOTA: Se esta página (VerProdutos) precisa se atualizar, você
        // ainda precisará de uma função de refetch local aqui.
        // Mas para o Dashboard, o refetchDashboard resolve.
      } catch (error) {
        alert(`Erro ao deletar o produto ${props.nome}.`);
        console.error("Erro na deleção:", error);
      }
    }
  };

  return (
    <div>
      <Card className="text-center" style={{ width: "17rem", height: "35rem" }}>
        {/* Imagem do card */}
        <Card.Img
          variant="top"
          height="200px"
          // Se tiver uma imagem mostra, se não mostra o link padrão de produto sem imagem
          src={
            props.imagemUrl != null
              ? props.imagemUrl
              : "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png"
          }
        ></Card.Img>
        <Card.Body>
          {/* Título do card com o nome do produto */}
          <Card.Title className="mb-3"> {props.nome} </Card.Title>
          {/* Subtítulo com o preco do produto */}
          <Card.Subtitle className="mb-2 text-muted">
            <b> Preço: </b> {props.precoVenda}
          </Card.Subtitle>
          <Card.Text>
            {" "}
            <b> Marca: </b> {props.marca}
          </Card.Text>
          <Card.Text>
            {" "}
            <b> Tamanho: </b> {props.tamanho}
          </Card.Text>
          <Card.Text>
            {" "}
            <b> Categoria: </b> {props.categoria}
          </Card.Text>
          <Card.Text>
            {" "}
            <b> Descrição: </b> {props.descricao}
          </Card.Text>

          {/* Botão de editar produto, passando o id como parametro */}
          <Card.Link as={Link} to={`/produtos/editar/${props.id}`}>
            <Button variant="warning"> Editar </Button>
          </Card.Link>

          {/* Botão excluir */}
          <Card.Link>
            <Button variant="danger" onClick={handleDelete}>
              {" "}
              Excluir{" "}
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;
