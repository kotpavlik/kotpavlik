import React from "react";
import NavBar from "./NavBar/NavBar";
import ProductPhoto from "./Product/ProductPhoto";
import ProductPants from "./Pants/ProductPants";
import s from "./Shop.module.css";

const Shop = (props) => {
  let productPhotoElement = props.productForAll.productArray.map((product) => (
    
        <ProductPhoto
          name={product.name}
          comp={product.comp}
          price={product.price}
        />
  ));

  let productPantsElement = props.productForAll.PantsArray.map((product) => (
   
        <ProductPants
          name={product.name}
          comp={product.comp}
          price={product.price}
        />
  ));

  return (
    <div className={s.allShop}>
      <NavBar />
      <div className={s.shop}>
        <div className={s.header}>Магазин</div>
          {productPhotoElement}
          {productPantsElement}
        
      </div>
    </div>
  );
};

export default Shop;
