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

function App() {
  return (
    <div className="App">

      <Router>
      
      <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div className="">
          <Switch>

            <Route exact path="/">
              <Login />

            </Route>
            <Route path="/main">
              <Main />
              <Footer />
            </Route>
          </Switch>
            </div>
        
       
    </Router>
    </div>
  );
}



export default App;
