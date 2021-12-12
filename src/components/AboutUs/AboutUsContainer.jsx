import  axios from 'axios';
import React from 'react';
import { connect } from "react-redux";
import { useMatch } from 'react-router';
import {setMessenger,setContacts,setLookingForAJob} from "../../redux/AboutUs-Reducer";
import AboutUs from './AboutUs';


class AboutUsContainer extends React.Component {
componentDidMount() {
  debugger
  let userId = this.props.match.params.userId;
  if (!userId) {
    userId = 2;
  }
  else if (userId == "*") {
    userId = 2;
  }
  debugger
  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
  this.props.setMessenger(response.data);
  this.props.setContacts(response.data);
  this.props.setLookingForAJob(response.data);
});
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

export default connect(mapStateToProps,{setMessenger,setContacts,setLookingForAJob})(AboutUsMatch);
 


