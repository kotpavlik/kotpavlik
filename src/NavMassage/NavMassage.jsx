import React from 'react';
import Dialog from './Dialog/Dialog';
import Mass from './Mass/Mass';
import s from './NavMassage.module.css'
import TextareaNavMessage from './TextareaNavMessage/TextareaNavMessage';

const NavMassage = (props) => {
    
    let dialogsElements = props.state.dialogs.map (d => <Dialog name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map (m => <Mass message={m.message} />);

    return (
        <div className={s.navmassage} >
            <div className={s.dialog}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <div>
                <TextareaNavMessage/>
            </div>
        </div>
    )
}

export default NavMassage;
