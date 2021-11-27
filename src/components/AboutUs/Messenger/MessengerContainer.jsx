import { connect } from "react-redux";
import Messenger from "./Messenger";

let mapStateToProps =(state)=> {
  return {
    state:state.AboutUsPage
  }
}

const MessengerContainer = connect(mapStateToProps)(Messenger);
 

export default MessengerContainer;
