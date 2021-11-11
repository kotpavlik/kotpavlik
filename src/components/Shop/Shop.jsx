import React from 'react';
import ProductPhoto from './Product/ProductPhoto';
import s from './Shop.module.css'

const Shop = () => {
return (
<div className={s.shop}>Имя категории
<ProductPhoto/>
<ProductPhoto/>
<ProductPhoto/>

</div>

);
}

export default Shop ;