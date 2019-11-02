import React from 'react';
import './App.css';
import Blog from '../blog/Blog';
import StickyFooter from '../sticky-footer/StickyFooter'
import Navigation from '../navigation/Navigation';
import AppBar from '../AppBar/AppBar'

function App() {
  return (
    <div>
      <AppBar/>
      <Blog/>
    </div>
  );
}

export default App;
