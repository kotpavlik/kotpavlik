import React from "react";
import { connect } from "react-redux";
import { setUsers, toggleFollow,setCurrentPage,setUsersTotalCount, toogleIsFetching} from "../../redux/Users-Reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../Functional/Preloader";
import { usersAPI } from "../../api/api";


class UsersComponent extends  React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
    });
    };
    
    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(data.items);
    });
    }

    render () { 
       
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount} pageSize ={this.props.pageSize}
        users={this.props.users} toggleFollow={this.props.toggleFollow} currentPage={this.props.currentPage}
        onPageChange={this.onPageChange} 
   />
   </>
    }};

let mapStateToProps = (state) => {
   
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage:state.UsersPage.currentPage,
        isFetching:state.UsersPage.isFetching
    }
};

export default connect (mapStateToProps,{toggleFollow,setUsers,setCurrentPage,setUsersTotalCount,toogleIsFetching})
(UsersComponent);


//   toogleIsFetching: (isFetching) => {
//   dispatch(toogleIsFetchingAC(isFetching));
// },
// так работает dispatch изнутри, но функция connect сама берёт эти объекты и создаёт callback 
// если и ключ и значение одинаково в объекте то не обязательно писать name = name; - можно писать просто name (урок 58);