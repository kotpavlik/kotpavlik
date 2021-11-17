import React from 'react';
import s from './ForWomen.module.css'
import NavBarForWomen from './NavBar/NavBarForWomen';
import ProductPhotoWomen from './Product/ProductPhotoWomen';


const ForWomen = (props) => {


      let ProductPhotoWomenElement = props.productForWomen.productWomenArray.map (product => <ProductPhotoWomen nameFW ={product.name} compFW={product.comp} priceFW={product.price}/>)
    
return (
<div className={s.forWomen}>
      <NavBarForWomen/>
      <div className={s.shopFW}>
          <div className={s.headerFW}>Для Женщин</div>
        {ProductPhotoWomenElement}
      </div>
    </div>
);
}

export default ForWomen ;