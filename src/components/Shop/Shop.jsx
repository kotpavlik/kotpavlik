import React from "react";
import NavBar from "./NavBar/NavBar";
import ProductPhoto from "./Product/ProductPhoto";
import s from "./Shop.module.css";

const Shop = (props) => {
  debugger;
  let productPhotoElement = props.productForAll.productArray.map(product => (
    <ProductPhoto
      name={product.name}
      comp={product.comp}
      price={product.price}
    />
  ));

  return (
    <div className={s.allShop}>
      <NavBar />
      <div className={s.shop}>
        <div className={s.header}>магазин</div>
        {productPhotoElement}
      </div>
    </div>
  );
};

export default Shop;
