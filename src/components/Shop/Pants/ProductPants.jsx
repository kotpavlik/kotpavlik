import React from 'react';
import Specifications from './Specifications';
import s from './ProductPants.module.css'

const ProductPants = (props) => {
return (
<div className={s.photo}>
    <img className={s.im} src="/productPhoto/1.jpg" alt="" />
    <Specifications name={props.name} comp={props.comp} price={props.price}/>
</div>
);
}

export default ProductPants ;