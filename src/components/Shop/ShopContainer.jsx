import { connect } from "react-redux";
import Shop from "./Shop";

let mapStateToProps = (state) => {
  debugger;
  return {
    ShopPage:state.ShopPage
  }
};

const ShopContainer = connect(mapStateToProps)(Shop);

export default ShopContainer;
