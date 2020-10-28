import React from 'react';
import s from './Mass.module.css'

const Mass = (props) => {


    return (
        <div>
            <div className={s.mass}>
                {props.message}
            </div>
        </div>
    )
}
export default Mass;
