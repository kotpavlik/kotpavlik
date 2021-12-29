import React from 'react';
import { connect } from 'react-redux';
import UserAuth from './UserAuth';
import {getAuthAboutUs,logout} from '../../redux/Auth-Reducer';



class UserAuthComponent extends  React.Component {
    
    componentDidMount() {
       
      this.props.getAuthAboutUs();
    };
    render() {
        return <UserAuth {...this.props} />
    }
}

let mapStateToProps = (state) => {
  
    return {
    isAuth:state.Auth.isAuth,
        login:state.Auth.login,
}
}



export default connect(mapStateToProps,{getAuthAboutUs,logout})(UserAuthComponent);