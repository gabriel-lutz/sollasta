import styled from "styled-components";

export default function Highlighted() {
  return (
    <Container>
      <img src="https://i.ibb.co/b2BTnRr/ID.png" alt="logo"></img>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 100px);
  margin-top: 100px;
  background: black;
  img {
    margin-top: 100px;
  }
`;
