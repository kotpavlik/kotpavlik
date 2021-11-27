import React from "react";
import s from "./ForMen.module.css";
import NavBarForMen from "./NavBar/NavBarForMen";
import ProductPhotoMen from "./Product/ProductPhotoMen";

const ForMen = (props) => {
debugger;

  let ProductPhotoMenElement = props.ForMenPage.productMenArray.map (product => <ProductPhotoMen nameFm={product.name} compFm={product.comp} priceFm = {product.price}/> );

  return (
    <div className={s.forMen}>
      <NavBarForMen />
      <div className={s.shopFM}>
          <div className={s.headerFM}>Для Мужчин</div>
          {ProductPhotoMenElement}
      </div>
    </div>
  );
};

export default ForMen;
