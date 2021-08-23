import styled from "styled-components";

export default function Banners() {
  return (
    <Wrapper>
      <img
        src="https://i.ibb.co/QCK0D0W/cartaz-4.png"
        alt="Cartaz conjunto 4"
      ></img>
      <img
        src="https://i.ibb.co/Gc7GsFN/cartaz-3.png"
        alt="Cartaz conjunto 3"
      ></img>
      <img
        src="https://i.ibb.co/NCBXtHX/cartaz-1.png"
        alt="Cartaz conjunto 1"
      ></img>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    margin: 0 5px;
    height: 100%;
  }
`;
