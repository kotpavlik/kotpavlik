import React from 'react';
import { connect } from "react-redux";
import Messenger from "./Messenger";



let mapStateToProps =(state)=> {
  return {
    state:state.AboutUsPage,
    
  }
}

export default connect(mapStateToProps, {})(Messenger);
 


