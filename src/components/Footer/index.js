import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <h1>Desenvolvido com React</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="react icon"
      />
    </Container>
  );
}

const Container = styled.footer`
  height: 50px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  img {
    width: 30px;
  }
`;
