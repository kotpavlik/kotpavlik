import React from 'react';
import s from './ForWomen.module.css'
import NavBarForWomen from './NavBar/NavBarForWomen';
import ProductPhotoWomen from './Product/ProductPhotoWomen';


const ForWomen = (props) => {


      let ProductPhotoWomenElement = props.ForWomenPage.productWomenArray.map (product => <ProductPhotoWomen nameFW ={product.name} compFW={product.comp} priceFW={product.price}/>)
      // эта функция создана для итерации по массиву объекта.Берём массив productWomenArray применяем метод map  назначаем как будет называться ка ячейка массива (product) и проходимся по массиву, после чего получаем переменную которую используем далее вместо тега 
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