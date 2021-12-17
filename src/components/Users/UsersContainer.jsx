import React from "react";
import { connect } from "react-redux";
import { getUsers, toggleFollow,setUsersTotalCount,toogleFollowingInProgress,follow,unfollow} from "../../redux/Users-Reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../Functional/Preloader";

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
        <Users totalUsersCount={this.props.totalUsersCount} pageSize ={this.props.pageSize}
        users={this.props.users} toggleFollow={this.props.toggleFollow} currentPage={this.props.currentPage}
        onPageChange={this.onPageChange} followingInProgress={this.props.followingInProgress} 
        toogleFollowingInProgress={this.props.toogleFollowingInProgress} follow={this.props.follow} unfollow={this.props.unfollow}
   />
   </>
    }};

let mapStateToProps = (state) => {
   
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage:state.UsersPage.currentPage,
        isFetching:state.UsersPage.isFetching,
        followingInProgress:state.UsersPage.followingInProgress
    }
};

export default connect (mapStateToProps,{toggleFollow,
    setUsersTotalCount,toogleFollowingInProgress,getUsers,follow,unfollow})
(UsersComponent);


//   toogleIsFetching: (isFetching) => {
//   dispatch(toogleIsFetchingAC(isFetching));
// },
// так работает dispatch изнутри, но функция connect сама берёт эти объекты и создаёт callback 
// если и ключ и значение одинаково в объекте то не обязательно писать name = name; - можно писать просто name (урок 58);