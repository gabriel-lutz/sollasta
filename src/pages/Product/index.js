import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ImageGallery from "../../components/ImageGallery";
import ProductInfo from "../../components/ProductInfo";

export default function Product() {
  const [productInfo, setProductInfo] = useState();
  const [displayingImage, setDisplayingImage] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const response = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/product/${id}`
    );
    response.then((data) => {
      setProductInfo(data.data);
      setDisplayingImage(data.data.images[0]?.url);
    });
  }, [id]);

  return (
    <Container>
      {!productInfo ? (
        <Loader type="Puff" color="#000000"></Loader>
      ) : (
        <>
          <ImageGallery
            displayingImage={displayingImage}
            setDisplayingImage={setDisplayingImage}
            images={productInfo.images}
          />
          <ProductInfo productInfo={productInfo} />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  height: auto;
  margin-bottom: 30px;
`;
