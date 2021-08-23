import styled from "styled-components";

export default function ProductInfo({ productInfo }) {
  return (
    <Info>
      <h1>{productInfo.title}</h1>
      <p>{productInfo.description}</p>
      <h2>
        {(productInfo.price / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h2>
      <Specifications>
        <h1>Especificações</h1>
        <p>Cor: {productInfo.specification.color}</p>
        <p>Material: {productInfo.specification.material}</p>
        <p>Largura: {productInfo.specification.width} cm</p>
        <p>Altura: {productInfo.specification.height} cm </p>
        <p>Profundidade: {productInfo.specification.length} cm</p>
        <p>Diâmetro: {productInfo.specification.diameter} cm</p>
        <p>Peso: {productInfo.specification.weight} g</p>
      </Specifications>
    </Info>
  );
}

const Info = styled.div`
  height: 100%;
  width: 50vw;
  padding: 20px 40px;
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  & > p {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Specifications = styled.div`
  border-top: 1px solid grey;
  h1 {
    margin: 20px 0;
    font-size: 20px;
  }
`;
