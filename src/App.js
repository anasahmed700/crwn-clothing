import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage.jsx'



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/shop/hats' component={HatsPage} /> */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
