import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // new method to close subscription when component unmount; we dont want memory leaks in our JS app.
  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} /> 
        <Switch>
          <Route exact path="/" component={HomePage}/ >
          <Route excat path='/shop' component={ShopPage}/ >
          <Route excat path='/signin' component={SignInAndSignUpPage}/ >
  
        </Switch>
      </div>
    );
  }
  
}
export default App;
