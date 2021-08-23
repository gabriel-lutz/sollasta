import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <img src="https://i.ibb.co/b2BTnRr/ID.png" alt="logo"></img>
      </Link>
      <H1>Coleções</H1>
      <H1>Canecas</H1>
      <H1>Pratos</H1>
      <H1>Quem somos</H1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  img {
    position: absolute;
    height: 150%;
    left: 50px;
    top: -17px;
    overflow: hidden;
  }
`;

const H1 = styled.h1`
  font-weight: 200;
  margin: 20px 20px 0 20px;
  font-size: 25px;
  letter-spacing: 2px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;
