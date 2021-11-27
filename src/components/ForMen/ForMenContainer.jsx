import { connect } from "react-redux";
import ForMen from "./ForMen";


let mapStateToProps =(state)=> {
  return {
    ForMenPage:state.ForMenPage
  }
};
const ForMenContainer = connect(mapStateToProps)(ForMen);

export default ForMenContainer;
