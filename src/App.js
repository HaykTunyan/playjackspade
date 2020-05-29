import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';



const App = () => {

  return (
    
<Router>
      <div className="App">
      <Header />

        <Switch>
       
          <Route path="/main">
            <Main />
          <Footer />
         </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}


export default App;
