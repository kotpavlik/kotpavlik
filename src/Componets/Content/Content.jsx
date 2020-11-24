import React from 'react';
import s from './Content.module.css'
import Massages from './Massages/Massages';

const Content = (props) => {
debugger;

  let postsElements =
    props.store.posts.map(p => <Massages message={p.post} likesCount={p.likesCount} />);

  let addPost = () => {
    props.onAddPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
    
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
            value={props.store.newPostText} />
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

