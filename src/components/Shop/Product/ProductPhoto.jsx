import React from 'react';
import Specifications from './Specifications';
import s from './ProductPhoto.module.css'

const ProductPhoto = () => {
return (
<div className={s.photo}>
    <img className={s.im} src="/productPhoto/1.jpg" alt="" />
    <Specifications/>
</div>
);
}

export default ProductPhoto ;