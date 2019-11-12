import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNavigation from '../MainNavigation';
import Header from '../header/Header'
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Header/> */}
          <MainNavigation/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;