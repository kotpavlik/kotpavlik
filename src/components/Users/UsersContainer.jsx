import { connect } from "react-redux";
import { setUsersAC, toggleFollowAC, toggleUnFollowAC } from "../../redux/Users-Reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage.Users
    }
};

let dispatchStateToProps = (dispatch) => {
    debugger;
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