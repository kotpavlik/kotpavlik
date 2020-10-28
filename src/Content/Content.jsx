import React from 'react';
import s from './Content.module.css'
import Massages from './Massages/Massages';

const Content = (props) => {
  

  let postsElements =
    props.state.posts.map(p => <Massages message={p.post} likesCount={p.likesCount} />);

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
props.updateNewPostText(text);
  }

  let newPostElement = React.createRef();

  return (
    <div>
      <div className={s.text}>
        <div> <h2>Content</h2> </div>
        <div>
          <textarea
            onChange={onPostChange}
            placeholder="Please,wright"
            className={s.textarea}
            ref={newPostElement}
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

