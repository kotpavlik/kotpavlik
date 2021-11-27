import { connect } from "react-redux";
import TestMessenger from "./TestMessenger";



let mapStateToProps =(state)=>{  // здесь в свойствах к нам приходит state
  
  return {
    TestMessengerPage:state.TestMessengerPage // из state берём нужную нам часть которую нужно прокинуть в UI и даём ей название 
  }
};

const TestMessengerContainer = connect(mapStateToProps)(TestMessenger)

export default TestMessengerContainer;
