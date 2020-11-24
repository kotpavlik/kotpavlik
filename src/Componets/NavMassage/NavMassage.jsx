import React from 'react';
import Dialog from './Dialog/Dialog';
import Mass from './Mass/Mass';
import s from './NavMassage.module.css'
import TextareaNavMessageContainer from './TextareaNavMessage/TextareaNavMessageContainer';

const NavMassage = (props) => {
    debugger;
    let dialogsElements = props.store.dialogs.map (d => <Dialog name={d.name} id={d.id} />);
    let messagesElements = props.store.messages.map (m => <Mass message={m.message} />);

    return (
        <div className={s.navmassage} >
            <div className={s.dialog}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <div>
                <TextareaNavMessageContainer 
                dispatch={props.dispatch}
                store={props.store}/>
            </div>
        </div>
    )
}

export default NavMassage;
