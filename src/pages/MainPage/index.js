import axios from "axios";
import { useEffect, useState } from "react";

import Banners from "../../components/Banners";
import Display from "../../components/Display";
import Highlighted from "../../components/Highlighted";

export default function MainPage() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_API_BASE_URL);
    const response = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/products`
    );
    response.then((data) => {
      setProductsList(data.data);
    });
  }, []);

  return (
    <>
      <Highlighted />
      <Display productsList={productsList} category={"Canecas"} />
      <Banners />
      <Display productsList={productsList} category={"Pratos"} />
    </>
  );
}
