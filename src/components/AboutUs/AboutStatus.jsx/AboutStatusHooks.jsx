import React, { useState } from "react";
import { useEffect } from "react";
import s from "./AboutStatus.module.css";

const AboutStatusHooks = React.memo(props => {

  let [editMode,setEditMode] = useState(true);
  let [status,setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  },[props.status]);

  const activateEditMode = () => {
      setEditMode(false);
  };

  const deactivateEditMode = () => {
    setEditMode(true);
    props.updateUserStatusThunk(status)
  };
  const  onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

    return (
      <div className={s.aboutMeStatusWraper}>
        <div className={s.staticStatus}>status:</div>
        { editMode ? (
            <div className={s.wraperStatusSpan}>
            <span  onDoubleClick={activateEditMode}
            className={s.statusSpan}>{status || "no status"}</span>
            </div>
        ):(
            <div className={s.wpaperStatusInput}>
            <input 
            placeholder="wright please"
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            onChange={onStatusChange} className={s.statusInput} />
            </div>
        )}
        
      </div>
    );
  })

export default AboutStatusHooks;

// React.memo - избавляет нас от ненужных рендеров и оптимизирует работу приложения.Если не приходят новые props или state 
// то компонента не перересовывается вот так то )
