import { connect } from 'react-redux';
import ForWomen from './ForWomen';

let mapStateToProps = (state) => {
  return {
    ForWomenPage:state.ForWomenPage
  }
};

const ForWomenContainer = connect(mapStateToProps)(ForWomen);

export default ForWomenContainer ;