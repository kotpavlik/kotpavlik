import React from 'react';
import Logo from './Logo';
import MenuHead from './MenuHead';
import Basket from './Basket';
import User from './User';

const Header = () => {
return (
<div className = 'Header'>
<Logo/>
<MenuHead/>
<Basket/>
<User/>
</div>
);
}

export default Header ;