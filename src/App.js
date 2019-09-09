import React from 'react';
// import './App.css';
import Header from './component/Header.jsx'
import Body from './component/Body.js'
import Footer from './component/Footer.js'
import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
      <Body/>
    </Switch>
    <Footer/>
    </div>
  );
}
