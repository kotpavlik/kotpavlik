import React from 'react';
import s from './ForWomen.module.css'
import NavBarForWomen from './NavBar/NavBarForWomen';
import ProductPhotoWomen from './Product/ProductPhotoWomen';


const ForWomen = () => {
return (
<div className={s.forWomen}>
      <NavBarForWomen/>
      <div className={s.shopFW}>
          <div className={s.headerFW}>Для Женщин</div>
          <ProductPhotoWomen nameFW ="Панама" compFW="20% хлопок 30% вискоза 50% плащевка" priceFW="60"/>
          <ProductPhotoWomen nameFW ="Штаны" compFW="70% вискоза 25% хлопок 5% шерсть" priceFW="130" />
          <ProductPhotoWomen nameFW ="Рубашки" compFW="80% хлопок 20% поливискоза" priceFW="150"/>
          <ProductPhotoWomen nameFW ="Пальто" compFW="100% плащевка" priceFW="250"/>
          <ProductPhotoWomen nameFW ="Худи" compFW="50% поливискоза 50% искуственная замша" priceFW="190"/>
          <ProductPhotoWomen nameFW="Косуха" compFW="100% экокожа - основной материал  80% полиэстер 20% хлопок" priceFW="490"/>
      </div>
    </div>
);
}

export default ForWomen ;