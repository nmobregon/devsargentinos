import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://join.slack.com/t/devsargentinos/shared_invite/enQtODcwNTgwNDg3NDc4LTI5ZGM0YzA4ZjNhOTU3ODcwYTNiYzU2NmE2MzNjZDRkNzk4OTNjYzM1ZTk0MjBmNjM4MzU3ZmI2NDY3NTMxZmE"
          target="_blank"
          rel="noopener noreferrer"
        >
			Unirse en Slack!
        </a>
      </header>
    </div>
  );
}

export default App;
