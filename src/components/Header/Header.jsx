import React from 'react';
import Logo from './Logo';
import MenuHead from './MenuHead';
import Basket from './Basket';
import s from './Header.module.css'
import UsersHead from './UsersHead';
import UserAuthContainer from './UserAuthContainer';

const Header = () => {
return (
<div className = {s.header}>
<MenuHead/>
<Logo/>
<UsersHead/>
<Basket/>
<UserAuthContainer/>
</div>
);
}

export default Header ;