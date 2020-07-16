import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage.jsx'
import Header from './components/header/Header.jsx'
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/shop/hats' component={HatsPage} /> */}
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
