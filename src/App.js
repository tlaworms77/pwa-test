import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <button
          title='test'
          value={'123123'}
          onClick={() => {
            // This variable will save the event for later use.
            // window.deferredPrompt.prompt();
          }}
        >
          test
        </button>
      </header>
    </div>
  );
}

export default App;
