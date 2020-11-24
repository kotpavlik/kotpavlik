import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../Redux/reducerContent';
import Content from './Content';

const ContentContainer = (props) => {
debugger;

let store = props.store.contentPage;

  let onAddPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let PostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  }


  return <Content updateNewPostText={PostChange} onAddPost={onAddPost} store={store}/>
}
export default ContentContainer;

