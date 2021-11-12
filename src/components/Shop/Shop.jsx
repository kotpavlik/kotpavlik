import React from 'react';
import ProductPhoto from './Product/ProductPhoto';
import s from './Shop.module.css'

const Shop = () => {
return (
<div className={s.shop}>
   <div className={s.header}> Имя категории </div>
<ProductPhoto/>
<ProductPhoto/>
<ProductPhoto/>
<ProductPhoto/>
<ProductPhoto/>
<ProductPhoto/>

</div>

);
}

export default Shop ;