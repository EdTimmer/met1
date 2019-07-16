import React from 'react';
import './App.css';
import '../entries.js';

import Header from './Header';
import Entry from './Entry';

class App extends React.Component {
  state = {
    name: "",
    hours: 0,
    description: ""
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="divider-red"></div>
        <div>
          <Entry name="testname" hours={8} description="big project" />
        </div>
        <div className="divider-grey"></div>
      </div>
    );
  }
  
}

export default App;
