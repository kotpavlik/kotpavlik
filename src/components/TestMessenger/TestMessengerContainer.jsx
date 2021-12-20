import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirectComponent";
import TestMessenger from "./TestMessenger";



let mapStateToProps =(state)=>{  // здесь в свойствах к нам приходит state
  
  return {
    TestMessengerPage:state.TestMessengerPage ,// из state берём нужную нам часть которую нужно прокинуть в UI и даём ей название 
  }
};

// это HOC-создает контейнерную компоненту и принимает 
//контейнерную компоненту, добавляет логику и вохвращает компаненту. Избавляет нас от дублирования кода 
// через compose можнго сделать вложеность HOC друг в друга (UsersComponent > withAuthRedirect > connect)    

export default compose (connect(mapStateToProps),withAuthRedirect)(TestMessenger);
