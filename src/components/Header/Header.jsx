import React from 'react';
import Logo from './Logo';
import MenuHead from './MenuHead';
import Basket from './Basket';
import User from './User';
import s from './Header.module.css'

const Header = () => {
return (
<div className = {s.header}>
<Logo/>
<MenuHead/>
<Basket/>
<User/>
</div>
);
}

export default Header ;