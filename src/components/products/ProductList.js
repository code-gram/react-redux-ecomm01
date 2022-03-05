import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./../../redux/actions/productActions";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error : ", err);
      });
    //console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products : ", products);
  return (
    <div className="ui grid container">
      <ProductItem />
    </div>
  );
};

export default ProductList;
