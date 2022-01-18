import React, { useState } from "react";
import { useEffect } from "react";
import s from "./AboutStatus.module.css";

const AboutStatusHooks = React.memo(props => {

  let [editMode,setEditMode] = useState(true); // хук useState создаёт объект с значением и функцию которая может его изменять 
  let [status,setStatus] = useState(props.status); // такой же хук

  useEffect( () => { // насколько я помню useEffect работает как componentDidUpdate и следит только за статусам и перересовывает 
    setStatus(props.status); // его когда он меняется 
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
