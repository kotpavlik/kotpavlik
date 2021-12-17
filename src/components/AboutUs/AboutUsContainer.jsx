import  axios from 'axios';
import React from 'react';
import { connect } from "react-redux";
import { useMatch } from 'react-router';
import {getProfileThunk} from "../../redux/AboutUs-Reducer";
import AboutUs from './AboutUs';


class AboutUsContainer extends React.Component {
componentDidMount() {
  let userId = this.props.match.params.userId;  // это хук смотри на строку 39.Там всё поймёшь!
  if (!userId) {
    userId = 2;
  }
  else if (userId == "*") {
    userId = 2;
  }
this.props.getProfileThunk(userId);
}

  render() {
  
    return (
      <AboutUs  profile={this.props.profile} /> 
    )
  }
}

let mapStateToProps =(state)=> {
  return {
    profile:state.AboutUsPage.profile
  }
}

const AboutUsMatch = (props) => {
  
	let match = useMatch("/profile/:userId/");
	return (
		<AboutUsContainer {...props} match={match} />
	)
}

export default connect(mapStateToProps,{getProfileThunk})(AboutUsMatch);
 


