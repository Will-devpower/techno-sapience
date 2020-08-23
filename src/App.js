import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import Home  from './components/home';
import Cart from './components/cart'

import store from './store.js'


function App() {
  console.log(store.getState( ))
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>          
        </BrowserRouter>      
      </div>
    </Provider>
  );
}

export default App;
