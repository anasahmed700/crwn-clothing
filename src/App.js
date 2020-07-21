import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage.jsx'
import Header from './components/header/Header.jsx'
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';
import { auth } from './firebase/firebase.utils'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='/shop/hats' component={HatsPage} /> */}
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
