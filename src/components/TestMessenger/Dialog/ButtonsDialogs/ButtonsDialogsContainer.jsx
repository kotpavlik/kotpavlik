import { connect } from "react-redux";
import {addMessageAction,onMessageAction} from "../../../../redux/TestMessenger-Reducer";
import ButtonsDialogs from "./ButtonsDialogs";



let mapStateToProps = (state) => {
  
  return {
    NewMessageText:state.TestMessengerPage.NewMessageText
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    
      addMessange: () => {
        dispatch(addMessageAction());
      }
    ,
    
      MessageChange: (text) => {
        dispatch(onMessageAction(text));
      }
  }
}

const ButtonsDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonsDialogs);

export default ButtonsDialogsContainer;
