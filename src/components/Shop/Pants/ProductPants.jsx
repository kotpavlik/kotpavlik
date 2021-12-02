import React from "react";
import Specifications from "./Specifications";
import s from "./ProductPants.module.css";
import PantsPhoto from '../../assets/productPhoto/1.jpg'

const ProductPants = (props) => {
  return (
    
      <div className={s.photo}>
        <img className={s.im} src={PantsPhoto} />
        <Specifications
          name={props.name}
          comp={props.comp}
          price={props.price}
        />
      </div>
    
  );
};

export default ProductPants;
