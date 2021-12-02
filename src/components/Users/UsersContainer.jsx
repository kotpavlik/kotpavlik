import { connect } from "react-redux";
import { setUsersAC, toggleFollowAC, toggleUnFollowAC } from "../../redux/Users-Reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
   
    return {
        users: state.UsersPage.users
    }
};

let dispatchStateToProps = (dispatch) => {
    
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};
export default connect (mapStateToProps,dispatchStateToProps)(Users);