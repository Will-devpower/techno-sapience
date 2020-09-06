import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import Home  from './components/home';
import PostDetail from './components/post'

import store from './store.js'


function App() {  
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:postId" component={PostDetail} />
            
          </Switch>          
        </BrowserRouter>      
      </div>
    </Provider>
  );
}

export default App;
