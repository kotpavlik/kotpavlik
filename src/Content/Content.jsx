import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../Redux/State';
import s from './Content.module.css'
import Massages from './Massages/Massages';

const Content = (props) => {


  let postsElements =
    props.state.posts.map(p => <Massages message={p.post} likesCount={p.likesCount} />);

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  }


  return (
    <div>
      <div className={s.text}>
        <div> <h2>Content</h2> </div>
        <div>
          <textarea
            onChange={onPostChange}
            placeholder="Please,write"
            className={s.textarea}
            value={props.state.newPostText} />
        </div>
        <div className={s.but}>
          <button onClick={addPost}>send</button>
        </div>
        {postsElements}
      </div>
    </div>
  )

}
export default Content;

