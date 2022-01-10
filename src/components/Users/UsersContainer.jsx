import React from "react";
import { connect } from "react-redux";
import { getUsers, toggleFollow,setUsersTotalCount,toogleFollowingInProgress,follow,unfollow} from "../../redux/Users-Reducer";
import Users from "./Users";
import Preloader from "../Functional/Preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getportionsSize, getTotalUsersCount, getUsersSelector } from "../../redux/users-selectors";

class UsersComponent extends  React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };
    
    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render () { 
        
        return <>
        {this.props.isFetching ? <Preloader/> : null}  
        <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize ={this.props.pageSize}
        users={this.props.users}
         toggleFollow={this.props.toggleFollow} 
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange} 
        followingInProgress={this.props.followingInProgress} 
        toogleFollowingInProgress={this.props.toogleFollowingInProgress} 
        follow={this.props.follow} unfollow={this.props.unfollow}
        isAuth={this.props.isAuth}
        portionsSize={this.props.portionsSize}
   />
   </>
    }};

let mapStateToProps = (state) => {
   
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionsSize: getportionsSize(state)
    }
};

export default compose (connect (mapStateToProps,{toggleFollow,
    setUsersTotalCount,toogleFollowingInProgress,getUsers,follow,unfollow}))(UsersComponent);
// через compose можнго сделать вложеность HOC друг в друга (UsersComponent > withAuthRedirect > connect)    
//   toogleIsFetching: (isFetching) => {
//   dispatch(toogleIsFetchingAC(isFetching));
// },
// так работает dispatch изнутри, но функция connect сама берёт эти объекты и создаёт callback 
// если и ключ и значение одинаково в объекте то не обязательно писать name = name; - можно писать просто name (урок 58);
// из редюсора аутентификации забираем isAuth:state.Auth.isAuth - булево значение которое тру если зарегины и фолс если не зареганы