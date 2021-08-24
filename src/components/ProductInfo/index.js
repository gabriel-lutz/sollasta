import styled from "styled-components";

export default function ProductInfo({ productInfo }) {
  return (
    <Info>
      <h1>
        <b>{productInfo.title}</b>
      </h1>
      <p>{productInfo.description}</p>
      <h2>
        {(productInfo.price / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h2>
      <Specifications>
        <Wrapper>
          <h1>Especificações</h1>
        </Wrapper>
        <p>
          <u>Cor</u>: {productInfo.specification.color}
        </p>
        <p>
          <u>Material</u>: {productInfo.specification.material}
        </p>
        <p>
          <u>Largura</u>: {productInfo.specification.width} cm
        </p>
        <p>
          <u>Altura</u>: {productInfo.specification.height} cm{" "}
        </p>
        <p>
          <u>Profundidade</u>: {productInfo.specification.length} cm
        </p>
        <p>
          <u>Diâmetro</u>: {productInfo.specification.diameter} cm
        </p>
        <p>
          <u>Peso</u>: {productInfo.specification.weight} g
        </p>
        <p>
          <u>Tipo da embalagem</u>: Caixa parda decorada
        </p>
      </Specifications>

      <Usage>
        <h1>Uso e cuidados</h1>
        <p>
          <u>Garantia</u>: 90 dias por defeito de fabricação e 12 meses para
          gretamento.
        </p>
        <p>
          <u>Uso</u>: pode ser utilizado em micro-ondas e lava louças, não
          recomendado uso em fornos elétricos.
        </p>
        <p>
          <u>Limpeza</u>: recomendado utilizar detergente neutro e esponja
          macia.{" "}
        </p>
        <p>
          <u>Cuidados</u>: o uso de esponjas ásperas e seu atrito com o produto
          pode danificar seu revestimento. Uso de materiais macios para
          higienização.
        </p>
      </Usage>

      <OtherInfos>
        <h1>Informações adicionais</h1>
        <p>
          Podem ocorrer pequenas variações de cor, peso, nuance, brilho, textura
          e tamanho da peças em função de fatores relacionados a seu processo de
          fabricação pois há variações na matéria prima natural pertinentes as
          etapas de confirmação, decoração e queima
        </p>
      </OtherInfos>
    </Info>
  );
}

const Info = styled.div`
  border-left: 1px solid grey;
  height: auto;
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

const Usage = styled.div`
  border-top: 1px solid black;
  margin-top: 20px;
  h1 {
    margin: 20px 0;
    font-size: 20px;
  }
`;

const OtherInfos = styled.div`
  border-top: 1px solid black;
  margin-top: 20px;
  h1 {
    margin: 20px 0;
    font-size: 20px;
  }
`;

const Wrapper = styled.div``;
