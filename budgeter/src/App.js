import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Legal from './Components/Legal/Legal';

import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
      <Route path="/main" component={Main} />
      <Route path="/legal" component={Legal} />
      <Footer />
    </div>
  );
}

export default App;
