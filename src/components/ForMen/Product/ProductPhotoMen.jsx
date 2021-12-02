import React from 'react';
import s from './ProductPhotoMen.module.css'
import SpecificationsMen from './SpecificationsMen';
import ForMenPhoto from '../../assets/productPhoto/5.jpg'

const ProductPhotoMen = (props) => {
return (
<div className={s.photo}>
    <img className={s.im} src={ForMenPhoto} alt="" />
    <SpecificationsMen nameFm={props.nameFm} compFm={props.compFm} priceFm={props.priceFm}/>
</div>
);
}

export default ProductPhotoMen ;