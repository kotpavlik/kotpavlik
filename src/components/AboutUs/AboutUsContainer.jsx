import React from 'react';
import { connect } from "react-redux";
import { useMatch } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent';
import {getProfileThunk,getUserStatusThunk,updateUserStatusThunk,savePhotoThunk,saveProfileDataThunk} from "../../redux/AboutUs-Reducer";
import AboutUs from './AboutUs';


class AboutUsContainer extends React.Component {

refrshProfile()  {
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

componentDidMount() { // мантируется логика и когда мы кликаем на какого нибудь юзера не эта логика пропадает 
  this.refrshProfile();
}

componentDidUpdate(prevProps, prevState, snapshot) { // смотрит какой был стейт и пропсы до этого и возвращает предыдущий стейт 
  if (this.props.match.params.userId != prevProps.match.params.userId)
 this.refrshProfile();
}

  render() {
    return (
      <AboutUs isOwner={this.props.match.params.userId == "*"} 
      savePhotoThunk={this.props.savePhotoThunk}
      profile={this.props.profile} isAuth={this.props.isAuth}
      status={this.props.status} updateUserStatusThunk={this.props.updateUserStatusThunk}
      saveProfileDataThunk={this.props.saveProfileDataThunk}
      /> 
    )
  }
}

let mapStateToProps =(state)=> {
  return {
    profile:state.AboutUsPage.profile,
    status:state.AboutUsPage.status,

  }
}
const AboutUsMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<AboutUsContainer {...props} match={match} />
	)
}



export default connect(mapStateToProps,{getProfileThunk,getUserStatusThunk,updateUserStatusThunk,savePhotoThunk,saveProfileDataThunk})(AboutUsMatch);

 


