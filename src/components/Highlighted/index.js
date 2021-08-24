import styled from "styled-components";

export default function Highlighted() {

  return (
    <Container>
      <img src="https://i.ibb.co/L8rQ2hJ/OKK.png" alt="logo"></img>
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
