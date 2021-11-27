import { connect } from "react-redux";
import { addPostNewAction } from "../../../../redux/AboutUs-Reducer";
import { onPostChangeNewAction } from "../../../../redux/AboutUs-Reducer";
import Buttons from "./Buttons";


let mapStateToProps =(state)=>{  // здесь в свойствах к нам приходит state
  
  return {
    AboutUsPage:state.AboutUsPage   // из state берём нужную нам часть которую нужно прокинуть в UI и даём ей название 
  }
}
let mapDispatchToProps =(dispatch)=>{ // здесь в свойствах к нам приходит dispatch
  return{
    OnAddPost: () => {
      dispatch(addPostNewAction());   // диспачим 
    },
    OnPostChange: (text) => {
      dispatch(onPostChangeNewAction(text)); // диспачим и в свойствах передаём впечатанный текст
    } 
  }
}
const ButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(Buttons); // создаём функцию из библиотекиreact-redux connect- она конектит наш UI с state котопый она берёт из store самомтоятельно
                                                                             
export default ButtonsContainer;
