import React from 'react';
import ProductPhoto from './Product/ProductPhoto';
import s from './Shop.module.css'

const Shop = () => {
return (
<div className={s.shop}>
   <div className={s.header}> Имя категории </div>
<ProductPhoto name ="Панама" comp="20% хлопок 30% вискоза 50% плащевка" price="60"/>
<ProductPhoto name ="Штаны" comp="70% вискоза 25% хлопок 5% шерсть" price="130"/>
<ProductPhoto name ="Платье" comp="80% хлопок 20% поливискоза" price="150"/>
<ProductPhoto name ="Пальто" comp="100% плащевка" price="250"/>
<ProductPhoto name ="Худи" comp="50% поливискоза 50% искуственная замша" price="190"/>
<ProductPhoto name ="Косуха" comp="100% экокожа - основной материал  80% полиэстер 20% хлопок" price="490"/>

</div>

);
}

export default Shop ;