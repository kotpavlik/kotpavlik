import React from 'react';
import Logo from './Logo';
import MenuHead from './MenuHead';
import Basket from './Basket';
import User from './User';
import s from './Header.module.css'
import UsersHead from './UsersHead';

const Header = () => {
return (
<div className = {s.header}>
<MenuHead/>
<Logo/>
<UsersHead/>
<Basket/>
<User/>
</div>
);
}

export default Header ;