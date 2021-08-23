import { useEffect, useState } from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";

export default function Display({ productsList, category }) {
  const [filteredProducts, setfilteredProducts] = useState([]);
  useEffect(() => {
    setfilteredProducts(
      productsList.filter((p) => p.category.name === category)
    );
  }, [category, productsList]);

  return (
    <Section>
      {filteredProducts.map((p) => (
        <ImageBox key={p.id} product={p}></ImageBox>
      ))}
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
