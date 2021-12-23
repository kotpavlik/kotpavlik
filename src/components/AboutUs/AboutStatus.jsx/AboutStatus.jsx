import React from "react";
import s from "./AboutStatus.module.css";

class AboutStatus extends React.Component {
    
  state = {
    editMode:true,
    status: this.props.status
  };

  activateEditMode = () => {
      this.setState ({
        editMode:false
      })
  };
  deactivateEditMode = () => {
    this.setState ({
      editMode:true
    })
   
    this.props.updateUserStatusThunk(this.state.status)
  };
  onStatusChange = (e) => {
      this.setState({
          status: e.currentTarget.value
      })
  };
  componentDidUpdate(prevProps,PrevState) {   // сравнивает текущие пропсы и стейт с обновлённым и апдейтит и синхронизирует их
   if (prevProps.status !== this.props.status) {  // если предыдущие пропсы из статуса не равны текущим(изменённым)
       this.setState({   // то сетаем в стейт 
           status:this.props.status // новые значения статуса 
       })
   }
  }


  render() {
    return (
      <div className={s.aboutMeStatusWraper}>
        <div className={s.staticStatus}>status:</div>
        { this.state.editMode ? (
            <div className={s.wraperStatusSpan}>
            <span  onDoubleClick={this.activateEditMode}
            className={s.statusSpan}>{this.props.status || "no status"}</span>
            </div>
        ):(
            <div className={s.wpaperStatusInput}>
            <input 
            placeholder="wright please"
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            value={this.state.status}
            onChange={this.onStatusChange} className={s.statusInput} />
            </div>
        )}
        
      </div>
    );
  }
}
export default AboutStatus;
