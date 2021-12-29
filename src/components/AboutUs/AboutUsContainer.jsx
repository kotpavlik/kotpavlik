import React from 'react';
import { connect } from "react-redux";
import { useMatch } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent';
import {getProfileThunk,getUserStatusThunk,updateUserStatusThunk} from "../../redux/AboutUs-Reducer";
import AboutUs from './AboutUs';


class AboutUsContainer extends React.Component {
componentDidMount() {
  let userId = this.props.match.params.userId;  // это хук смотри на строку 39.Там всё поймёшь!
  if (!userId) {
    userId = 21125;
  }
  else if (userId === "*") {
    userId = 21125; //21125
  }
this.props.getProfileThunk(userId);
this.props.getUserStatusThunk(userId)
}

  render() {
    return (
      <AboutUs  profile={this.props.profile} isAuth={this.props.isAuth}
      status={this.props.status} updateUserStatusThunk={this.props.updateUserStatusThunk}/> 
    )
  }
}

let mapStateToProps =(state)=> {
  return {
    profile:state.AboutUsPage.profile,
    status:state.AboutUsPage.status
  }
}
const AboutUsMatch = (props) => {
  debugger
	let match = useMatch("/profile/:userId/");
	return (
		<AuthRedirectComponent {...props} match={match} />
	)
}
let AuthRedirectComponent = withAuthRedirect(AboutUsContainer); 


export default connect(mapStateToProps,{getProfileThunk,getUserStatusThunk,updateUserStatusThunk})(AboutUsMatch);

 


