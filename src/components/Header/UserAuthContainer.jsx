import React from 'react';
import { connect } from 'react-redux';
import UserAuth from './UserAuth';
import {logout} from '../../redux/Auth-Reducer';



class UserAuthComponent extends  React.Component {
    
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

export default connect(mapStateToProps,{logout})(UserAuthComponent);