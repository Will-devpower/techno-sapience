import React from 'react';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Home  from './components/Home';
import Cart from './components/cart'
import { Provider } from 'react-redux';
import store from './store.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

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
          <Footer />
        </BrowserRouter>      
      </div>
    </Provider>
  );
}

export default App;
