import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImageGallery from "../../components/ImageGallery.js";
import ProductInfo from "../../components/ProductInfo/index.js";

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
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: calc(100vh - 100px);
`;
