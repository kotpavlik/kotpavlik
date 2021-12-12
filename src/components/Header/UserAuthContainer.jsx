import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import UserAuth from './UserAuth';
import {setUserAuthData} from "../../redux/Auth-Reducer";



class UserAuthComponent extends  React.Component {
   
    componentDidMount() {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
withCredentials: true
        }
        ).then(response=> {
            if (response.data.resultCode === 0){
                let {id, email, login} = response.data.data ; 
                this.props.setUserAuthData(id, email, login);
            }
        }
        );
    };
    render() {
        return <UserAuth {...this.props} />
    }
}

let mapStateToProps = (state) => {
  
    return {
    isAuth:state.Auth.isAuth,
        login:state.Auth.login

}
}



export default connect(mapStateToProps,{setUserAuthData})(UserAuthComponent);