import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {

  // new method to close subscription when component unmount; we dont want memory leaks in our JS app.
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        // subscribe; listen to any changes to that data and also get back to first state
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

          console.log(this.state);
 
        })
      } else {
        setCurrentUser(userAuth);
      }
    
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 
  render() {
    return (
      <div>
        <Header /> 
        <Switch>
          <Route exact path="/" component={HomePage}/ >
          <Route excat path='/shop' component={ShopPage}/ >
          <Route excat path='/signin' component={SignInAndSignUpPage}/ >
  
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(null, mapDispatchToProps)(App);
