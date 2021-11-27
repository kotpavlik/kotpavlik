import React from 'react';
import s from './Dialog.module.css';

const Dialog = (props) => {

return (
<div className={s.dialog}>
    <div className={s.dialogs}> {props.message}</div>
</div>
);
}

export default Dialog ;