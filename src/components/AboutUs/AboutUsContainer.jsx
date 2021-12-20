import  axios from 'axios';
import React from 'react';
import { connect } from "react-redux";
import { useMatch } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent';
import {getProfileThunk} from "../../redux/AboutUs-Reducer";
import AboutUs from './AboutUs';


class AboutUsContainer extends React.Component {
componentDidMount() {
  let userId = this.props.match.params.userId;  // это хук смотри на строку 39.Там всё поймёшь!
  if (!userId) {
    userId = 2;
  }
  else if (userId === "*") {
    userId = 2;
  }
this.props.getProfileThunk(userId);
}

  render() {
  
    return (
      <AboutUs  profile={this.props.profile} isAuth={this.props.isAuth} /> 
    )
  }
}

let mapStateToProps =(state)=> {
  return {
    profile:state.AboutUsPage.profile
  }
}

let AuthRedirectComponent = withAuthRedirect(AboutUsContainer); 

const AboutUsMatch = (props) => {
  
	let match = useMatch("/profile/:userId/");
	return (
		<AuthRedirectComponent {...props} match={match} />
	)
}

export default connect(mapStateToProps,{getProfileThunk})(AboutUsMatch);

 


