import React from 'react';
import s from './ProductPhotoMen.module.css'
import SpecificationsMen from './SpecificationsMen';

const ProductPhotoMen = (props) => {
return (
<div className={s.photo}>
    <img className={s.im} src="/productPhoto/5.jpg" alt="" />
    <SpecificationsMen nameFm={props.nameFm} compFm={props.compFm} priceFm={props.priceFm}/>
</div>
);
}

export default ProductPhotoMen ;