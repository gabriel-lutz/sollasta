import styled from "styled-components";

export default function Highlighted() {
  const imgArray = [
    "https://i.ibb.co/dpZmkHm/5-1.png",
    "https://i.ibb.co/nzsv2jC/E-3.png",
    "https://i.ibb.co/fqyQ860/8.png",
    "https://i.ibb.co/TcsqcFc/1.png",
  ];

  return (
    <Container>
      <img src={imgArray[3]} alt="logo"></img>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  margin-top: 100px;
  background: black;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
