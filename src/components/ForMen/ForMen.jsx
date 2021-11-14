import React from "react";
import s from "./ForMen.module.css";
import NavBarForMen from "./NavBar/NavBarForMen";
import ProductPhotoMen from "./Product/ProductPhotoMen";

const ForMen = () => {
  return (
    <div className={s.forMen}>
      <NavBarForMen />
      <div className={s.shopFM}>
          <div className={s.headerFM}>Для Мужчин</div>
          <ProductPhotoMen nameFm ="Панама" compFm="20% хлопок 30% вискоза 50% плащевка" priceFm="60"/>
          <ProductPhotoMen nameFm ="Штаны" compFm="70% вискоза 25% хлопок 5% шерсть" priceFm="130" />
          <ProductPhotoMen nameFm ="Рубашки" compFm="80% хлопок 20% поливискоза" priceFm="150"/>
          <ProductPhotoMen nameFm ="Пальто" compFm="100% плащевка" priceFm="250"/>
          <ProductPhotoMen nameFm ="Худи" compFm="50% поливискоза 50% искуственная замша" priceFm="190"/>
          <ProductPhotoMen nameFm ="Косуха" compFm="100% экокожа - основной материал  80% полиэстер 20% хлопок" priceFm="490"/>
      </div>
    </div>
  );
};

export default ForMen;
