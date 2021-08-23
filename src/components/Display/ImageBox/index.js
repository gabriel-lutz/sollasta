import { Link } from "react-router-dom";
import styled from "styled-components";
export default function ImageBox({ product }) {
  return (
    <Wrapper>
      <Link to={`/product/${product.id}`}>
        <Img images={[product.img1Url, product.img2Url]}></Img>
      </Link>
      <TextBox>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </TextBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const Img = styled.div`
  width: 200px;
  height: 200px;
  background: url(${(props) => props.images[0]}) center;
  background-size: contain;
  transition: 0.2s;
  &:hover {
    background: url(${(props) => props.images[1]}) center;
    background-size: contain;
  }
`;

const TextBox = styled.div`
  word-break: break-all;
`;
