import React from 'react';
import s from './ProductPhotoWomen.module.css'
import SpecificationsWomen from './SpecificationsWomen';

const ProductPhotoWomen = (props) => {
return (
<div className={s.photo}>
    <img className={s.im} src="/productPhoto/2.jpg" alt="" />
    <SpecificationsWomen nameFW={props.nameFW} compFW={props.compFW} priceFW={props.priceFW}/>
</div>
);
}

export default ProductPhotoWomen ;