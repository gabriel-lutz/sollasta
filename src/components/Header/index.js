import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <UpperBarWrapper>
        <Link to="/">
          <img src="https://i.ibb.co/b2BTnRr/ID.png" alt="logo"></img>
        </Link>
      </UpperBarWrapper>

      <LinksWrapper>
        <H1>Coleções</H1>
        <H1>Canecas</H1>
        <H1>Pratos</H1>
        <H1>Quem somos</H1>
      </LinksWrapper>
    </>
  );
}

const UpperBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      margin-top: 20px;
      height: 200%;
    }
  }
  svg {
    position: absolute;
    left: 200px;
  }
`;

const H1 = styled.h1`
  font-weight: 200;
  margin: 10px 10px;
  font-size: 22px;
  letter-spacing: 2px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

const LinksWrapper = styled.div`
  position: fixed;
  top: 85px;
  display: flex;
  background: black;
  justify-content: center;
  color: white;
  width: 100%;
  z-index: 1;

`;
