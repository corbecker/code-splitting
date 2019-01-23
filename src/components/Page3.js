import React from 'react';
import logo from '../logo.svg';

//stateless function
const Page3 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="app-title">Welcome to Page 3</h1>
      </header>
      <button onClick={() => onRouteChange('page2')}>Page 1</button>
      <button onClick={() => onRouteChange('page3')}>Page 2</button>
    </div>
  )
}

export default Page3;