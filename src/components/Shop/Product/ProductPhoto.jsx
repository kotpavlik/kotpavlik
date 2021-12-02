import React from 'react';
import Specifications from './Specifications';
import s from './ProductPhoto.module.css';
import AllProductPhoto from '../../assets/productPhoto/6.jpg'

const ProductPhoto = (props) => {
return (
<div className={s.photo}>
    <img className={s.im} src={AllProductPhoto} />
    <Specifications name={props.name} comp={props.comp} price={props.price}/>
</div>
);
}

export default ProductPhoto ;